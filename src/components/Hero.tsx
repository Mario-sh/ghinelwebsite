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
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

  const title = "GHINEL";
  const words = title.split("");

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
        <div className="mb-12">
          <motion.div
            initial="hidden"
            animate="visible"
            className="flex justify-center overflow-hidden"
          >
            {words.map((char, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { y: "100%", opacity: 0 },
                  visible: { y: 0, opacity: 1 }
                }}
                transition={{
                  duration: 1,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="heading-huge font-serif font-black text-white inline-block"
              >
                {char}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            animate={{ opacity: 1, letterSpacing: "0.2em" }}
            transition={{ delay: 1, duration: 1.5 }}
            className="text-sm md:text-base mt-6 font-medium text-primary uppercase tracking-[0.4em]"
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
          <h2 className="text-2xl md:text-4xl font-serif text-white/90 mb-8 leading-tight">
            Fusionner l'âme de nos <span className="italic text-accent">traditions</span> avec le souffle de la <span className="italic text-primary">technologie</span>.
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-2xl mx-auto">
            Ghinel redéfinit l'accès à la culture africaine par des expériences immersives et une digitalisation sans précédent de notre patrimoine.
          </p>

          <div className="flex flex-wrap justify-center gap-8">
            <button className="group relative px-10 py-5 bg-white text-black font-bold text-lg rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95">
              <span className="relative z-10">Explorer le Musée</span>
              <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
            <button className="glass px-10 py-5 text-white font-bold text-lg rounded-full hover:bg-white/10 transition-all border border-white/10">
              Notre Manifeste
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
