import TeamShowcase from "@/components/ui/team-showcase";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Équipe | Ghinel",
  description: "Des esprits créatifs et des ingénieurs dévoués à la renaissance culturelle de l'Afrique.",
};

export default function EquipePage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <section className="relative bg-background px-4 pt-[max(7rem,env(safe-area-inset-top))] pb-16 sm:px-6 sm:pt-[max(8rem,env(safe-area-inset-top))] sm:pb-24 md:pb-36">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center sm:mb-20 md:mb-28">
            <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-primary sm:mb-6 sm:text-sm">
              L&apos;équipe
            </h2>
            <h1 className="responsive-title mb-6 text-white md:mb-8">
              L&apos;<span className="text-gradient">Équipe</span>
            </h1>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl">
              Des esprits créatifs et des ingénieurs dévoués à la renaissance
              culturelle de l&apos;Afrique.
            </p>
          </div>
          <TeamShowcase />
        </div>
      </section>
      <Footer />
    </main>
  );
}
