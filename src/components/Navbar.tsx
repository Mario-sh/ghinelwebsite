"use client";

import { motion } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center py-6 px-4">
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-5xl glass-dark rounded-full px-6 py-3 flex items-center justify-between"
      >
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-accent flex items-center justify-center font-bold text-background group-hover:rotate-12 transition-transform duration-300">
            G
          </div>
          <span className="text-xl font-bold tracking-tighter text-foreground">GHINEL</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <Link href="#vision" className="hover:text-primary transition-colors">Notre Vision</Link>
          <Link href="#technologie" className="hover:text-primary transition-colors">Technologie</Link>
          <Link href="#impact" className="hover:text-primary transition-colors">Impact</Link>
          <Link href="#contact" className="hover:text-primary transition-colors">Contact</Link>
        </div>

        <div className="flex items-center gap-4">
          <Link 
            href="#" 
            className="hidden sm:flex items-center gap-2 bg-primary px-5 py-2 rounded-full text-sm font-bold text-background hover:scale-105 transition-transform"
          >
            Découvrir <ArrowRight size={16} />
          </Link>
          <button 
            className="md:hidden text-foreground"
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
