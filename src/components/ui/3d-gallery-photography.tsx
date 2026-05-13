'use client';

import type React from 'react';
import {
  useRef,
  useMemo,
  useCallback,
  useState,
  useEffect,
  useLayoutEffect,
  Suspense,
  Component,
} from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

type ImageItem = string | { src: string; alt?: string };

interface FadeSettings {
  fadeIn: { start: number; end: number };
  fadeOut: { start: number; end: number };
}

interface BlurSettings {
  blurIn: { start: number; end: number };
  blurOut: { start: number; end: number };
  maxBlur: number;
}

interface InfiniteGalleryProps {
  images: ImageItem[];
  speed?: number;
  zSpacing?: number;
  visibleCount?: number;
  falloff?: { near: number; far: number };
  fadeSettings?: FadeSettings;
  blurSettings?: BlurSettings;
  className?: string;
  style?: React.CSSProperties;
}

interface PlaneData {
  index: number;
  z: number;
  imageIndex: number;
  x: number;
  y: number;
}

const DEFAULT_DEPTH_RANGE = 50;
const MAX_HORIZONTAL_OFFSET = 8;
const MAX_VERTICAL_OFFSET = 8;

// ─── Error Boundary ────────────────────────────────────────────
class GalleryErrorBoundary extends Component<
  { children: React.ReactNode; fallback: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode; fallback: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) return this.props.fallback;
    return this.props.children;
  }
}

// ─── Shader Material factory ────────────────────────────────────
const createClothMaterial = () => {
  return new THREE.ShaderMaterial({
    transparent: true,
    uniforms: {
      map: { value: null },
      opacity: { value: 1.0 },
      blurAmount: { value: 0.0 },
      scrollForce: { value: 0.0 },
      time: { value: 0.0 },
      isHovered: { value: 0.0 },
    },
    vertexShader: `
      uniform float scrollForce;
      uniform float time;
      uniform float isHovered;
      varying vec2 vUv;
      varying vec3 vNormal;
      void main() {
        vUv = uv;
        vNormal = normal;
        vec3 pos = position;
        float curveIntensity = scrollForce * 0.3;
        float distanceFromCenter = length(pos.xy);
        float curve = distanceFromCenter * distanceFromCenter * curveIntensity;
        float ripple1 = sin(pos.x * 2.0 + scrollForce * 3.0) * 0.02;
        float ripple2 = sin(pos.y * 2.5 + scrollForce * 2.0) * 0.015;
        float clothEffect = (ripple1 + ripple2) * abs(curveIntensity) * 2.0;
        float flagWave = 0.0;
        if (isHovered > 0.5) {
          float wavePhase = pos.x * 3.0 + time * 8.0;
          float waveAmplitude = sin(wavePhase) * 0.1;
          float dampening = smoothstep(-0.5, 0.5, pos.x);
          flagWave = waveAmplitude * dampening;
          float secondaryWave = sin(pos.x * 5.0 + time * 12.0) * 0.03 * dampening;
          flagWave += secondaryWave;
        }
        pos.z -= (curve + clothEffect + flagWave);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
      }
    `,
    fragmentShader: `
      uniform sampler2D map;
      uniform float opacity;
      uniform float blurAmount;
      uniform float scrollForce;
      varying vec2 vUv;
      varying vec3 vNormal;
      void main() {
        vec4 color = texture2D(map, vUv);
        if (blurAmount > 0.0) {
          vec2 texelSize = 1.0 / vec2(textureSize(map, 0));
          vec4 blurred = vec4(0.0);
          float total = 0.0;
          for (float x = -2.0; x <= 2.0; x += 1.0) {
            for (float y = -2.0; y <= 2.0; y += 1.0) {
              vec2 offset = vec2(x, y) * texelSize * blurAmount;
              float weight = 1.0 / (1.0 + length(vec2(x, y)));
              blurred += texture2D(map, vUv + offset) * weight;
              total += weight;
            }
          }
          color = blurred / total;
        }
        float curveHighlight = abs(scrollForce) * 0.05;
        color.rgb += vec3(curveHighlight * 0.1);
        gl_FragColor = vec4(color.rgb, color.a * opacity);
      }
    `,
  });
};

// ─── Gallery Scene (inner R3F component) ───────────────────────
function GalleryScene({
  images,
  speed = 1,
  visibleCount = 8,
  fadeSettings = {
    fadeIn: { start: 0.05, end: 0.15 },
    fadeOut: { start: 0.85, end: 0.95 },
  },
  blurSettings = {
    blurIn: { start: 0.0, end: 0.1 },
    blurOut: { start: 0.9, end: 1.0 },
    maxBlur: 3.0,
  },
}: Omit<InfiniteGalleryProps, 'className' | 'style'>) {
  const { gl } = useThree();
  /** Physics + mesh transforms live in refs — no React setState in the rAF loop. */
  const scrollVelocityRef = useRef(0);
  const autoPlayRef = useRef(true);
  const [autoPlay, setAutoPlay] = useState(true);
  const lastInteraction = useRef(0);
  const meshesRef = useRef<(THREE.Mesh | null)[]>([]);
  const hoveredSlotRef = useRef<number | null>(null);

  useEffect(() => {
    autoPlayRef.current = autoPlay;
  }, [autoPlay]);

  useLayoutEffect(() => {
    lastInteraction.current = Date.now();
  }, []);

  const normalizedImages = useMemo(
    () => images.map((img) => (typeof img === 'string' ? { src: img, alt: '' } : img)),
    [images]
  );

  // ── manual texture loading with error handling ──
  const [textures, setTextures] = useState<(THREE.Texture | null)[]>([]);

  useEffect(() => {
    const loader = new THREE.TextureLoader();
    const loaded: (THREE.Texture | null)[] = new Array(normalizedImages.length).fill(null);
    let mounted = true;

    normalizedImages.forEach((img, i) => {
      const tex = loader.load(
        img.src,
        (t) => {
          if (!mounted) return;
          t.colorSpace = THREE.SRGBColorSpace;
          loaded[i] = t;
          setTextures((prev) => {
            const next = [...prev];
            next[i] = t;
            return next;
          });
        },
        undefined,
        () => {
          // image failed — leave slot null, gallery keeps running
          if (!mounted) return;
          loaded[i] = null;
        }
      );
      // ensure crossOrigin before the request fires
      if (tex && (tex as unknown as { image?: HTMLImageElement }).image) {
        const img_el = (tex as unknown as { image: HTMLImageElement }).image;
        img_el.crossOrigin = 'anonymous';
      }
    });

    return () => {
      mounted = false;
      loaded.forEach((t) => t?.dispose());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [normalizedImages.map((i) => i.src).join(',')]);

  const materials = useMemo(
    () => Array.from({ length: visibleCount }, () => createClothMaterial()),
    [visibleCount]
  );

  const spatialPositions = useMemo(() => {
    const positions: { x: number; y: number }[] = [];
    for (let i = 0; i < visibleCount; i++) {
      const ha = (i * 2.618) % (Math.PI * 2);
      const va = (i * 1.618 + Math.PI / 3) % (Math.PI * 2);
      const hr = (i % 3) * 1.2;
      const vr = ((i + 1) % 4) * 0.8;
      positions.push({
        x: (Math.sin(ha) * hr * MAX_HORIZONTAL_OFFSET) / 3,
        y: (Math.cos(va) * vr * MAX_VERTICAL_OFFSET) / 4,
      });
    }
    return positions;
  }, [visibleCount]);

  const totalImages = normalizedImages.length;
  const depthRange = DEFAULT_DEPTH_RANGE;

  const planesData = useRef<PlaneData[]>(
    Array.from({ length: visibleCount }, (_, i) => ({
      index: i,
      z: visibleCount > 0 ? ((depthRange / visibleCount) * i) % depthRange : 0,
      imageIndex: totalImages > 0 ? i % totalImages : 0,
      x: spatialPositions[i]?.x ?? 0,
      y: spatialPositions[i]?.y ?? 0,
    }))
  );

  useEffect(() => {
    planesData.current = Array.from({ length: visibleCount }, (_, i) => ({
      index: i,
      z: ((depthRange / Math.max(visibleCount, 1)) * i) % depthRange,
      imageIndex: totalImages > 0 ? i % totalImages : 0,
      x: spatialPositions[i]?.x ?? 0,
      y: spatialPositions[i]?.y ?? 0,
    }));
  }, [depthRange, spatialPositions, totalImages, visibleCount]);

  const handleWheel = useCallback(
    (event: WheelEvent) => {
      event.preventDefault();
      scrollVelocityRef.current += event.deltaY * 0.01 * speed;
      setAutoPlay(false);
      lastInteraction.current = Date.now();
    },
    [speed]
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
        scrollVelocityRef.current -= 2 * speed;
        setAutoPlay(false);
        lastInteraction.current = Date.now();
      } else if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
        scrollVelocityRef.current += 2 * speed;
        setAutoPlay(false);
        lastInteraction.current = Date.now();
      }
    },
    [speed]
  );

  useEffect(() => {
    const el = gl.domElement;
    el.addEventListener('wheel', handleWheel, { passive: false });
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      el.removeEventListener('wheel', handleWheel);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [gl, handleWheel, handleKeyDown]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (Date.now() - lastInteraction.current > 3000) setAutoPlay(true);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useFrame((state, delta) => {
    let v = scrollVelocityRef.current;
    if (autoPlayRef.current) v += 0.3 * delta;
    v *= 0.95;
    scrollVelocityRef.current = v;

    const time = state.clock.getElapsedTime();
    materials.forEach((mat) => {
      if (mat?.uniforms) {
        mat.uniforms.time.value = time;
        mat.uniforms.scrollForce.value = v;
      }
    });

    const imageAdvance = totalImages > 0 ? visibleCount % totalImages || totalImages : 0;

    planesData.current.forEach((plane, i) => {
      let newZ = plane.z + v * delta * 10;
      let wrapsForward = 0;
      let wrapsBackward = 0;

      if (newZ >= depthRange) {
        wrapsForward = Math.floor(newZ / depthRange);
        newZ -= depthRange * wrapsForward;
      } else if (newZ < 0) {
        wrapsBackward = Math.ceil(-newZ / depthRange);
        newZ += depthRange * wrapsBackward;
      }

      if (wrapsForward > 0 && imageAdvance > 0 && totalImages > 0)
        plane.imageIndex = (plane.imageIndex + wrapsForward * imageAdvance) % totalImages;
      if (wrapsBackward > 0 && imageAdvance > 0 && totalImages > 0) {
        const step = plane.imageIndex - wrapsBackward * imageAdvance;
        plane.imageIndex = ((step % totalImages) + totalImages) % totalImages;
      }

      plane.z = ((newZ % depthRange) + depthRange) % depthRange;
      plane.x = spatialPositions[i]?.x ?? 0;
      plane.y = spatialPositions[i]?.y ?? 0;

      const np = plane.z / depthRange;
      let opacity = 1;
      if (np < fadeSettings.fadeIn.start) opacity = 0;
      else if (np <= fadeSettings.fadeIn.end)
        opacity = (np - fadeSettings.fadeIn.start) / (fadeSettings.fadeIn.end - fadeSettings.fadeIn.start);
      else if (np >= fadeSettings.fadeOut.start && np <= fadeSettings.fadeOut.end)
        opacity = 1 - (np - fadeSettings.fadeOut.start) / (fadeSettings.fadeOut.end - fadeSettings.fadeOut.start);
      else if (np > fadeSettings.fadeOut.end) opacity = 0;
      opacity = Math.max(0, Math.min(1, opacity));

      let blur = 0;
      if (np < blurSettings.blurIn.start) blur = blurSettings.maxBlur;
      else if (np <= blurSettings.blurIn.end)
        blur = blurSettings.maxBlur * (1 - (np - blurSettings.blurIn.start) / (blurSettings.blurIn.end - blurSettings.blurIn.start));
      else if (np >= blurSettings.blurOut.start && np <= blurSettings.blurOut.end)
        blur = blurSettings.maxBlur * ((np - blurSettings.blurOut.start) / (blurSettings.blurOut.end - blurSettings.blurOut.start));
      else if (np > blurSettings.blurOut.end) blur = blurSettings.maxBlur;
      blur = Math.max(0, Math.min(blurSettings.maxBlur, blur));

      const mat = materials[i];
      if (mat?.uniforms) {
        mat.uniforms.opacity.value = opacity;
        mat.uniforms.blurAmount.value = blur;
      }
    });

    planesData.current.forEach((plane, i) => {
      const mesh = meshesRef.current[i];
      const mat = materials[i];
      if (!mesh || !mat?.uniforms) return;

      const texture = textures[plane.imageIndex];
      const worldZ = plane.z - depthRange / 2;
      mesh.position.set(plane.x, plane.y, worldZ);

      if (texture) {
        const texImg = texture.image as { width?: number; height?: number } | undefined;
        const aspect =
          texImg?.width && texImg?.height ? texImg.width / texImg.height : 1;
        if (aspect > 1) mesh.scale.set(2 * aspect, 2, 1);
        else mesh.scale.set(2, 2 / aspect, 1);
        if (mat.uniforms.map.value !== texture) {
          mat.uniforms.map.value = texture;
        }
      }

      mat.uniforms.isHovered.value = hoveredSlotRef.current === i ? 1.0 : 0.0;
    });
  });

  if (normalizedImages.length === 0) return null;

  return (
    <>
      {Array.from({ length: visibleCount }, (_, slot) => (
        <mesh
          key={slot}
          ref={(node) => {
            meshesRef.current[slot] = node;
          }}
          material={materials[slot]}
          onPointerEnter={(e) => {
            e.stopPropagation();
            hoveredSlotRef.current = slot;
          }}
          onPointerLeave={(e) => {
            e.stopPropagation();
            if (hoveredSlotRef.current === slot) hoveredSlotRef.current = null;
          }}
        >
          <planeGeometry args={[1, 1, 32, 32]} />
        </mesh>
      ))}
    </>
  );
}

// ─── Fallback ───────────────────────────────────────────────────
function FallbackGallery({ images }: { images: ImageItem[] }) {
  const normalized = useMemo(
    () => images.map((img) => (typeof img === 'string' ? { src: img, alt: '' } : img)),
    [images]
  );
  return (
    <div className="flex flex-col items-center justify-center h-full bg-background p-4">
      <p className="text-muted-foreground mb-4">WebGL non supporté — affichage alternatif :</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-h-96 overflow-y-auto">
        {normalized.map((img, i) => (
          <img key={i} src={img.src} alt={img.alt} className="w-full h-32 object-cover rounded-lg" />
        ))}
      </div>
    </div>
  );
}

// ─── Public Export ──────────────────────────────────────────────
export default function InfiniteGallery({
  images,
  speed,
  visibleCount,
  className = 'h-96 w-full',
  style,
  fadeSettings = {
    fadeIn: { start: 0.05, end: 0.25 },
    fadeOut: { start: 0.4, end: 0.43 },
  },
  blurSettings = {
    blurIn: { start: 0.0, end: 0.1 },
    blurOut: { start: 0.4, end: 0.43 },
    maxBlur: 8.0,
  },
}: InfiniteGalleryProps) {
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    let cancelled = false;
    const frame = requestAnimationFrame(() => {
      if (cancelled) return;
      try {
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        setWebglSupported(!!gl);
      } catch {
        setWebglSupported(false);
      }
    });
    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
    };
  }, []);

  const fallback = (
    <div className={className} style={style}>
      <FallbackGallery images={images} />
    </div>
  );

  if (!webglSupported) return fallback;

  return (
    <GalleryErrorBoundary fallback={fallback}>
      <div className={className} style={style}>
        <Canvas
          camera={{ position: [0, 0, 0], fov: 55 }}
          gl={{ antialias: true, alpha: true }}
        >
          <Suspense fallback={null}>
            <GalleryScene
              images={images}
              speed={speed}
              visibleCount={visibleCount}
              fadeSettings={fadeSettings}
              blurSettings={blurSettings}
            />
          </Suspense>
        </Canvas>
      </div>
    </GalleryErrorBoundary>
  );
}
