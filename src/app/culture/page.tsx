import type { Metadata } from "next";
import CultureExperiences from "@/components/pages/culture/CultureExperiences";
import CultureGallery from "@/components/pages/culture/CultureGallery";
import PageHero from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Expériences",
  description:
    "Expériences culturelles immersives, archives et plateformes — GHINEL.",
};

export default function CulturePage() {
  return (
    <main>
      <PageHero
        label="Expériences"
        title={
          <>
            Des produits culturels
            <span className="text-gradient"> pensés pour durer.</span>
          </>
        }
        description="Archives, galeries immersives et plateformes sur mesure — pour institutions et marques qui exigent qualité et impact."
      />
      <CultureExperiences />
      <CultureGallery />
    </main>
  );
}
