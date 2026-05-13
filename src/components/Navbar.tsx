"use client";

import { motion, useScroll } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./ui/Logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (latest: number) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-3 sm:px-4 pt-[max(0.5rem,env(safe-area-inset-top))] pb-2 sm:py-4 md:py-6 transition-all duration-500"
      style={{ paddingLeft: "max(0.75rem, env(safe-area-inset-left))", paddingRight: "max(0.75rem, env(safe-area-inset-right))" }}
    >
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`w-full max-w-5xl rounded-full px-3 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 flex items-center justify-between gap-2 min-h-[3rem] sm:min-h-0 transition-all duration-500 ${
          isScrolled ? "glass-dark shadow-2xl" : "bg-transparent"
        }`}
      >
        <Link href="/" className="flex min-w-0 max-w-[min(42vw,140px)] shrink items-center gap-2 group sm:max-w-[160px]">
          <Logo 
            width={140} 
            height={42} 
            className="group-hover:scale-105 transition-transform duration-500" 
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-10 text-[10px] lg:text-xs font-bold uppercase tracking-[0.15em] lg:tracking-[0.2em] text-muted-foreground">
          <Link href="/manifeste" className="hover:text-primary transition-colors relative group">
            Manifeste
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all" />
          </Link>
          <Link href="/produits" className="hover:text-primary transition-colors relative group">
            Produits
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all" />
          </Link>
          <Link href="/equipe" className="hover:text-primary transition-colors relative group">
            Équipe
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all" />
          </Link>
          <Link href="/blog" className="hover:text-primary transition-colors relative group">
            Blog
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all" />
          </Link>
          <Link href="/contact" className="hover:text-primary transition-colors relative group">
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all" />
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link 
            href="#" 
            className="hidden sm:flex items-center gap-2 bg-white px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest text-black hover:bg-primary hover:text-white transition-all active:scale-95"
          >
            Découvrir <ArrowRight size={14} />
          </Link>
          <button 
            type="button"
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            className="md:hidden text-foreground min-h-11 min-w-11 inline-flex items-center justify-center rounded-full hover:bg-white/5 active:bg-white/10"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="fixed inset-0 z-[100] bg-background/98 backdrop-blur-2xl md:hidden flex flex-col items-center justify-center gap-6 sm:gap-10 p-6 pt-[max(2rem,env(safe-area-inset-top))] pb-8"
        >
          <button 
            type="button"
            aria-label="Fermer le menu"
            className="absolute top-[max(1rem,env(safe-area-inset-top))] right-4 min-h-11 min-w-11 inline-flex items-center justify-center text-white rounded-full hover:bg-white/10"
            onClick={() => setIsOpen(false)}
          >
            <X className="size-7" />
          </button>
          
          <Link href="/manifeste" className="text-3xl sm:text-4xl font-serif font-bold text-white hover:text-primary transition-colors text-center px-2" onClick={() => setIsOpen(false)}>Manifeste</Link>
          <Link href="/produits" className="text-3xl sm:text-4xl font-serif font-bold text-white hover:text-primary transition-colors text-center px-2" onClick={() => setIsOpen(false)}>Produits</Link>
          <Link href="/equipe" className="text-3xl sm:text-4xl font-serif font-bold text-white hover:text-primary transition-colors text-center px-2" onClick={() => setIsOpen(false)}>Équipe</Link>
          <Link href="/blog" className="text-3xl sm:text-4xl font-serif font-bold text-white hover:text-primary transition-colors text-center px-2" onClick={() => setIsOpen(false)}>Blog</Link>
          <Link href="/contact" className="text-3xl sm:text-4xl font-serif font-bold text-white hover:text-primary transition-colors text-center px-2" onClick={() => setIsOpen(false)}>Contact</Link>
          
          <Link 
            href="/contact" 
            className="mt-4 bg-white px-8 py-3.5 sm:px-10 sm:py-4 rounded-full text-black font-black uppercase tracking-widest text-xs sm:text-sm min-h-11 inline-flex items-center justify-center"
            onClick={() => setIsOpen(false)}
          >
            Découvrir
          </Link>
        </motion.div>
      )}
    </nav>
  );
}
