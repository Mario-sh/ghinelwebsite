"use client";

import { motion } from "framer-motion";
import { Globe, Camera, Briefcase, Mail, ArrowUp } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="relative pt-32 pb-12 px-4 bg-background overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-8 group">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center font-bold text-background">
                G
              </div>
              <span className="text-3xl font-bold tracking-tighter text-white">GHINEL</span>
            </Link>
            <p className="text-xl text-muted-foreground max-w-md leading-relaxed mb-8">
              Bâtir le futur sur les fondations de notre passé. 
              Une aventure technologique née au Bénin, pour l'Afrique.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="w-12 h-12 rounded-full glass border-white/10 flex items-center justify-center text-white hover:bg-primary hover:text-background transition-all">
                <Globe size={20} />
              </Link>
              <Link href="#" className="w-12 h-12 rounded-full glass border-white/10 flex items-center justify-center text-white hover:bg-primary hover:text-background transition-all">
                <Camera size={20} />
              </Link>
              <Link href="#" className="w-12 h-12 rounded-full glass border-white/10 flex items-center justify-center text-white hover:bg-primary hover:text-background transition-all">
                <Briefcase size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Plateforme</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li><Link href="#" className="hover:text-primary transition-colors">Bibliothèque</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Auteurs</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Tarifs</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Blog</Link></li>
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

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-6">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Ghinel Startup. Tous droits réservés.
          </p>
          <div className="flex gap-8 text-sm text-muted-foreground">
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
