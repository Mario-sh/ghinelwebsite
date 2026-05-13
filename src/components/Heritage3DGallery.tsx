"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

// Dynamic import to avoid SSR issues with Three.js / WebGL
const InfiniteGallery = dynamic(
  () => import("@/components/ui/3d-gallery-photography"),
  { ssr: false }
);

const heritageImages = [
  {
    src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=900&auto=format&fit=crop&q=80",
    alt: "Ancient African palace architecture",
  },
  {
    src: "https://images.unsplash.com/photo-1504713440659-021c44dfec25?w=900&auto=format&fit=crop&q=80",
    alt: "Traditional African ceremonial mask",
  },
  {
    src: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=900&auto=format&fit=crop&q=80",
    alt: "Golden African savanna at sunset",
  },
  {
    src: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=900&auto=format&fit=crop&q=80",
    alt: "Stilt village on a serene lake",
  },
  {
    src: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=900&auto=format&fit=crop&q=80",
    alt: "Traditional African dancers",
  },
  {
    src: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=900&auto=format&fit=crop&q=80",
    alt: "Ancient manuscripts and books",
  },
  {
    src: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=900&auto=format&fit=crop&q=80",
    alt: "Artisan hands shaping pottery",
  },
  {
    src: "https://images.unsplash.com/photo-1590736969596-c0d96d3e0c28?w=900&auto=format&fit=crop&q=80",
    alt: "Colorful African woven textiles",
  },
];

export default function Heritage3DGallery() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* The 3D Gallery - full screen experience */}
      <div className="relative h-[100dvh] min-h-[100svh] w-full">
        <InfiniteGallery
          images={heritageImages}
          speed={1.2}
          visibleCount={10}
          className="h-full min-h-[100dvh] w-full"
        />

        {/* Overlay text with mix-blend for contrast */}
        <div className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center mix-blend-exclusion text-white sm:px-6">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] sm:mb-4 sm:text-xs sm:tracking-[0.4em]"
          >
            Immersion Culturelle
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-serif text-3xl tracking-tight sm:text-4xl md:text-6xl lg:text-7xl"
          >
            <span className="italic">Patrimoine</span> Vivant
          </motion.h2>
        </div>

        {/* Bottom instructions */}
        <div className="pointer-events-none absolute bottom-4 left-0 right-0 z-10 px-4 pb-[max(0.5rem,env(safe-area-inset-bottom))] text-center sm:bottom-8">
          <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-muted-foreground sm:text-[10px] sm:tracking-[0.3em]">
            Utilisez la molette pour naviguer
          </p>
          <p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-muted-foreground/60 sm:text-[10px] sm:tracking-[0.2em]">
            Lecture automatique après 3s d&apos;inactivité
          </p>
        </div>
      </div>
    </section>
  );
}
