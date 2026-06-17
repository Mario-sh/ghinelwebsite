import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Pourquoi GHINEL",
  description:
    "Mission, vision et conviction de GHINEL — sauvegarder, célébrer et transmettre le patrimoine africain par la technologie.",
};

const cibles = [
  "Les passionnés d'histoire et de culture.",
  "Les étudiants, chercheurs et éducateurs.",
  "Les créateurs, auteurs et artistes.",
  "Les institutions culturelles.",
  "La diaspora africaine.",
  "Les générations futures.",
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
            {" mais aussi la rendre accessible à l'échelle mondiale."}
          </>
        }
        description="GHINEL est né pour contribuer à cette transformation."
      />

      {/* Le constat */}
      <section className="border-b border-white/[0.06] bg-bg-subtle">
        <div className="container-wide section-y">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
            <div className="lg:col-span-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand">
                Le constat
              </p>
              <h2 className="heading-section mt-4 font-serif font-medium text-foreground">
                L&apos;Afrique possède l&apos;un des patrimoines culturels les
                plus riches au monde.
              </h2>
            </div>
            <div className="lg:col-span-6">
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                Des traditions ancestrales transmises de génération en
                génération, des œuvres littéraires majeures, des figures
                historiques inspirantes et des savoirs ayant traversé les
                siècles.
              </p>
              <p className="mt-4 text-base leading-relaxed text-foreground/80 sm:text-lg">
                Pourtant, une grande partie de cette mémoire reste difficile
                d&apos;accès, insuffisamment documentée ou tout simplement
                menacée de disparition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Notre conviction */}
      <section className="border-b border-white/[0.06] bg-bg">
        <div className="container-wide section-y">
          <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-brand/5 via-transparent to-blue-600/5">
            <div className="relative z-10 p-8 sm:p-12 md:p-16">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand">
                Notre conviction
              </p>
              <blockquote className="mt-6 max-w-3xl font-serif text-2xl leading-snug text-foreground sm:text-3xl md:text-4xl">
                &laquo;&nbsp;Nous croyons que la technologie est un puissant
                outil de transmission culturelle. Non pas pour remplacer les
                traditions, mais pour les préserver et les rendre accessibles
                partout dans le monde.&nbsp;&raquo;
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="border-b border-white/[0.06] bg-bg-subtle">
        <div className="container-wide section-y">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="sticky top-28">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand">
                  Notre Mission
                </p>
                <h2 className="heading-section mt-4 font-serif font-medium text-foreground">
                  <span className="text-gradient">Sauvegarder.</span>
                  <br />
                  <span className="text-gradient">Célébrer.</span>
                  <br />
                  Transmettre.
                </h2>
              </div>
            </div>
            <div className="lg:col-span-7">
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                Utiliser la puissance de la technologie pour conserver
                l&apos;héritage culturel africain, le rendre interactif et
                universellement accessible.
              </p>
              <div className="mt-10 border-t border-white/[0.06] pt-10">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand">
                  Notre Vision
                </p>
                <p className="mt-4 font-serif text-xl font-medium leading-snug text-foreground sm:text-2xl">
                  Devenir le leader technologique de la mémoire africaine.
                </p>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Nous projetons un futur où aucun jeune Africain ne grandira
                  sans un accès instantané et immersif à ses racines. Un futur
                  où la mémoire collective africaine ne se perd plus, mais se
                  transmet, s&apos;enrichit et continue d&apos;inspirer les
                  générations futures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Cibles */}
      <section className="bg-bg">
        <div className="container-wide section-y">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
            <div className="lg:col-span-5">
              <h2 className="heading-section font-serif font-medium text-foreground">
                Nous construisons pour tous ceux qui refusent de voir la mémoire
                africaine disparaître.
              </h2>
            </div>
            <div className="lg:col-span-7">
              <div className="grid gap-3 sm:grid-cols-2">
                {cibles.map((cible) => (
                  <div
                    key={cible}
                    className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-bg-elevated px-5 py-4"
                  >
                    <div className="size-2 shrink-0 rounded-full bg-brand/60" />
                    <p className="text-sm text-foreground/80">{cible}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 flex justify-center">
            <Link
              href="/solutions"
              className="inline-flex min-h-12 items-center rounded-full bg-foreground px-8 text-sm font-semibold text-on-brand transition-colors hover:bg-brand"
            >
              Découvrir nos solutions
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
