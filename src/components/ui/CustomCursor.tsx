"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(() => {
    try {
      if (typeof window !== "undefined") {
        return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      }
    } catch {}
    return false;
  });
  const cursorX = useSpring(0, { damping: 20, stiffness: 300 });
  const cursorY = useSpring(0, { damping: 20, stiffness: 300 });

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("interactive")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleHover);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleHover);
    };
  }, [cursorX, cursorY]);

  if (reducedMotion) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"
      style={{
        translateX: cursorX,
        translateY: cursorY,
        backgroundColor: "white",
        scale: isHovered ? 2.5 : 1,
      }}
      transition={{ type: "spring", damping: 25, stiffness: 200 }}
    >
      {isHovered && (
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-1 h-1 bg-black rounded-full" />
        </div>
      )}
    </motion.div>
  );
}
