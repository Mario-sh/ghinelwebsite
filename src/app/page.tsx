import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CulturalTimeline from "@/components/CulturalTimeline";
import HeritageGallery from "@/components/HeritageGallery";
import Heritage3DGallery from "@/components/Heritage3DGallery";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />

      {/* ── Notre Mission ── */}
      <section className="relative bg-background px-4 py-20 sm:px-6 sm:py-28 md:py-40">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-20 md:mb-28">
            <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-primary sm:mb-6 sm:text-sm">
              Pourquoi Ghinel
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl md:text-2xl">
              Le patrimoine culturel africain est l&apos;un des plus riches du monde.
              Pourtant, il est fragmenté, menacé, et souvent inaccessible à ceux
              qui en ont le plus besoin&nbsp;: les jeunes générations africaines.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
            <div className="rounded-[28px] border border-red-900/15 bg-red-950/10 p-8 sm:p-10 md:rounded-[36px] md:p-12">
              <span className="mb-4 block text-3xl sm:mb-6 sm:text-4xl">⚠️</span>
              <h3 className="mb-3 font-serif text-2xl font-bold text-white sm:mb-4 sm:text-3xl">
                Le constat
              </h3>
              <ul className="space-y-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                <li className="flex gap-3">
                  <span className="mt-1 shrink-0 text-primary">→</span>
                  <span>Des manuscrits anciens dorment dans des archives inaccessibles.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 shrink-0 text-primary">→</span>
                  <span>Les récits oraux disparaissent avec leurs gardiens.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 shrink-0 text-primary">→</span>
                  <span>Moins de 2&nbsp;% des contenus numériques mondiaux représentent l&apos;Afrique.</span>
                </li>
              </ul>
            </div>

            <div className="rounded-[28px] border border-primary/15 bg-primary/5 p-8 sm:p-10 md:rounded-[36px] md:p-12">
              <span className="mb-4 block text-3xl sm:mb-6 sm:text-4xl">✨</span>
              <h3 className="mb-3 font-serif text-2xl font-bold text-white sm:mb-4 sm:text-3xl">
                Notre réponse
              </h3>
              <ul className="space-y-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                <li className="flex gap-3">
                  <span className="mt-1 shrink-0 text-primary">→</span>
                  <span>Numériser et documenter les manuscrits, les traditions orales et les artefacts.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 shrink-0 text-primary">→</span>
                  <span>Les rendre accessibles via une plateforme numérique intuitive.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 shrink-0 text-primary">→</span>
                  <span>Utiliser l&apos;IA et la 3D pour créer des expériences immersives et éducatives.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Notre Vision ── */}
      <section className="relative bg-background/50 px-4 py-20 sm:px-6 sm:py-28 md:py-40">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
            <div className="min-w-0">
              <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-primary sm:mb-6 sm:text-sm">
                Le Manifeste
              </h2>
              <h3 className="mb-6 text-3xl font-serif font-bold leading-tight text-white sm:text-4xl md:mb-8 md:text-5xl lg:text-6xl">
                Bâtir un pont entre <span className="italic">l&apos;histoire</span> et le{" "}
                <span className="text-gradient">futur</span>.
              </h3>
              <p className="mb-8 text-base leading-relaxed text-muted-foreground sm:mb-10 sm:text-lg md:text-xl">
                Ghinel est né d&apos;une conviction profonde&nbsp;: la technologie est
                l&apos;outil ultime pour la préservation de notre héritage. Nous ne
                nous contentons pas de stocker des données&nbsp;: nous redonnons vie
                à l&apos;âme de l&apos;Afrique.
              </p>

              <div className="mb-10 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
                <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5 sm:p-6">
                  <h4 className="mb-2 font-serif text-lg font-bold text-white sm:text-xl">
                    Authenticité
                  </h4>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Préserver la vérité historique sans compromis, en respectant les
                    traditions orales et écrites.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5 sm:p-6">
                  <h4 className="mb-2 font-serif text-lg font-bold text-white sm:text-xl">
                    Innovation
                  </h4>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Utiliser l&apos;IA, la réalité augmentée et le web immersif pour
                    rendre la culture accessible à tous.
                  </p>
                </div>
              </div>

              <Link
                href="/manifeste"
                className="group inline-flex min-h-11 items-center gap-3 text-sm font-bold text-white sm:text-base"
              >
                Lire le manifeste{" "}
                <span className="transition-transform group-hover:translate-x-2">→</span>
              </Link>
            </div>

            <div className="glass relative mx-auto flex aspect-square w-full max-w-[min(100%,22rem)] items-center justify-center overflow-hidden rounded-3xl sm:max-w-md sm:rounded-[40px]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/5 opacity-60" />
              <div className="relative flex flex-col items-center p-12 text-center">
                <span className="mb-6 text-7xl sm:text-8xl">🏺</span>
                <p className="font-serif text-lg italic leading-relaxed text-white/60 sm:text-xl">
                  &laquo;&nbsp;Celui qui ne sait pas d&apos;où il vient ne peut savoir
                  où il va.&nbsp;&raquo;
                </p>
                <span className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">
                  Sagesse Africaine
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Chiffres Clés ── */}
      <section className="relative border-y border-white/5 bg-background px-4 py-16 sm:px-6 sm:py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
            <div className="text-center">
              <span className="heading-huge block font-serif font-bold text-primary">
                12k+
              </span>
              <span className="text-xs uppercase tracking-widest text-muted-foreground sm:text-sm">
                Manuscrits numérisés
              </span>
            </div>
            <div className="text-center">
              <span className="heading-huge block font-serif font-bold text-primary">
                50+
              </span>
              <span className="text-xs uppercase tracking-widest text-muted-foreground sm:text-sm">
                Partenaires culturels
              </span>
            </div>
            <div className="text-center">
              <span className="heading-huge block font-serif font-bold text-primary">
                4k+
              </span>
              <span className="text-xs uppercase tracking-widest text-muted-foreground sm:text-sm">
                Heures d&apos;archives orales
              </span>
            </div>
            <div className="text-center">
              <span className="heading-huge block font-serif font-bold text-primary">
                8
              </span>
              <span className="text-xs uppercase tracking-widest text-muted-foreground sm:text-sm">
                Pays d&apos;Afrique couverts
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Nos Solutions ── */}
      <section className="relative bg-background px-4 py-20 sm:px-6 sm:py-28 md:py-40">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center sm:mb-20 md:mb-28">
            <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-primary sm:mb-6 sm:text-sm">
              Solutions
            </h2>
            <h3 className="mb-6 px-2 text-3xl font-serif font-bold text-white sm:mb-8 sm:text-4xl md:text-5xl lg:text-6xl">
              L&apos;intelligence au service de la{" "}
              <span className="text-gradient">mémoire</span>
            </h3>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl">
              Des outils technologiques conçus pour magnifier et préserver
              l&apos;héritage culturel africain.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            <div className="group relative overflow-hidden rounded-[30px] border border-white/5 bg-white/[0.02] p-8 transition-all duration-500 hover:border-primary/30 hover:bg-white/[0.04] sm:p-10 md:rounded-[40px] md:p-12">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative z-10">
                <div className="mb-6 flex items-start justify-between sm:mb-8">
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-white/5 text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-black sm:size-14">
                    <svg className="size-6 sm:size-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" /></svg>
                  </div>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-widest text-muted-foreground group-hover:border-primary group-hover:text-primary">
                    Beta
                  </span>
                </div>
                <h4 className="mb-3 font-serif text-2xl font-bold text-white transition-colors group-hover:text-primary sm:mb-4 sm:text-3xl">
                  Ghinel Library
                </h4>
                <p className="mb-8 text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-white/80 sm:mb-10 sm:text-base">
                  Une bibliothèque numérique interactive regroupant des manuscrits
                  rares, des traditions orales et des récits historiques
                  authentifiés.
                </p>
                <Link
                  href="/produits"
                  className="flex items-center gap-3 text-sm font-bold text-white transition-all hover:gap-4"
                >
                  En savoir plus <span>→</span>
                </Link>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-[28px] border border-white/5 bg-white/[0.02] p-8 transition-all duration-500 hover:border-primary/30 hover:bg-white/[0.04] sm:p-10 md:rounded-[36px] md:p-12">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-primary/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative z-10">
                <div className="mb-6 flex items-start justify-between sm:mb-8">
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-white/5 text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-black sm:size-14">
                    <svg className="size-6 sm:size-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" /></svg>
                  </div>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-widest text-muted-foreground group-hover:border-primary group-hover:text-primary">
                    Bientôt
                  </span>
                </div>
                <h4 className="mb-3 font-serif text-2xl font-bold text-white transition-colors group-hover:text-primary sm:mb-4 sm:text-3xl">
                  Heritage AR
                </h4>
                <p className="mb-8 text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-white/80 sm:mb-10 sm:text-base">
                  Application de réalité augmentée permettant de visualiser les
                  monuments historiques du Bénin en 3D sur leur site d&apos;origine.
                </p>
                <Link
                  href="/produits"
                  className="flex items-center gap-3 text-sm font-bold text-white transition-all hover:gap-4"
                >
                  En savoir plus <span>→</span>
                </Link>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-[30px] border border-white/5 bg-white/[0.02] p-8 transition-all duration-500 hover:border-primary/30 hover:bg-white/[0.04] sm:p-10 md:rounded-[40px] md:p-12">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative z-10">
                <div className="mb-6 flex items-start justify-between sm:mb-8">
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-white/5 text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-black sm:size-14">
                    <svg className="size-6 sm:size-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>
                  </div>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-widest text-muted-foreground group-hover:border-primary group-hover:text-primary">
                    Nouveau
                  </span>
                </div>
                <h4 className="mb-3 font-serif text-2xl font-bold text-white transition-colors group-hover:text-primary sm:mb-4 sm:text-3xl">
                  Echoes of Benin
                </h4>
                <p className="mb-8 text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-white/80 sm:mb-10 sm:text-base">
                  Plateforme de podcast et de récits audio immersifs pour
                  redécouvrir les légendes et épopées des grands rois du Bénin.
                </p>
                <Link
                  href="/produits"
                  className="flex items-center gap-3 text-sm font-bold text-white transition-all hover:gap-4"
                >
                  En savoir plus <span>→</span>
                </Link>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-[28px] border border-white/5 bg-white/[0.02] p-8 transition-all duration-500 hover:border-primary/30 hover:bg-white/[0.04] sm:p-10 md:rounded-[36px] md:p-12">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-primary/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative z-10">
                <div className="mb-6 flex items-start justify-between sm:mb-8">
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-white/5 text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-black sm:size-14">
                    <svg className="size-6 sm:size-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" /></svg>
                  </div>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-widest text-muted-foreground group-hover:border-primary group-hover:text-primary">
                    Enterprise
                  </span>
                </div>
                <h4 className="mb-3 font-serif text-2xl font-bold text-white transition-colors group-hover:text-primary sm:mb-4 sm:text-3xl">
                  Cultural API
                </h4>
                <p className="mb-8 text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-white/80 sm:mb-10 sm:text-base">
                  Une API robuste pour les développeurs souhaitant intégrer des
                  données culturelles africaines vérifiées dans leurs applications.
                </p>
                <Link
                  href="/produits"
                  className="flex items-center gap-3 text-sm font-bold text-white transition-all hover:gap-4"
                >
                  En savoir plus <span>→</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center sm:mt-16 md:mt-20">
            <Link
              href="/produits"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-bold text-black transition-all hover:scale-105 active:scale-95 sm:px-12 sm:py-5 sm:text-base"
            >
              Voir tous nos produits
            </Link>
          </div>
        </div>
      </section>

      <CulturalTimeline />

      <HeritageGallery />

      <Heritage3DGallery />

      <Footer />
    </main>
  );
}
