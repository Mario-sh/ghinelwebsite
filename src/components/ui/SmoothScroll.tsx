"use client";

import { useEffect, ReactNode } from "react";
import { MotionConfig } from "framer-motion";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    let raf = 0;
    try {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
      });

      function loop(time: number) {
        lenis.raf(time);
        raf = requestAnimationFrame(loop);
      }

      raf = requestAnimationFrame(loop);

      return () => {
        cancelAnimationFrame(raf);
        lenis.destroy();
      };
    } catch {
      return () => {
        cancelAnimationFrame(raf);
      };
    }
  }, []);

  return (
    <MotionConfig reducedMotion="user">{children}</MotionConfig>
  );
}
