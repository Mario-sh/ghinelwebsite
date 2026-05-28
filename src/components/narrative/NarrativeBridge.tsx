"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { easeCinematic } from "@/lib/motion";
import { cn } from "@/lib/utils";

type NarrativeBridgeProps = {
  act: string;
  line: string;
  subline?: string;
  tone?: "warm" | "deep" | "ember";
  className?: string;
};

const toneStyles = {
  warm: "from-ember/20 via-bg to-bg",
  deep: "from-depth-mid/40 via-bg to-bg",
  ember: "from-brand-deep/25 via-bg-deep to-bg",
};

export default function NarrativeBridge({
  act,
  line,
  subline,
  tone = "deep",
  className,
}: NarrativeBridgeProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [0.4, 1, 1, 0.4]);
  const y = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [24, 0, 0, -24]);

  return (
    <section
      ref={ref}
      aria-label={act}
      className={cn(
        "relative flex min-h-[38vh] items-center justify-center overflow-hidden border-y border-white/[0.06] py-16 sm:min-h-[42vh] sm:py-20",
        className
      )}
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-0 bg-gradient-to-b",
          toneStyles[tone]
        )}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, var(--brand) 0%, transparent 55%)",
        }}
        aria-hidden
      />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" aria-hidden />

      <motion.div
        style={{ opacity, y }}
        className="relative z-10 mx-auto max-w-4xl px-6 text-center sm:px-10"
      >
        <p className="text-[10px] font-semibold uppercase tracking-[0.5em] text-brand sm:text-xs">
          {act}
        </p>
        <p className="mt-6 font-serif text-2xl font-medium leading-snug text-foreground sm:text-3xl md:text-4xl md:leading-tight">
          {line}
        </p>
        {subline && (
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            {subline}
          </p>
        )}
      </motion.div>
    </section>
  );
}

export function NarrativeBridgeMotion({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1, ease: easeCinematic }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
