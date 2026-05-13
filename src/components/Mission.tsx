"use client";

import { motion } from "framer-motion";

export default function Mission() {
  return (
    <section id="vision" className="relative py-48 px-4 bg-background overflow-hidden">
      {/* Background Text Decor */}
      <div className="absolute top-0 right-0 text-[20vw] font-serif font-black text-white/[0.02] leading-none pointer-events-none select-none">
        HERITAGE
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              className="h-1 bg-primary mb-12"
            />
            
            <h2 className="text-sm uppercase tracking-[0.4em] text-primary mb-6 font-bold">
              Notre Essence
            </h2>
            
            <h3 className="text-5xl md:text-7xl font-serif font-bold text-white leading-[1.1] mb-12">
              L'histoire n'est pas <span className="italic">morte</span>, elle est en <span className="text-gradient">attente</span>.
            </h3>
            
            <div className="space-y-8 text-xl text-muted-foreground leading-relaxed max-w-2xl">
              <p>
                Au cœur du Bénin, nous forgeons des outils numériques pour redonner vie aux récits oubliés. Ghinel est une promesse : celle que la technologie ne nous éloignera pas de nos racines, mais nous y ramènera avec une force nouvelle.
              </p>
              <p className="text-white/80 font-medium">
                Nous ne digitalisons pas seulement des données ; nous préservons l'âme d'une civilisation pour les millénaires à venir.
              </p>
            </div>

            <motion.div 
              whileHover={{ x: 10 }}
              className="mt-12 flex items-center gap-4 text-primary font-bold cursor-pointer group"
            >
              <span>Découvrir notre approche</span>
              <div className="w-12 h-px bg-primary group-hover:w-20 transition-all" />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden glass border-white/5 p-1">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-30" />
              <div className="w-full h-full rounded-[38px] bg-neutral-900/50 flex flex-col items-center justify-center p-12 text-center relative z-10">
                <span className="text-9xl font-serif text-primary/20 absolute top-4 left-8">“</span>
                <p className="text-3xl md:text-4xl font-serif italic text-white leading-snug mb-10 relative">
                  Celui qui ne sait pas d'où il vient ne peut savoir où il va.
                </p>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full border border-primary/50 flex items-center justify-center mb-4">
                    <div className="w-2 h-2 bg-primary rounded-full animate-ping" />
                  </div>
                  <span className="text-sm tracking-widest uppercase text-muted-foreground">Sagesse Africaine</span>
                </div>
              </div>
            </div>

            {/* Floating Element */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-10 -left-10 w-40 h-40 glass rounded-3xl flex items-center justify-center text-6xl shadow-2xl hidden md:flex"
            >
              🏺
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
