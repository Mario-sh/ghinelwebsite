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
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center py-6 px-4 transition-all duration-500">
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`w-full max-w-5xl rounded-full px-6 py-3 flex items-center justify-between transition-all duration-500 ${
          isScrolled ? "glass-dark shadow-2xl" : "bg-transparent"
        }`}
      >
        <Link href="/" className="flex items-center gap-2 group">
          <Logo 
            width={140} 
            height={42} 
            className="group-hover:scale-105 transition-transform duration-500" 
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
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
            className="md:hidden text-foreground p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="fixed inset-0 z-[100] bg-background/98 backdrop-blur-2xl md:hidden flex flex-col items-center justify-center gap-10 p-8"
        >
          <button 
            className="absolute top-8 right-8 text-white p-2"
            onClick={() => setIsOpen(false)}
          >
            <X size={32} />
          </button>
          
          <Link href="/manifeste" className="text-4xl font-serif font-bold text-white hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>Manifeste</Link>
          <Link href="/produits" className="text-4xl font-serif font-bold text-white hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>Produits</Link>
          <Link href="/equipe" className="text-4xl font-serif font-bold text-white hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>Équipe</Link>
          <Link href="/blog" className="text-4xl font-serif font-bold text-white hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>Blog</Link>
          <Link href="/contact" className="text-4xl font-serif font-bold text-white hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>Contact</Link>
          
          <Link 
            href="/contact" 
            className="mt-8 bg-white px-10 py-4 rounded-full text-black font-black uppercase tracking-widest text-sm"
            onClick={() => setIsOpen(false)}
          >
            Découvrir
          </Link>
        </motion.div>
      )}
    </nav>
  );
}
