"use client";

import { CircularGallery, GalleryItem } from "@/components/ui/circular-gallery";
import { motion } from "framer-motion";

const heritageGalleryData: GalleryItem[] = [
  {
    common: "Palais Royaux d'Abomey",
    binomial: "Patrimoine Mondial UNESCO",
    photo: {
      url: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=900&auto=format&fit=crop&q=80",
      text: "Ancient royal palace walls with intricate bas-reliefs",
      pos: "50% 40%",
      by: "Unsplash Heritage",
    },
  },
  {
    common: "Masque Gelede",
    binomial: "Art Rituel Béninois",
    photo: {
      url: "https://images.unsplash.com/photo-1504713440659-021c44dfec25?w=900&auto=format&fit=crop&q=80",
      text: "Traditional African ceremonial mask with vibrant colors",
      pos: "50% 30%",
      by: "Unsplash Africa",
    },
  },
  {
    common: "Cotonou au Crépuscule",
    binomial: "Capitale Économique",
    photo: {
      url: "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=900&auto=format&fit=crop&q=80",
      text: "Sunset over a vibrant African city skyline",
      pos: "50% 60%",
      by: "Unsplash Cities",
    },
  },
  {
    common: "Tissu Kente",
    binomial: "Textile Traditionnel",
    photo: {
      url: "https://images.unsplash.com/photo-1590736969596-c0d96d3e0c28?w=900&auto=format&fit=crop&q=80",
      text: "Colorful traditional African woven fabric with geometric patterns",
      pos: "50% 50%",
      by: "Unsplash Crafts",
    },
  },
  {
    common: "Bronze du Bénin",
    binomial: "Art Royal Yoruba",
    photo: {
      url: "https://images.unsplash.com/photo-1553736188-5a7f5d59aae1?w=900&auto=format&fit=crop&q=80",
      text: "Intricate bronze sculpture from the Benin Kingdom",
      pos: "50% 40%",
      by: "Unsplash Museum",
    },
  },
  {
    common: "Village Lacustre Ganvié",
    binomial: "Venise de l'Afrique",
    photo: {
      url: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=900&auto=format&fit=crop&q=80",
      text: "Wooden stilt houses on a serene lake at sunset",
      pos: "50% 50%",
      by: "Unsplash Villages",
    },
  },
  {
    common: "Danse Vaudou",
    binomial: "Tradition Spirituelle",
    photo: {
      url: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=900&auto=format&fit=crop&q=80",
      text: "Traditional African dancers performing a spiritual ceremony",
      pos: "50% 35%",
      by: "Unsplash Culture",
    },
  },
  {
    common: "Manuscrits de Tombouctou",
    binomial: "Savoir Ancestral",
    photo: {
      url: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=900&auto=format&fit=crop&q=80",
      text: "Ancient manuscripts and books in a library",
      pos: "50% 50%",
      by: "Unsplash Books",
    },
  },
  {
    common: "Savane Africaine",
    binomial: "Écosystème Ancestral",
    photo: {
      url: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=900&auto=format&fit=crop&q=80",
      text: "Golden African savanna landscape at sunset with acacia trees",
      pos: "50% 60%",
      by: "Unsplash Nature",
    },
  },
  {
    common: "Poterie Artisanale",
    binomial: "Savoir-Faire Millénaire",
    photo: {
      url: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=900&auto=format&fit=crop&q=80",
      text: "Artisan hands shaping traditional African pottery",
      pos: "50% 40%",
      by: "Unsplash Crafts",
    },
  },
];

export default function HeritageGallery() {
  return (
    <section className="relative bg-background md:h-[150vh]">
      {/* Sticky container */}
      <div className="sticky top-0 flex h-[100dvh] min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,hsl(var(--primary)/0.08)_0%,transparent_60%)]" />
        </div>

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute top-8 z-10 px-3 text-center sm:top-12 md:top-20 md:px-4"
        >
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.35em] text-primary sm:mb-3 sm:text-xs sm:tracking-[0.4em]">
            Héritage Vivant
          </p>
          <h2 className="text-2xl font-serif font-bold leading-tight text-white sm:text-3xl md:text-5xl">
            L&apos;Afrique en{" "}
            <span className="italic text-accent">360°</span>
          </h2>
          <p className="text-muted-foreground mt-3 text-sm md:text-base">
            Utilisez les flèches pour explorer
          </p>
        </motion.div>

        {/* The Gallery */}
        <div className="w-full h-full">
          <CircularGallery
            items={heritageGalleryData}
            radius={500}
            autoRotateSpeed={0.015}
          />
        </div>
      </div>
    </section>
  );
}
