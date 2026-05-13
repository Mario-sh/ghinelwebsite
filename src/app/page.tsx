import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Manifeste from "@/components/Manifeste";
import Products from "@/components/Products";
import CulturalTimeline from "@/components/CulturalTimeline";
import HeritageGallery from "@/components/HeritageGallery";
import Heritage3DGallery from "@/components/Heritage3DGallery";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      
      {/* Manifeste Teaser */}
      <section className="relative py-32 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-sm uppercase tracking-[0.4em] text-primary mb-6 font-bold">Le Manifeste</h2>
              <h3 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8">Bâtir un pont entre <span className="italic">l'histoire</span> et le <span className="text-gradient">futur</span>.</h3>
              <p className="text-xl text-muted-foreground mb-12">Ghinel est né d'une conviction profonde : la technologie est l'outil ultime pour la préservation de notre héritage.</p>
              <Link href="/manifeste" className="group flex items-center gap-4 text-white font-bold">
                Découvrir notre vision <span className="group-hover:translate-x-2 transition-transform">→</span>
              </Link>
            </div>
            <div className="aspect-square glass rounded-[40px] flex items-center justify-center text-8xl">🏺</div>
          </div>
        </div>
      </section>

      {/* Produits Teaser */}
      <section className="py-32 px-4 bg-background/50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-sm uppercase tracking-[0.4em] text-primary mb-6 font-bold">Solutions</h2>
          <h3 className="text-4xl md:text-6xl font-serif font-bold text-white mb-16">L'intelligence au service de la mémoire</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="glass p-12 rounded-[40px] text-left group hover:border-primary/30 transition-all">
              <h4 className="text-3xl font-serif font-bold text-white mb-4">Ghinel Library</h4>
              <p className="text-muted-foreground mb-8">Une bibliothèque numérique interactive regroupant des manuscrits rares.</p>
            </div>
            <div className="glass p-12 rounded-[40px] text-left group hover:border-primary/30 transition-all">
              <h4 className="text-3xl font-serif font-bold text-white mb-4">Heritage AR</h4>
              <p className="text-muted-foreground mb-8">Application de réalité augmentée pour visualiser les monuments en 3D.</p>
            </div>
          </div>
          <Link href="/produits" className="bg-white text-black px-12 py-5 rounded-full font-bold hover:scale-105 transition-all">Voir tous nos produits</Link>
        </div>
      </section>

      <CulturalTimeline />

      <HeritageGallery />

      <Heritage3DGallery />

      <Footer />
    </main>
  );
}
