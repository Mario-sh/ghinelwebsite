"use client";

import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { href: "/manifeste", label: "Manifeste" },
  { href: "/produits", label: "Produits" },
  { href: "/equipe", label: "Équipe" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-bg px-4 py-16 sm:px-6 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div>
            <Image
              src="/logoghinel.png"
              alt="GHINEL"
              width={120}
              height={36}
              className="h-8 w-auto object-contain"
            />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Technologie et culture africaine — pour un monde qui écoute,
              préserve et amplifie.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-brand"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/5 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            © {new Date().getFullYear()} GHINEL. Tous droits réservés.
          </p>
          <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground/60">
            Fait avec intention — pour l&apos;Afrique et le monde.
          </p>
        </div>
      </div>
    </footer>
  );
}
