"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
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

  const words = ["GH", "Icon", "NEL"];

  return (
    <section 
      ref={targetRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
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
        className="relative z-10 text-center px-4"
      >
        <div className="mb-8 md:mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center"
          >
            <Logo 
              width={250} 
              height={75} 
              className="scale-[1.5] md:scale-[2.5] origin-center mb-12 md:mb-20" 
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-xs md:text-base mt-4 md:mt-6 font-medium text-primary uppercase tracking-[0.3em] md:tracking-[0.4em]"
          >
            L'Éveil de l'Héritage Béninois
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-2xl md:text-5xl font-serif text-white/90 mb-6 md:mb-8 leading-tight">
            L'intelligence au service de la <span className="italic text-accent">mémoire</span>.
          </h2>
          
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 md:mb-12 max-w-2xl mx-auto px-4 md:px-0">
            Nous rêvons d'un monde où chaque africain connaît son histoire. Ghinel fusionne technologie et culture pour bâtir cet avenir.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-8 px-6 md:px-0">
            <button className="group relative px-8 md:px-10 py-4 md:py-5 bg-white text-black font-bold text-base md:text-lg rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 w-full sm:w-auto">
              <span className="relative z-10">Découvrir Ghinel</span>
              <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
            <button className="glass px-8 md:px-10 py-4 md:py-5 text-white font-bold text-base md:text-lg rounded-full hover:bg-white/10 transition-all border border-white/10 w-full sm:w-auto">
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
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
}
