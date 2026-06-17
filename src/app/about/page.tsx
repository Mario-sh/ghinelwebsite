import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import SectionLabel from "@/components/ui/SectionLabel";
import PremiumButton from "@/components/ui/PremiumButton";

export const metadata: Metadata = {
  title: "Pourquoi GHINEL",
  description:
    "Mission, vision et conviction de GHINEL — sauvegarder, célébrer et transmettre le patrimoine africain par la technologie.",
};

const cibles = [
  "Passionnés d'histoire",
  "Étudiants & chercheurs",
  "Créateurs & artistes",
  "Institutions culturelles",
  "Diaspora africaine",
  "Générations futures",
];

export default function AboutPage() {
  return (
    <main>
      <PageHero
        label="Pourquoi GHINEL ?"
        title={
          <>
            Nous sommes à un moment où l&apos;Afrique peut
            <span className="text-gradient"> conserver sa mémoire</span>
            {" et la rendre accessible mondialement."}
          </>
        }
      />

      {/* Le constat */}
      <section className="border-b border-white/10 bg-section">
        <div className="container-wide section-y">
          <div className="grid gap-16 lg:grid-cols-12 lg:items-center lg:gap-20">
            <div className="lg:col-span-6">
              <SectionLabel>Le constat</SectionLabel>
              <h2 className="heading-section mt-5 font-serif font-medium text-foreground">
                L&apos;Afrique a un patrimoine culturel exceptionnel.
              </h2>
            </div>
            <div className="lg:col-span-6">
              <p className="text-[clamp(1rem,2.2vw,1.125rem)] leading-relaxed text-muted-foreground">
                Des traditions ancestrales, des œuvres majeures, des figures
                inspirantes et des savoirs traversant les siècles — mais une
                grande partie de cette mémoire reste difficile d&apos;accès ou
                menacée.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Notre conviction */}
      <section className="bg-section-brand">
        <div className="container-wide section-y">
          <div className="p-0 sm:p-0 md:p-0">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-on-brand/70">
              Notre conviction
            </p>
            <blockquote className="mt-8 max-w-4xl font-serif text-[clamp(1.5rem,4vw,3rem)] leading-snug text-on-brand">
              &laquo;&nbsp;La technologie préserve et rend accessible la
              culture — sans remplacer les traditions.&nbsp;&raquo;
            </blockquote>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="border-b border-white/10 bg-section">
        <div className="container-wide section-y">
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <div className="sticky top-32">
                <SectionLabel>Notre Mission</SectionLabel>
                <h2 className="heading-section mt-5 font-serif font-medium text-foreground">
                  <span className="text-gradient">Sauvegarder.</span>
                  <br />
                  <span className="text-gradient">Célébrer.</span>
                  <br />
                  Transmettre.
                </h2>
              </div>
            </div>
            <div className="lg:col-span-7">
              <p className="text-[clamp(1rem,2.2vw,1.125rem)] leading-relaxed text-muted-foreground">
                Conserver l&apos;héritage culturel africain et le rendre
                universellement accessible.
              </p>
              <div className="mt-12 border-t border-white/10 pt-12">
                <SectionLabel>Notre Vision</SectionLabel>
                <p className="mt-5 font-serif text-[clamp(1.25rem,3vw,1.75rem)] font-medium leading-snug text-foreground">
                  Devenir le leader technologique de la mémoire africaine.
                </p>
                <p className="mt-5 text-[clamp(1rem,2.2vw,1.125rem)] leading-relaxed text-muted-foreground">
                  Un futur où chaque jeune Africain accède instantanément à ses
                  racines, et où la mémoire collective s&apos;enrichit et
                  inspire les générations à venir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Cibles */}
      <section className="bg-section-alt">
        <div className="container-wide section-y">
          <div className="grid gap-16 lg:grid-cols-12 lg:items-center lg:gap-20">
            <div className="lg:col-span-5">
              <h2 className="heading-section font-serif font-medium text-foreground">
                Pour tous ceux qui refusent de voir la mémoire africaine
                disparaître.
              </h2>
            </div>
            <div className="lg:col-span-7">
              <div className="grid gap-4 sm:grid-cols-2">
                {cibles.map((cible) => (
                  <div
                    key={cible}
                    className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl px-6 py-5"
                  >
                    <div className="size-2.5 shrink-0 rounded-full bg-brand/60" />
                    <p className="text-sm text-muted-foreground">{cible}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-20 flex justify-center">
            <PremiumButton href="/solutions" variant="primary">
              Découvrir nos solutions
            </PremiumButton>
          </div>
        </div>
      </section>
    </main>
  );
}
