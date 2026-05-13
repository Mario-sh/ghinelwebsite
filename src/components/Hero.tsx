"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const videoScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, -80]);

  return (
    <section
      ref={targetRef}
      className="relative flex min-h-dvh min-h-[100svh] items-center justify-center overflow-hidden"
    >
      {/* ── Video Background ── */}
      <motion.div style={{ scale: videoScale }} className="absolute inset-0 z-0">
        {/* Fallback orbs (behind video) */}
        <div className="video-fallback absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.25)_0%,transparent_60%)]" />
          <motion.div
            animate={{
              scale: [1, 1.3, 0.9, 1],
              opacity: [0.15, 0.35, 0.2, 0.15],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-1/4 -left-1/4 w-[80vw] h-[80vw] bg-gradient-to-br from-primary/30 to-amber-500/10 blur-[120px] rounded-full"
          />
          <motion.div
            animate={{
              scale: [1.2, 0.9, 1.3, 1.2],
              opacity: [0.1, 0.25, 0.15, 0.1],
            }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-1/4 -right-1/4 w-[60vw] h-[60vw] bg-gradient-to-tl from-accent/30 to-orange-500/10 blur-[120px] rounded-full"
          />
        </div>

        {/* Video (above fallback) */}
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&auto=format&fit=crop&q=80"
          className="absolute inset-0 z-10 h-full w-full object-cover"
          onError={(e) => {
            const el = e.currentTarget;
            el.style.display = "none";
          }}
        >
          <source src="/hero-bg.mp4" type="video/mp4" media="(prefers-reduced-motion: no-preference)" />
        </video>

        {/* Overlays (above video) */}
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-background via-background/70 to-background/10" />
        <div className="absolute inset-0 z-20 bg-[radial-gradient(ellipse_at_50%_30%,hsl(var(--primary)/0.20)_0%,transparent_60%)]" />
        <div className="absolute inset-0 z-20 bg-[radial-gradient(ellipse_at_80%_80%,hsl(var(--accent)/0.10)_0%,transparent_50%)]" />
      </motion.div>

      {/* ── Content ── */}
      <motion.div
        style={{ opacity, y: textY }}
        className="relative z-10 w-full max-w-6xl px-4 sm:px-6 md:px-8 pt-[max(4rem,env(safe-area-inset-top))]"
      >
        <div className="mx-auto max-w-5xl text-center">
          {/* Brand tag */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 sm:mb-8 flex items-center justify-center gap-3 text-[10px] font-bold uppercase tracking-[0.35em] text-primary/70 sm:text-xs"
          >
            <span className="hidden w-12 h-px bg-primary/30 sm:block" />
            🇧🇯 Startup née au Bénin
            <span className="hidden w-12 h-px bg-primary/30 sm:block" />
          </motion.div>

          {/* Main heading */}
          <h1 className="font-serif font-bold leading-[0.9] text-white">
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="block text-[clamp(2.5rem,12vw,8rem)] tracking-[-0.04em]"
            >
              Ghinel
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="block text-[clamp(1.2rem,5vw,3.5rem)] mt-1 sm:mt-2 md:mt-4 font-sans font-bold"
            >
              La technologie au service de la{" "}
              <span className="text-gradient">culture africaine</span>
            </motion.span>
          </h1>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto my-6 h-px w-16 origin-center bg-gradient-to-r from-transparent via-primary/60 to-transparent sm:my-8 md:my-10 md:w-24"
          />

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto max-w-3xl"
          >
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary/60 sm:text-sm">
              Notre Vision
            </p>
            <p className="mt-3 font-serif text-lg italic leading-relaxed text-muted-foreground/90 sm:text-xl md:text-2xl">
              &laquo;&nbsp;Nous rêvons d&apos;un monde où chaque Africain connaît
              son histoire.&nbsp;&raquo;
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 sm:mt-12 md:mt-16"
          >
            <button
              type="button"
              className="group relative inline-flex min-h-12 items-center gap-3 overflow-hidden rounded-full bg-white px-8 py-3 text-sm font-bold text-black transition-all hover:scale-105 active:scale-95 sm:px-10 sm:py-4 sm:text-base md:px-12 md:py-5"
            >
              <span className="relative z-10">Explorer</span>
              <span className="relative z-10 inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-amber-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* ── Scroll Down Hint ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] sm:bottom-10"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          Découvrir
        </span>
        <motion.div
          animate={{ scaleY: [1, 0.6, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="h-12 w-px bg-gradient-to-b from-primary to-transparent"
        />
      </motion.div>
    </section>
  );
}
