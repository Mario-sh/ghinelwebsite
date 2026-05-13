"use client";

import { motion } from "framer-motion";
import { Book, Cpu, Users, History } from "lucide-react";

const pillars = [
  {
    title: "Bibliothèque Numérique",
    desc: "Un accès illimité aux récits, manuscrits et livres qui ont façonné le continent.",
    icon: <Book className="w-8 h-8" />,
    color: "from-blue-500/20 to-transparent"
  },
  {
    title: "Technologie Immersive",
    desc: "Réalité augmentée et IA pour donner vie aux monuments et héros historiques.",
    icon: <Cpu className="w-8 h-8" />,
    color: "from-primary/20 to-transparent"
  },
  {
    title: "Communauté & Partage",
    desc: "Une plateforme pour les auteurs et historiens africains modernes.",
    icon: <Users className="w-8 h-8" />,
    color: "from-green-500/20 to-transparent"
  },
  {
    title: "Archives Vivantes",
    desc: "Digitalisation des traditions orales pour les générations futures.",
    icon: <History className="w-8 h-8" />,
    color: "from-accent/20 to-transparent"
  }
];

export default function CorePillars() {
  return (
    <section id="technologie" className="py-48 px-4 bg-background relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-serif font-bold text-white mb-8"
            >
              Nos <span className="text-gradient">Piliers</span> d'Innovation
            </motion.h2>
            <p className="text-muted-foreground text-xl leading-relaxed">
              Nous fusionnons l'héritage millénaire avec les technologies de pointe pour créer des archives vivantes et accessibles.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-primary hover:border-primary transition-all cursor-pointer">
              ←
            </div>
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-primary hover:border-primary transition-all cursor-pointer">
              →
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative h-[450px] rounded-[32px] overflow-hidden glass border-white/5 p-8 flex flex-col justify-end transition-all duration-500"
            >
              {/* Card Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-b ${pillar.color} opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
              
              {/* Icon Overlay */}
              <div className="absolute top-8 left-8 w-16 h-16 rounded-2xl bg-white/5 backdrop-blur-xl flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-black transition-all duration-500">
                {pillar.icon}
              </div>

              <div className="relative z-10">
                <span className="text-primary/40 font-mono text-sm mb-4 block">0{idx + 1}</span>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">{pillar.title}</h3>
                <p className="text-muted-foreground group-hover:text-white/80 transition-colors leading-relaxed">
                  {pillar.desc}
                </p>
                
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="mt-6 flex items-center gap-2 text-primary text-sm font-bold opacity-0 group-hover:opacity-100 transition-all"
                >
                  En savoir plus <span className="text-lg">→</span>
                </motion.div>
              </div>

              {/* Decorative line */}
              <div className="absolute bottom-0 left-0 h-1 bg-primary w-0 group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
