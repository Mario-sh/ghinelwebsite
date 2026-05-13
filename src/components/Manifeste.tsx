"use client";

import { motion } from "framer-motion";

export default function Manifeste() {
  return (
    <section id="manifeste" className="relative section-padding bg-background overflow-hidden">
      {/* Background Text Decor */}
      <div className="absolute top-0 right-0 text-[30vw] md:text-[20vw] font-serif font-black text-white/[0.02] leading-none pointer-events-none select-none">
        MANIFESTE
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20 items-center">
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
              className="h-1 bg-primary mb-8 md:mb-12"
            />
            
            <h2 className="text-xs md:text-sm uppercase tracking-[0.4em] text-primary mb-4 md:mb-6 font-bold">
              Notre Vision
            </h2>
            
            <h3 className="responsive-title text-white mb-8 md:mb-12">
              Bâtir un pont entre <span className="italic">{"l'histoire"}</span> et le <span className="text-gradient">futur</span>.
            </h3>
            
            <div className="space-y-6 md:space-y-8 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              <p>
                {
                  "Ghinel est né d'une conviction profonde : la technologie est l'outil ultime pour la préservation de notre héritage. Nous ne nous contentons pas de stocker des données, nous redonnons vie à l'âme de l'Afrique."
                }
              </p>
              <p className="text-white/80 font-medium italic">
                {"« Nous rêvons d'un monde où chaque africain connaît son histoire. »"}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8">
                <div>
                  <h4 className="text-white font-bold mb-2 uppercase tracking-tighter">Authenticité</h4>
                  <p className="text-base text-muted-foreground">Préserver la vérité historique sans compromis, en respectant les traditions orales et écrites.</p>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2 uppercase tracking-tighter">Innovation</h4>
                  <p className="text-base text-muted-foreground">
                    {"Utiliser l'IA, la réalité augmentée et le web immersif pour rendre la culture accessible à tous."}
                  </p>
                </div>
              </div>
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
                  {"Celui qui ne sait pas d'où il vient ne peut savoir où il va."}
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
