"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { mainNav } from "@/lib/navigation";
import { cn } from "@/lib/utils";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] as const } },
};

export default function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-white/10 transition-all duration-500",
        scrolled ? "bg-bg-deep" : "bg-bg-deep/95"
      )}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:h-[80px] sm:px-8 lg:px-12">
        <Link href="/" className="relative shrink-0">
          <Image
            src="/logoghinel.png"
            alt="GHINEL"
            width={120}
            height={36}
            className="h-9 w-auto object-contain sm:h-10 lg:h-11"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-10 lg:flex" aria-label="Navigation principale">
          {mainNav.map((navItem) => {
            const active =
              navItem.href === "/"
                ? pathname === "/"
                : pathname.startsWith(navItem.href);
            return (
              <Link
                key={navItem.href}
                href={navItem.href}
                className={cn(
                  "text-base tracking-wide transition-colors",
                  active
                    ? "font-semibold text-foreground"
                    : "font-medium text-muted-foreground hover:text-foreground"
                )}
              >
                {navItem.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <Link
            href="/connexion"
            className="text-base text-muted-foreground transition-colors hover:text-foreground"
          >
            Se connecter
          </Link>
          <Link
            href="/inscription"
            className="rounded-full border border-brand px-5 py-2 text-base font-medium text-brand transition-colors hover:bg-brand hover:text-on-brand"
          >
            S&apos;inscrire
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-white/15 px-6 py-2.5 text-base font-medium text-foreground transition-colors hover:border-white/40"
          >
            Partenariats
          </Link>
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          className="inline-flex min-h-12 min-w-12 items-center justify-center text-foreground lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="border-t border-white/10 bg-bg px-5 pb-12 pt-8 lg:hidden"
        >
          <motion.nav
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-3"
            aria-label="Navigation mobile"
          >
            {mainNav.map((navItem) => {
              const active =
                navItem.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(navItem.href);
              return (
                <motion.div key={navItem.href} variants={item}>
                  <Link
                    href={navItem.href}
                    className={cn(
                      "block rounded-xl px-4 py-4 text-base font-medium tracking-wide transition-colors",
                      active ? "text-foreground" : "text-muted-foreground"
                    )}
                  >
                    {navItem.label}
                  </Link>
                </motion.div>
              );
            })}
            <motion.div variants={item} className="mt-3 flex gap-4 border-t border-white/10 pt-6">
              <Link
                href="/connexion"
                className="flex-1 rounded-full border border-white/15 px-5 py-3.5 text-center text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Se connecter
              </Link>
              <Link
                href="/inscription"
                className="flex-1 rounded-full border border-brand px-5 py-3.5 text-center text-base font-medium text-brand transition-colors hover:bg-brand hover:text-on-brand"
              >
                S&apos;inscrire
              </Link>
            </motion.div>
            <motion.div variants={item} className="mt-4">
              <Link
                href="/contact"
                className="block rounded-full border border-white/15 px-6 py-3.5 text-center text-base font-medium text-foreground transition-colors hover:border-white/40"
              >
                Partenariats
              </Link>
            </motion.div>
          </motion.nav>
        </motion.div>
      )}
    </header>
  );
}
