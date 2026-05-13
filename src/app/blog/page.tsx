import Blog from "@/components/Blog";
import ColorChangeCards from "@/components/ui/color-change-card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BlogPage() {
  return (
    <main className="page-top-offset min-h-screen">
      <Navbar />
      <Blog />
      <section className="relative bg-background section-padding overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="responsive-title text-white mb-6 md:mb-8">
              Nos <span className="text-gradient">Catégories</span>
            </h2>
            <p className="mx-auto max-w-2xl px-2 text-base text-muted-foreground sm:text-lg md:text-xl">
              Explorez nos différents univers de contenu.
            </p>
          </div>
          <ColorChangeCards />
        </div>
      </section>
      <Footer />
    </main>
  );
}
