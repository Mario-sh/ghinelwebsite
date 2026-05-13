"use client";

import { useRef, useCallback, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

function buildAmbient(ctx: AudioContext) {
  const now = ctx.currentTime;

  // ── Oscillators ──
  // Frequences remontées pour être audibles sur tous les haut-parleurs

  const sub = ctx.createOscillator();
  sub.type = "sine";
  sub.frequency.value = 55;
  const subGain = ctx.createGain();
  subGain.gain.setValueAtTime(0.12, now);

  const root = ctx.createOscillator();
  root.type = "sine";
  root.frequency.value = 110;
  const rootGain = ctx.createGain();
  rootGain.gain.setValueAtTime(0.08, now);

  const fifth = ctx.createOscillator();
  fifth.type = "triangle";
  fifth.frequency.value = 165;
  const fifthGain = ctx.createGain();
  fifthGain.gain.setValueAtTime(0.05, now);

  const shimmer = ctx.createOscillator();
  shimmer.type = "sine";
  shimmer.frequency.value = 330;
  const shimmerGain = ctx.createGain();
  shimmerGain.gain.setValueAtTime(0.03, now);

  // ── LFO for warm movement ──

  const lfo1 = ctx.createOscillator();
  lfo1.type = "sine";
  lfo1.frequency.value = 0.07;
  const lfo1Gain = ctx.createGain();
  lfo1Gain.gain.setValueAtTime(8, now);
  lfo1.connect(lfo1Gain);
  lfo1Gain.connect(root.frequency);

  const lfo2 = ctx.createOscillator();
  lfo2.type = "sine";
  lfo2.frequency.value = 0.11;
  const lfo2Gain = ctx.createGain();
  lfo2Gain.gain.setValueAtTime(6, now);
  lfo2.connect(lfo2Gain);
  lfo2Gain.connect(fifth.frequency);

  // ── Wind (filtered noise) ──

  const bufLen = ctx.sampleRate * 2;
  const buf = ctx.createBuffer(1, bufLen, ctx.sampleRate);
  const data = buf.getChannelData(0);
  for (let i = 0; i < bufLen; i++) data[i] = Math.random() * 2 - 1;
  const noise = ctx.createBufferSource();
  noise.buffer = buf;
  noise.loop = true;

  const noiseFilter = ctx.createBiquadFilter();
  noiseFilter.type = "lowpass";
  noiseFilter.frequency.setValueAtTime(200, now);
  noiseFilter.Q.setValueAtTime(0.5, now);

  const noiseGain = ctx.createGain();
  noiseGain.gain.setValueAtTime(0.04, now);
  noise.connect(noiseFilter);
  noiseFilter.connect(noiseGain);

  const windLfo = ctx.createOscillator();
  windLfo.type = "sine";
  windLfo.frequency.value = 0.03;
  const windLfoGain = ctx.createGain();
  windLfoGain.gain.setValueAtTime(120, now);
  windLfo.connect(windLfoGain);
  windLfoGain.connect(noiseFilter.frequency);

  // Master
  const master = ctx.createGain();
  master.gain.setValueAtTime(0.4, now);

  sub.connect(subGain);
  subGain.connect(master);
  root.connect(rootGain);
  rootGain.connect(master);
  fifth.connect(fifthGain);
  fifthGain.connect(master);
  shimmer.connect(shimmerGain);
  shimmerGain.connect(master);
  noiseGain.connect(master);
  master.connect(ctx.destination);

  // Start
  [sub, root, fifth, shimmer, lfo1, lfo2, noise, windLfo].forEach((n) => {
    try { n.start(); } catch { /* already started */ }
  });

  // ── Scroll modulation ──

  let prevProgress = 0;
  let vel = 0;

  const onScroll = () => {
    const h = document.documentElement.scrollHeight - window.innerHeight;
    const p = h > 0 ? window.scrollY / h : 0;
    vel = p - prevProgress;
    prevProgress = p;

    const t = ctx.currentTime;

    // Filter opens as you scroll down, closes as you scroll up
    const freq = 120 + p * 600;
    noiseFilter.frequency.setTargetAtTime(freq, t, 0.3);

    // Volume driven by depth + slight velocity bump
    const velocityBump = Math.min(Math.abs(vel) * 0.6, 0.12);
    const vol = Math.min(0.25 + p * 0.25 + velocityBump, 0.6);
    master.gain.setTargetAtTime(vol, t, 0.25);
  };

  window.addEventListener("scroll", onScroll, { passive: true });

  return () => {
    window.removeEventListener("scroll", onScroll);
    [sub, root, fifth, shimmer, lfo1, lfo2, noise, windLfo].forEach((n) => {
      try { n.stop(); } catch { /* already stopped */ }
    });
    ctx.close();
  };
}

export default function Soundscape() {
  const ctxRef = useRef<AudioContext | null>(null);
  const cleanupRef = useRef<(() => void) | null>(null);
  const [isActive, setIsActive] = useState(false);
  const [audioLoaded, setAudioLoaded] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      try {
        new AudioContext().close();
        setAudioLoaded(true);
      } catch {
        setAudioLoaded(false);
      }
    });
    return () => cancelAnimationFrame(id);
  }, []);
  const [showTooltip, setShowTooltip] = useState(() => {
    try {
      if (typeof window !== "undefined") {
        return !localStorage.getItem("ghinel-sound-tooltip");
      }
    } catch {}
    return true;
  });

  const start = useCallback(async () => {
    if (ctxRef.current) return;
    try {
      const ctx = new AudioContext();
      if (ctx.state === "suspended") await ctx.resume();
      const cleanup = buildAmbient(ctx);
      ctxRef.current = ctx;
      cleanupRef.current = cleanup;
      setIsActive(true);
      localStorage.setItem("ghinel-sound-tooltip", "1");
      setShowTooltip(false);
    } catch {
      setAudioLoaded(false);
    }
  }, []);

  const toggle = useCallback(async () => {
    if (!ctxRef.current) {
      await start();
      return;
    }
    const ctx = ctxRef.current;
    if (isActive) {
      await ctx.suspend();
      setIsActive(false);
    } else {
      if (ctx.state === "suspended") await ctx.resume();
      setIsActive(true);
    }
  }, [isActive, start]);

  useEffect(() => {
    return () => {
      cleanupRef.current?.();
      ctxRef.current?.close();
    };
  }, []);

  if (!audioLoaded) return null;

  return (
    <div className="fixed bottom-4 right-4 z-[999] flex flex-col items-end gap-2 pb-[max(0.25rem,env(safe-area-inset-bottom))] pr-[max(0.25rem,env(safe-area-inset-right))]">
      <AnimatePresence>
        {showTooltip && !isActive && (
          <motion.button
            type="button"
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.9 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => { setShowTooltip(false); localStorage.setItem("ghinel-sound-tooltip", "1"); }}
            className="whitespace-nowrap rounded-full bg-white/10 px-3 py-1.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground backdrop-blur-md sm:px-4 sm:text-xs"
          >
            Activer l&apos;ambiance
          </motion.button>
        )}
      </AnimatePresence>
      <button
        type="button"
        onClick={toggle}
        aria-label={isActive ? "Désactiver l'ambiance sonore" : "Activer l'ambiance sonore"}
        className={`flex size-10 items-center justify-center rounded-full backdrop-blur-md transition-all duration-500 sm:size-11 ${
          isActive
            ? "bg-primary/20 text-primary shadow-lg shadow-primary/10 hover:bg-primary/30"
            : "bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-foreground"
        }`}
      >
        {isActive ? (
          <Volume2 className="size-4 sm:size-5" />
        ) : (
          <VolumeX className="size-4 sm:size-5" />
        )}
      </button>
    </div>
  );
}
