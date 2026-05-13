"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const posts = [
  {
    date: "12 Mai 2026",
    title: "La digitalisation des palais royaux d'Abomey",
    category: "Technologie",
    image: "🏛️"
  },
  {
    date: "05 Mai 2026",
    title: "IA et Traditions Orales : Comment préserver l'impalpable ?",
    category: "Recherche",
    image: "🎙️"
  },
  {
    date: "28 Avril 2026",
    title: "Ghinel à la conquête de l'Afrique de l'Ouest",
    category: "Startup",
    image: "🌍"
  }
];

export default function Blog() {
  return (
    <section id="blog" className="relative section-padding bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="responsive-title text-white mb-6 md:mb-8"
          >
            Le <span className="text-gradient">Blog</span>
          </motion.h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            Découvrez nos dernières avancées technologiques et nos explorations culturelles.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {posts.map((post, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-video rounded-[24px] md:rounded-[32px] glass border-white/5 overflow-hidden mb-6 md:mb-8 flex items-center justify-center text-5xl md:text-7xl bg-white/[0.02] group-hover:bg-primary/10 transition-colors duration-500">
                {post.image}
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-primary font-mono text-[10px] md:text-xs uppercase tracking-widest">{post.category}</span>
                  <div className="w-1 h-1 rounded-full bg-white/20" />
                  <span className="text-muted-foreground font-mono text-[10px] md:text-xs">{post.date}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-serif font-bold text-white group-hover:text-primary transition-colors leading-tight">
                  {post.title}
                </h3>
                <div className="pt-4 flex items-center gap-2 text-white/40 group-hover:text-primary transition-colors font-bold text-xs md:text-sm">
                  Lire l'article <span>→</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-16 md:mt-32 text-center">
          <button className="glass px-10 py-4 md:px-12 md:py-5 rounded-full text-white font-bold hover:bg-white/10 transition-all border border-white/10 text-sm md:text-base">
            Voir tous les articles
          </button>
        </div>
      </div>
    </section>
  );
}
