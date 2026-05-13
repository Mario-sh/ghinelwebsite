"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const events = [
  {
    year: "1600",
    title: "Royaume de Dahomey",
    desc: "Fondation de l'un des plus puissants royaumes d'Afrique de l'Ouest.",
    icon: "👑"
  },
  {
    year: "1800",
    title: "Les Amazones",
    desc: "L'élite guerrière féminine unique au monde protège le royaume.",
    icon: "⚔️"
  },
  {
    year: "1894",
    title: "Résistance de Béhanzin",
    desc: "Le Roi Requin lutte contre l'expansion coloniale pour la liberté.",
    icon: "🦈"
  },
  {
    year: "2024",
    title: "Renaissance Numérique",
    desc: "Ghinel digitalise l'héritage pour les générations futures.",
    icon: "✨"
  }
];

export default function CulturalTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={containerRef} id="impact" className="relative section-padding bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="responsive-title text-white mb-6 md:mb-8"
          >
            {"Le Fil de l'"}
            <span className="text-gradient">Histoire</span>
          </motion.h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            {"Un voyage à travers les époques qui ont forgé l'identité du Bénin."}
          </p>
        </div>

        <div className="relative">
          {/* Progress Line */}
          <motion.div 
            style={{ scaleX }}
            className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent origin-left z-0 hidden md:block"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 relative z-10">
            {events.map((event, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="relative flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full glass border-white/10 flex items-center justify-center text-3xl md:text-4xl mb-6 md:mb-8 group-hover:scale-110 md:group-hover:scale-125 group-hover:border-primary transition-all duration-500 bg-background/50 backdrop-blur-xl">
                  {event.icon}
                </div>
                
                <div className="space-y-3 md:space-y-4">
                  <span className="text-primary font-mono font-bold tracking-widest text-base md:text-lg">{event.year}</span>
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-white group-hover:text-primary transition-colors">{event.title}</h3>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed group-hover:text-white/70 transition-colors">
                    {event.desc}
                  </p>
                </div>

                {/* Vertical line for mobile */}
                <div className="md:hidden w-px h-12 bg-primary/30 my-8" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
