"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  return (
    <section 
      ref={targetRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Patterns */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--primary)_0%,transparent_70%)] opacity-30" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay" />
      </div>

      {/* Floating 3D-like Artifact (Simulation with CSS/SVG) */}
      <motion.div 
        style={{ scale, opacity, y }}
        className="relative z-10 text-center px-4"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 relative"
        >
          <div className="absolute -inset-10 bg-primary/20 blur-[100px] rounded-full animate-pulse" />
          <h1 className="text-7xl md:text-9xl font-serif font-black tracking-tighter text-white leading-none">
            GHINEL
          </h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-xl md:text-2xl mt-4 font-light text-muted-foreground tracking-widest uppercase"
          >
            Redécouvrir notre histoire
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="max-w-2xl mx-auto"
        >
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10">
            Une immersion numérique dans l'héritage culturel du Bénin. 
            Nous utilisons la technologie pour bâtir un monde où chaque africain connaît son histoire.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-white text-background px-8 py-4 rounded-full font-bold text-lg hover:bg-primary hover:text-white transition-all duration-300">
              Explorer maintenant
            </button>
            <button className="glass px-8 py-4 rounded-full font-bold text-lg text-white hover:bg-white/10 transition-all duration-300">
              Notre vision
            </button>
          </div>
        </motion.div>
      </motion.div>

      {/* Decorative Symbols */}
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-10 md:left-20 w-24 h-24 border border-primary/20 rounded-xl rotate-12 flex items-center justify-center text-primary/30 text-4xl font-serif"
      >
        ☼
      </motion.div>
      <motion.div 
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-10 md:right-20 w-32 h-32 border border-accent/20 rounded-full -rotate-12 flex items-center justify-center text-accent/30 text-5xl font-serif"
      >
        ꩜
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
}
