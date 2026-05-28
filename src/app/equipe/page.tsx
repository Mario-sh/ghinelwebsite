import type { Metadata } from "next";
import TeamShowcase from "@/components/ui/team-showcase";
import PageHero from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Équipe",
  description: "L'équipe GHINEL — créatifs, ingénieurs et experts culturels.",
};

export default function EquipePage() {
  return (
    <main>
      <PageHero
        label="Équipe"
        title="Les personnes derrière GHINEL"
        description="Créatifs, ingénieurs et experts du patrimoine — unis par une vision commune."
      />
      <section className="bg-bg">
        <div className="container-wide section-y-compact pb-20">
          <TeamShowcase />
        </div>
      </section>
    </main>
  );
}
