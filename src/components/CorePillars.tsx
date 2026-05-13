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
    <section id="technologie" className="py-32 px-4 bg-background/50">
      <div className="max-w-6xl mx-auto text-center mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-serif font-bold text-white mb-6"
        >
          Les Piliers de Ghinel
        </motion.h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Comment nous marions l'héritage millénaire avec l'innovation de pointe.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {pillars.map((pillar, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className={`group relative p-8 rounded-3xl glass border-white/5 hover:border-primary/30 transition-all duration-500 overflow-hidden`}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-500">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{pillar.title}</h3>
              <p className="text-muted-foreground group-hover:text-white/80 transition-colors">
                {pillar.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
