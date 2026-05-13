import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-20">
      <Navbar />
      <section className="py-48 px-4 bg-background">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8">Contactez <span className="text-gradient">Ghinel</span></h1>
          <p className="text-xl text-muted-foreground mb-16">Nous sommes à votre écoute pour bâtir le futur ensemble.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            <div className="glass p-12 rounded-[40px]">
              <h3 className="text-2xl font-serif font-bold text-white mb-6">Nos bureaux</h3>
              <p className="text-muted-foreground mb-4">Cotonou, Bénin</p>
              <p className="text-muted-foreground">contact@ghinel.com</p>
              <p className="text-muted-foreground">+229 00 00 00 00</p>
            </div>
            <form className="space-y-6">
              <input type="text" placeholder="Nom" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-primary outline-none transition-all" />
              <input type="email" placeholder="Email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-primary outline-none transition-all" />
              <textarea placeholder="Message" rows={4} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-primary outline-none transition-all"></textarea>
              <button className="w-full bg-primary text-background font-bold py-4 rounded-full hover:scale-105 transition-all">Envoyer</button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
