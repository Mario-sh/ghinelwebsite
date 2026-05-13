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
      
      {/* Manifeste Teaser */}
      <section className="relative bg-background px-4 py-16 sm:px-6 sm:py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
            <div className="min-w-0">
              <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-primary sm:mb-6 sm:text-sm sm:tracking-[0.4em]">
                Le Manifeste
              </h2>
              <h3 className="mb-6 text-3xl font-serif font-bold leading-tight text-white sm:text-4xl md:mb-8 md:text-5xl lg:text-6xl">
                Bâtir un pont entre <span className="italic">{"l'histoire"}</span> et le <span className="text-gradient">futur</span>.
              </h3>
              <p className="mb-8 text-base leading-relaxed text-muted-foreground sm:mb-10 sm:text-lg md:text-xl">
                {"Ghinel est né d'une conviction profonde : la technologie est l'outil ultime pour la préservation de notre héritage."}
              </p>
              <Link href="/manifeste" className="group inline-flex min-h-11 items-center gap-3 text-sm font-bold text-white sm:text-base">
                Découvrir notre vision <span className="transition-transform group-hover:translate-x-2">→</span>
              </Link>
            </div>
            <div className="glass mx-auto flex aspect-square w-full max-w-[min(100%,20rem)] items-center justify-center rounded-3xl text-6xl sm:max-w-md sm:rounded-[40px] sm:text-7xl md:text-8xl">
              🏺
            </div>
          </div>
        </div>
      </section>

      {/* Produits Teaser */}
      <section className="bg-background/50 px-4 py-16 sm:px-6 sm:py-24 md:py-32">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-primary sm:mb-6 sm:text-sm">Solutions</h2>
          <h3 className="mb-10 px-2 text-3xl font-serif font-bold text-white sm:mb-14 sm:text-4xl md:text-5xl lg:text-6xl">
            {"L'intelligence au service de la mémoire"}
          </h3>
          <div className="mb-12 grid grid-cols-1 gap-6 md:mb-16 md:grid-cols-2 md:gap-8">
            <div className="glass group rounded-3xl p-6 text-left transition-all hover:border-primary/30 sm:p-8 md:rounded-[40px] md:p-10 lg:p-12">
              <h4 className="mb-3 font-serif text-2xl font-bold text-white sm:mb-4 sm:text-3xl">Ghinel Library</h4>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                Une bibliothèque numérique interactive regroupant des manuscrits rares.
              </p>
            </div>
            <div className="glass group rounded-3xl p-6 text-left transition-all hover:border-primary/30 sm:p-8 md:rounded-[40px] md:p-10 lg:p-12">
              <h4 className="mb-3 font-serif text-2xl font-bold text-white sm:mb-4 sm:text-3xl">Heritage AR</h4>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                Application de réalité augmentée pour visualiser les monuments en 3D.
              </p>
            </div>
          </div>
          <Link
            href="/produits"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-bold text-black transition-all hover:scale-105 sm:px-12 sm:py-5 sm:text-base"
          >
            Voir tous nos produits
          </Link>
        </div>
      </section>

      <CulturalTimeline />

      <HeritageGallery />

      <Heritage3DGallery />

      <Footer />
    </main>
  );
}
