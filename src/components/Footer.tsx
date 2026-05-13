"use client";

import { Globe, Camera, Briefcase, Mail, ArrowUp } from "lucide-react";
import Link from "next/link";
import Logo from "./ui/Logo";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="relative overflow-hidden bg-background px-4 pb-[max(3rem,env(safe-area-inset-bottom))] pt-20 sm:px-6 sm:pt-28 md:pb-12 md:pt-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 grid grid-cols-1 gap-10 sm:gap-12 md:mb-20 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="group mb-6 flex max-w-[200px] items-center gap-2 sm:mb-8">
              <Logo 
                width={160} 
                height={48} 
                className="origin-left scale-105 sm:scale-110" 
              />
            </Link>
            <p className="mb-8 max-w-md text-base font-medium leading-relaxed text-muted-foreground sm:text-lg md:text-xl">
              Bâtir le futur sur les fondations de notre passé. 
              {"Une aventure technologique née au Bénin, pour l'Afrique."}
            </p>
            <div className="flex flex-wrap gap-4 sm:gap-6">
              <Link href="#" className="flex h-12 min-h-12 w-12 min-w-12 items-center justify-center rounded-full border border-white/10 glass text-white transition-all hover:bg-primary hover:text-background">
                <Globe size={20} />
              </Link>
              <Link href="#" className="flex h-12 min-h-12 w-12 min-w-12 items-center justify-center rounded-full border border-white/10 glass text-white transition-all hover:bg-primary hover:text-background">
                <Camera size={20} />
              </Link>
              <Link href="#" className="flex h-12 min-h-12 w-12 min-w-12 items-center justify-center rounded-full border border-white/10 glass text-white transition-all hover:bg-primary hover:text-background">
                <Briefcase size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Ghinel</h4>
            <ul className="space-y-4 text-muted-foreground text-sm">
              <li><Link href="#manifeste" className="hover:text-primary transition-colors">Manifeste</Link></li>
              <li><Link href="#produits" className="hover:text-primary transition-colors">Produits</Link></li>
              <li><Link href="#equipe" className="hover:text-primary transition-colors">Équipe</Link></li>
              <li><Link href="#blog" className="hover:text-primary transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-center gap-3"><Mail size={18} /> contact@ghinel.com</li>
              <li>Cotonou, Bénin</li>
              <li>+229 00 00 00 00</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-10 text-center md:flex-row md:pt-12 md:text-left">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Ghinel Startup. Tous droits réservés.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground md:justify-end md:gap-8">
            <Link href="#" className="hover:text-white transition-colors">Mentions légales</Link>
            <Link href="#" className="hover:text-white transition-colors">Confidentialité</Link>
          </div>
          <button 
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-white hover:border-primary transition-all"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>

      {/* Extreme Bottom Text (Awwwards Style) */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none opacity-[0.02]">
        <h2 className="text-[15vw] font-black leading-none translate-y-1/2 whitespace-nowrap">
          GHINEL TECHNOLOGY · CULTURE · HISTORY
        </h2>
      </div>
    </footer>
  );
}
