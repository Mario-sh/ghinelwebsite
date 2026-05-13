"use client";

import { motion } from "framer-motion";

export default function Mission() {
  return (
    <section id="vision" className="relative py-32 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-sm uppercase tracking-[0.4em] text-primary mb-6 font-bold">
              Notre Mission
            </h2>
            <h3 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight mb-8">
              La technologie au service de la <span className="text-gradient">vision culturelle</span>
            </h3>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Nous croyons que le futur de l'Afrique réside dans sa capacité à se réapproprier son passé. 
              Ghinel n'est pas seulement une startup technologique, c'est un pont vers nos ancêtres, 
              un miroir numérique pour notre identité.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative aspect-square rounded-3xl overflow-hidden glass border-primary/20 flex items-center justify-center p-12"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50" />
            <div className="text-center z-10">
              <span className="text-8xl block mb-4 opacity-50">❝</span>
              <p className="text-2xl md:text-3xl font-serif italic text-white mb-8">
                Nous rêvons d'un monde où chaque africain connaît son histoire.
              </p>
              <div className="w-12 h-1 bg-primary mx-auto" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
