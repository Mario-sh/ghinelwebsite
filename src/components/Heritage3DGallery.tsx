"use client";

import dynamic from "next/dynamic";
import { Hand, Keyboard, Mouse } from "lucide-react";

const InfiniteGallery = dynamic(
  () => import("@/components/ui/3d-gallery-photography"),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-[70vh] min-h-[400px] w-full items-center justify-center bg-bg-deep">
        <p className="text-sm text-muted-foreground">Chargement…</p>
      </div>
    ),
  }
);

const heritageImages = [
  {
    src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=900&auto=format&fit=crop&q=80",
    alt: "Architecture du palais royal d'Abomey",
  },
  {
    src: "https://images.unsplash.com/photo-1504713440659-021c44dfec25?w=900&auto=format&fit=crop&q=80",
    alt: "Masque cérémoniel traditionnel",
  },
  {
    src: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=900&auto=format&fit=crop&q=80",
    alt: "Savane africaine",
  },
  {
    src: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=900&auto=format&fit=crop&q=80",
    alt: "Village lacustre",
  },
  {
    src: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=900&auto=format&fit=crop&q=80",
    alt: "Danseurs traditionnels",
  },
  {
    src: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=900&auto=format&fit=crop&q=80",
    alt: "Manuscrits",
  },
  {
    src: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=900&auto=format&fit=crop&q=80",
    alt: "Artisanat",
  },
  {
    src: "https://images.unsplash.com/photo-1590736969596-c0d96d3e0c28?w=900&auto=format&fit=crop&q=80",
    alt: "Textile traditionnel",
  },
];

export default function Heritage3DGallery() {
  return (
    <div className="relative h-[75vh] min-h-[480px] w-full border-t border-white/[0.06]">
      <InfiniteGallery
        images={heritageImages}
        speed={1}
        visibleCount={10}
        className="h-full w-full"
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex justify-center gap-6 bg-gradient-to-t from-bg-deep/90 to-transparent px-4 pb-6 pt-16">
        <span className="flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
          <Mouse className="size-3.5" aria-hidden />
          Molette
        </span>
        <span className="flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
          <Hand className="size-3.5" aria-hidden />
          Glisser
        </span>
        <span className="flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
          <Keyboard className="size-3.5" aria-hidden />
          Clavier
        </span>
      </div>
    </div>
  );
}
