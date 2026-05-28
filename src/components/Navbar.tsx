"use client";

import { motion, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#about", label: "Histoire" },
  { href: "#culture", label: "Culture" },
  { href: "#heritage-3d", label: "Immersion" },
  { href: "#why", label: "Urgence" },
  { href: "#experience", label: "Parcours" },
  { href: "#impact", label: "Impact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (latest) => setIsScrolled(latest > 40));
  }, [scrollY]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-[max(0.75rem,env(safe-area-inset-top))] sm:px-6"
    >
      <motion.nav
        initial={false}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "flex w-full max-w-6xl items-center justify-between gap-4 rounded-full px-4 py-2.5 transition-all duration-500 sm:px-6 sm:py-3",
          isScrolled
            ? "border border-white/8 bg-bg/80 shadow-lg shadow-black/20 backdrop-blur-xl"
            : "bg-transparent"
        )}
      >
        <Link href="/" className="relative flex shrink-0 items-center">
          <Image
            src="/logoghinel.png"
            alt="GHINEL"
            width={120}
            height={36}
            className="h-7 w-auto object-contain sm:h-8"
            priority
          />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-brand transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full bg-white px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-on-brand transition-colors hover:bg-brand"
          >
            Contact
          </Link>
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full text-foreground md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </motion.nav>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex flex-col items-center justify-center gap-8 bg-bg/98 backdrop-blur-2xl md:hidden"
        >
          <button
            type="button"
            aria-label="Fermer"
            className="absolute right-4 top-[max(1rem,env(safe-area-inset-top))] min-h-11 min-w-11 inline-flex items-center justify-center"
            onClick={() => setIsOpen(false)}
          >
            <X className="size-6" />
          </button>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-serif text-3xl font-medium text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-4 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-on-brand"
          >
            Contact
          </Link>
        </motion.div>
      )}
    </header>
  );
}
