"use client";

import { motion } from "framer-motion";
const team = [
  {
    name: "Dylan",
    role: "Fondateur & CEO",
    bio: "Visionnaire passionné par l'alliance entre tech et culture.",
    image: "/next.svg" // Placeholder, user can update later
  },
  {
    name: "Koffi",
    role: "Directeur Technique",
    bio: "Expert en IA et systèmes immersifs.",
    image: "/next.svg"
  },
  {
    name: "Amina",
    role: "Curatrice Culturelle",
    bio: "Historienne spécialisée dans l'Afrique de l'Ouest.",
    image: "/next.svg"
  }
];

export default function Team() {
  return (
    <section id="equipe" className="relative section-padding bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-32 gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="responsive-title text-white mb-6 md:mb-8"
            >
              {"L'"}
              <span className="text-gradient">Équipe</span>
            </motion.h2>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
              {"Des esprits créatifs et des ingénieurs dévoués à la renaissance culturelle de l'Afrique."}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="group relative"
            >
              <div className="relative aspect-[4/5] rounded-[30px] md:rounded-[40px] overflow-hidden mb-6 md:mb-8 glass border-white/5">
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                <div className="w-full h-full bg-neutral-900 flex items-center justify-center">
                  <span className="text-5xl md:text-6xl grayscale group-hover:grayscale-0 transition-all duration-500 opacity-20">👤</span>
                </div>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2 group-hover:text-primary transition-colors">{member.name}</h3>
              <p className="text-primary font-mono text-xs md:text-sm uppercase tracking-widest mb-4">{member.role}</p>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
