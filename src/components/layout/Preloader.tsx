"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const DURATION_MS = 2400;

type PreloaderProps = {
  onComplete: () => void;
};

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const t = Math.min((now - start) / DURATION_MS, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(Math.round(eased * 100));

      if (t < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setExiting(true);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: exiting ? 0 : 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      onAnimationComplete={() => {
        if (exiting) onComplete();
      }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-bg-deep"
      aria-busy={!exiting}
      aria-label="Chargement du site"
    >
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center"
      >
        <Image
          src="/logoghinel.png"
          alt="GHINEL"
          width={140}
          height={42}
          className="h-8 w-auto object-contain sm:h-9"
          priority
        />
        <div className="mt-10 h-px w-36 overflow-hidden bg-white/10 sm:w-44">
          <div
            className="h-full bg-brand transition-transform duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="mt-4 font-mono text-[10px] tabular-nums tracking-[0.3em] text-muted-foreground">
          {String(progress).padStart(3, "0")}
        </p>
      </motion.div>
    </motion.div>
  );
}
