"use client";

import { motion } from "framer-motion";
import { BookOpen, Map, Smartphone, Globe } from "lucide-react";

const products = [
  {
    title: "Ghinel Library",
    description: "Une bibliothèque numérique interactive regroupant des manuscrits rares, des traditions orales et des récits historiques authentifiés.",
    icon: <BookOpen className="w-8 h-8" />,
    color: "from-blue-600/20 to-transparent",
    tag: "Beta"
  },
  {
    title: "Heritage AR",
    description: "Application de réalité augmentée permettant de visualiser les monuments historiques du Bénin en 3D sur leur site d'origine.",
    icon: <Map className="w-8 h-8" />,
    color: "from-primary/20 to-transparent",
    tag: "Bientôt"
  },
  {
    title: "Echoes of Benin",
    description: "Plateforme de podcast et de récits audio immersifs pour redécouvrir les légendes et épopées des grands rois.",
    icon: <Smartphone className="w-8 h-8" />,
    color: "from-accent/20 to-transparent",
    tag: "Nouveau"
  },
  {
    title: "Cultural API",
    description: "Une API robuste pour les développeurs souhaitant intégrer des données culturelles africaines vérifiées dans leurs applications.",
    icon: <Globe className="w-8 h-8" />,
    color: "from-purple-600/20 to-transparent",
    tag: "Enterprise"
  }
];

export default function Products() {
  return (
    <section id="produits" className="relative section-padding bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="responsive-title text-white mb-6 md:mb-8"
          >
            Nos <span className="text-gradient">Solutions</span>
          </motion.h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            {"Des outils technologiques conçus pour magnifier et préserver l'héritage culturel."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {products.map((product, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className={`group relative glass p-8 md:p-12 border-white/5 hover:border-primary/30 transition-all duration-500 overflow-hidden ${
                idx % 2 === 0 
                  ? 'rounded-[30px] md:rounded-[40px]' 
                  : 'rounded-[20px] md:rounded-[28px]'
              }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              {idx % 2 === 1 && (
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              )}
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-8 md:mb-12">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white/5 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-black transition-all duration-500">
                    {product.icon}
                  </div>
                  <span className="px-3 py-1 md:px-4 md:py-1 rounded-full border border-white/10 text-[9px] md:text-[10px] uppercase tracking-widest text-muted-foreground group-hover:border-primary group-hover:text-primary transition-colors">
                    {product.tag}
                  </span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4 md:mb-6 group-hover:text-primary transition-colors">{product.title}</h3>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed group-hover:text-white/80 transition-colors mb-8 md:mb-12">
                  {product.description}
                </p>

                <motion.button 
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 text-white font-bold group/btn"
                >
                  <span>En savoir plus</span>
                  <div className="w-8 h-px bg-white group-hover/btn:w-16 group-hover/btn:bg-primary transition-all" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
