import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <main className="page-top-offset min-h-screen">
      <Navbar />
      <section className="bg-background px-4 py-16 sm:px-6 sm:py-24 md:py-32 lg:py-40">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="mb-6 text-4xl font-serif font-bold leading-tight text-white sm:text-5xl md:mb-8 md:text-6xl lg:text-7xl">
            Contactez <span className="text-gradient">Ghinel</span>
          </h1>
          <p className="mb-12 max-w-2xl mx-auto text-base text-muted-foreground sm:mb-14 sm:text-lg md:text-xl">
            Nous sommes à votre écoute pour bâtir le futur ensemble.
          </p>
          <div className="grid grid-cols-1 gap-8 text-left md:grid-cols-2 md:gap-10 lg:gap-12">
            <div className="glass rounded-3xl p-6 sm:p-8 md:rounded-[40px] md:p-10 lg:p-12">
              <h3 className="mb-4 font-serif text-xl font-bold text-white sm:mb-6 sm:text-2xl">Nos bureaux</h3>
              <p className="mb-3 text-muted-foreground sm:mb-4">Cotonou, Bénin</p>
              <p className="text-muted-foreground">contact@ghinel.com</p>
              <p className="text-muted-foreground">+229 00 00 00 00</p>
            </div>
            <form className="space-y-4 sm:space-y-6">
              <input type="text" placeholder="Nom" className="min-h-12 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-base text-white outline-none transition-all focus:border-primary sm:px-6 sm:py-4" />
              <input type="email" placeholder="Email" className="min-h-12 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-base text-white outline-none transition-all focus:border-primary sm:px-6 sm:py-4" />
              <textarea placeholder="Message" rows={4} className="min-h-[8rem] w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-base text-white outline-none transition-all focus:border-primary sm:px-6 sm:py-4" />
              <button type="submit" className="min-h-12 w-full rounded-full bg-primary py-3.5 text-base font-bold text-background transition-all hover:scale-[1.02] sm:py-4">
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
