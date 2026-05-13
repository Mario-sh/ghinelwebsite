"use client";

import { motion, useScroll } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

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
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-accent flex items-center justify-center font-bold text-background group-hover:rotate-[360deg] transition-transform duration-700">
            G
          </div>
          <span className="text-2xl font-serif font-black tracking-tighter text-foreground group-hover:text-primary transition-colors">GHINEL</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
          <Link href="#vision" className="hover:text-primary transition-colors relative group">
            Vision
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all" />
          </Link>
          <Link href="#technologie" className="hover:text-primary transition-colors relative group">
            Technologie
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all" />
          </Link>
          <Link href="#impact" className="hover:text-primary transition-colors relative group">
            Impact
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all" />
          </Link>
          <Link href="#contact" className="hover:text-primary transition-colors relative group">
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-0 top-24 bg-background/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center gap-8 text-2xl font-bold p-8"
        >
          <Link href="#vision" onClick={() => setIsOpen(false)}>Notre Vision</Link>
          <Link href="#technologie" onClick={() => setIsOpen(false)}>Technologie</Link>
          <Link href="#impact" onClick={() => setIsOpen(false)}>Impact</Link>
          <Link href="#contact" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link href="#" className="bg-primary px-8 py-3 rounded-full text-background text-lg" onClick={() => setIsOpen(false)}>
            Découvrir
          </Link>
        </motion.div>
      )}
    </nav>
  );
}
