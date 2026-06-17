import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import SolutionsContent from "@/components/pages/solutions/SolutionsContent";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "KONDO et PAPYRUS — des solutions numériques innovantes pour rendre l'histoire, la culture et les savoirs africains accessibles à tous.",
};

export default function SolutionsPage() {
  return (
    <main>
      <PageHero
        label="Nos Solutions"
        title={
          <>
            La mémoire africaine
            <br />
            <span className="text-gradient">à portée de clic.</span>
          </>
        }
        description="De l'IA conversationnelle aux bibliothèques numériques — des produits conçus pour préserver, célébrer et transmettre le patrimoine africain."
      />
      <SolutionsContent />
    </main>
  );
}
