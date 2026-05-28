"use client";

import dynamic from "next/dynamic";

const Heritage3DGallery = dynamic(
  () => import("@/components/Heritage3DGallery"),
  { ssr: false }
);

export default function CultureGallery() {
  return (
    <section className="bg-bg-deep">
      <div className="container-wide border-b border-white/[0.06] py-10">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand">
          Démo immersive
        </p>
        <h2 className="mt-3 font-serif text-2xl font-medium text-foreground sm:text-3xl">
          Galerie patrimoniale en 3D
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          Parcourez une sélection d&apos;images patrimoniales. Utilisez la molette,
          le clavier ou le geste tactile pour naviguer.
        </p>
      </div>
      <Heritage3DGallery />
    </section>
  );
}
