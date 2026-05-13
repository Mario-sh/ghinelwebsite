"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Logo from "./ui/Logo";

export default function Hero() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

  return (
    <section 
      ref={targetRef}
      className="relative flex min-h-dvh min-h-[100svh] items-center justify-center overflow-hidden pt-[max(5rem,env(safe-area-inset-top))] sm:pt-[max(5.5rem,env(safe-area-inset-top))] md:pt-[max(0px,env(safe-area-inset-top))]"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.15)_0%,transparent_50%)]" />
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/az-subtle.png')]" />
        
        {/* Animated Gradient Orbs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-1/4 -left-1/4 w-[80vw] h-[80vw] bg-primary/20 blur-[120px] rounded-full"
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-1/4 -right-1/4 w-[60vw] h-[60vw] bg-accent/20 blur-[120px] rounded-full"
        />
      </div>

      <motion.div 
        style={{ scale, opacity, y }}
        className="relative z-10 w-full max-w-[100vw] text-center px-4 sm:px-6"
      >
        <div className="mb-8 md:mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center"
          >
            <Logo 
              width={260} 
              height={78} 
              className="mx-auto origin-center scale-110 sm:scale-125 md:scale-[1.85] lg:scale-[2.35] mb-8 sm:mb-12 md:mb-20 max-w-[min(88vw,380px)] md:max-w-none" 
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-4 max-w-[20rem] px-2 text-[10px] font-medium uppercase leading-snug tracking-[0.25em] text-primary sm:mt-6 sm:max-w-none sm:text-xs md:text-base md:tracking-[0.4em]"
          >
            {"L'Éveil de l'Héritage Béninois"}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="mb-6 font-serif text-[clamp(1.35rem,4.5vw,3.25rem)] leading-tight text-white/90 sm:text-4xl md:mb-8 lg:text-5xl">
            {"L'intelligence au service de la "}
            <span className="italic text-accent">mémoire</span>.
          </h2>
          
          <p className="mx-auto mb-8 max-w-2xl px-1 text-sm leading-relaxed text-muted-foreground sm:text-base md:mb-12 md:text-lg md:px-0">
            {"Nous rêvons d'un monde où chaque africain connaît son histoire. Ghinel fusionne technologie et culture pour bâtir cet avenir."}
          </p>

          <div className="flex flex-col justify-center gap-3 px-2 sm:flex-row sm:gap-4 sm:px-6 md:gap-8 md:px-0">
            <button type="button" className="group relative w-full min-h-12 rounded-full bg-white px-6 py-3.5 text-base font-bold text-black overflow-hidden transition-all hover:scale-105 active:scale-95 sm:w-auto sm:min-h-0 md:px-10 md:py-5 md:text-lg">
              <span className="relative z-10">Découvrir Ghinel</span>
              <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
            <button type="button" className="glass w-full min-h-12 rounded-full border border-white/10 px-6 py-3.5 text-base font-bold text-white transition-all hover:bg-white/10 sm:w-auto sm:min-h-0 md:px-10 md:py-5 md:text-lg">
              Voir nos solutions
            </button>
          </div>
        </motion.div>
      </motion.div>

      {/* Decorative Floating Artifacts */}
      <motion.div 
        animate={{ 
          y: [0, -30, 0],
          rotate: [0, 10, 0]
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] left-[10%] hidden lg:flex items-center justify-center"
      >
        <div className="w-24 h-24 rounded-2xl border border-primary/20 bg-primary/5 backdrop-blur-md flex items-center justify-center text-4xl shadow-2xl shadow-primary/20">
          <span className="opacity-40">𓃗</span>
        </div>
      </motion.div>

      <motion.div 
        animate={{ 
          y: [0, 30, 0],
          rotate: [0, -10, 0]
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[20%] right-[10%] hidden lg:flex items-center justify-center"
      >
        <div className="w-32 h-32 rounded-full border border-accent/20 bg-accent/5 backdrop-blur-md flex items-center justify-center text-5xl shadow-2xl shadow-accent/20">
          <span className="opacity-40">꩜</span>
        </div>
      </motion.div>

      {/* Scroll Down Hint */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] sm:bottom-10"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
}
