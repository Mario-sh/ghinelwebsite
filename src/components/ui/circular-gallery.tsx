'use client';

import React, { useState, useEffect, useRef, HTMLAttributes } from 'react';

const cn = (...classes: (string | undefined | null | false)[]) => {
  return classes.filter(Boolean).join(' ');
};

export interface GalleryItem {
  common: string;
  binomial: string;
  photo: {
    url: string;
    text: string;
    pos?: string;
    by: string;
  };
}

interface CircularGalleryProps extends HTMLAttributes<HTMLDivElement> {
  items: GalleryItem[];
  radius?: number;
  autoRotateSpeed?: number;
}

function useGalleryLayout() {
  const [layout, setLayout] = useState(() => ({
    cardW: 260,
    cardH: 340,
    radius: 360,
  }));

  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      if (w < 380) return { cardW: 168, cardH: 220, radius: 150 };
      if (w < 480) return { cardW: 188, cardH: 248, radius: 175 };
      if (w < 640) return { cardW: 210, cardH: 280, radius: 220 };
      if (w < 768) return { cardW: 240, cardH: 320, radius: 280 };
      if (w < 1024) return { cardW: 270, cardH: 360, radius: 380 };
      if (w < 1280) return { cardW: 290, cardH: 390, radius: 450 };
      return { cardW: 300, cardH: 400, radius: 500 };
    };

    const apply = () => setLayout(compute());
    apply();
    window.addEventListener('resize', apply);
    return () => window.removeEventListener('resize', apply);
  }, []);

  return layout;
}

const CircularGallery = React.forwardRef<HTMLDivElement, CircularGalleryProps>(
  ({ items, className, radius = 600, autoRotateSpeed = 0.02, ...props }, ref) => {
    const { cardW, cardH, radius: layoutRadius } = useGalleryLayout();
    const effectiveRadius = Math.min(radius, layoutRadius);
    const halfW = cardW / 2;
    const halfH = cardH / 2;

    const [rotation, setRotation] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);
    const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const animationFrameRef = useRef<number | null>(null);
    const rotationRef = useRef(0);
    const lastRotationEmit = useRef(0);

    useEffect(() => {
      const handleScroll = () => {
        setIsScrolling(true);
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }

        const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollProgress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
        const scrollRotation = scrollProgress * 360;
        rotationRef.current = scrollRotation;
        setRotation(scrollRotation);

        scrollTimeoutRef.current = setTimeout(() => {
          setIsScrolling(false);
        }, 150);
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => {
        window.removeEventListener('scroll', handleScroll);
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }
      };
    }, []);

    useEffect(() => {
      const autoRotate = (time: number) => {
        if (!isScrolling) {
          rotationRef.current += autoRotateSpeed;
        }
        if (time - lastRotationEmit.current >= 50) {
          lastRotationEmit.current = time;
          setRotation(rotationRef.current);
        }
        animationFrameRef.current = requestAnimationFrame(autoRotate);
      };

      animationFrameRef.current = requestAnimationFrame(autoRotate);

      return () => {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
      };
    }, [isScrolling, autoRotateSpeed]);

    const anglePerItem = 360 / items.length;

    return (
      <div
        ref={ref}
        role="region"
        aria-label="Circular 3D Gallery"
        className={cn('relative flex h-full w-full items-center justify-center overflow-x-hidden', className)}
        style={{ perspective: Math.min(2400, effectiveRadius * 3 + 400) }}
        {...props}
      >
        <div
          className="relative h-full w-full max-w-[100vw]"
          style={{
            transform: `rotateY(${rotation}deg)`,
            transformStyle: 'preserve-3d',
          }}
        >
          {items.map((item, i) => {
            const itemAngle = i * anglePerItem;
            const totalRotation = rotation % 360;
            const relativeAngle = (itemAngle + totalRotation + 360) % 360;
            const normalizedAngle = Math.abs(relativeAngle > 180 ? 360 - relativeAngle : relativeAngle);
            const opacity = Math.max(0.3, 1 - normalizedAngle / 180);

            return (
              <div
                key={item.photo.url}
                role="group"
                aria-label={item.common}
                className="absolute"
                style={{
                  width: cardW,
                  height: cardH,
                  transform: `rotateY(${itemAngle}deg) translateZ(${effectiveRadius}px)`,
                  left: '50%',
                  top: '50%',
                  marginLeft: -halfW,
                  marginTop: -halfH,
                  opacity,
                  transition: 'opacity 0.3s linear',
                }}
              >
                <div className="relative h-full w-full overflow-hidden rounded-lg border border-border bg-card/70 shadow-2xl backdrop-blur-lg dark:bg-card/30">
                  <img
                    src={item.photo.url}
                    alt={item.photo.text}
                    className="absolute inset-0 h-full w-full object-cover"
                    style={{ objectPosition: item.photo.pos || 'center' }}
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-3 text-white sm:p-4">
                    <h2 className="text-base font-bold leading-snug sm:text-lg md:text-xl">{item.common}</h2>
                    <em className="text-xs italic opacity-80 sm:text-sm">{item.binomial}</em>
                    <p className="mt-1 text-[10px] opacity-70 sm:text-xs">Photo by: {item.photo.by}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
);

CircularGallery.displayName = 'CircularGallery';

export { CircularGallery };
