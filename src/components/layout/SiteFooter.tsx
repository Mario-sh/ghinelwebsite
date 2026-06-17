import Image from "next/image";
import Link from "next/link";
import { footerNav } from "@/lib/navigation";

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-bg">
      <div className="container-wide section-y-compact">
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <Image
              src="/logoghinel.png"
              alt="GHINEL"
              width={120}
              height={36}
              className="h-8 w-auto object-contain"
            />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              GHINEL crée des solutions numériques innovantes pour rendre
              l&apos;histoire, la culture et les savoirs africains accessibles
              aux générations d&apos;aujourd&apos;hui et de demain.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Navigation
            </p>
            <nav className="mt-4 flex flex-col gap-2.5">
              {footerNav.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-brand"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="md:col-span-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Collaboration
            </p>
            <p className="mt-4 text-sm text-muted-foreground">Cotonou, Bénin</p>
            <a
              href="mailto:contact@ghinel.com"
              className="mt-1 block text-sm text-muted-foreground transition-colors hover:text-brand"
            >
              contact@ghinel.com
            </a>
            <Link
              href="/contact"
              className="mt-6 inline-flex text-sm font-medium text-brand hover:underline"
            >
              Proposer un projet →
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} GHINEL. Tous droits réservés.
          </p>
          <p className="text-xs text-muted-foreground/70">
            Sauvegarder · Célébrer · Transmettre
          </p>
        </div>
      </div>
    </footer>
  );
}
