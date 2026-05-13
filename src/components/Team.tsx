"use client";

import { motion } from "framer-motion";
const team = [
  {
    name: "Dylan",
    role: "Fondateur & CEO",
    bio: "Visionnaire passionné par l'alliance entre tech et culture.",
    initials: "D",
    gradient: "from-primary/40 to-amber-500/20"
  },
  {
    name: "Koffi",
    role: "Directeur Technique",
    bio: "Expert en IA et systèmes immersifs.",
    initials: "K",
    gradient: "from-accent/40 to-orange-600/20"
  },
  {
    name: "Amina",
    role: "Curatrice Culturelle",
    bio: "Historienne spécialisée dans l'Afrique de l'Ouest.",
    initials: "A",
    gradient: "from-primary/30 to-accent/30"
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
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl">
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
                <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-60 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="absolute inset-0 bg-neutral-900/30" />
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <span className="text-8xl md:text-9xl font-serif font-bold text-white/20 group-hover:text-white/40 transition-all duration-500">
                    {member.initials}
                  </span>
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
