"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { mainNav } from "@/lib/navigation";
import { cn } from "@/lib/utils";

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
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-[max(0.75rem,env(safe-area-inset-top))] sm:px-6 lg:px-10">
      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between gap-6 rounded-2xl px-4 py-3 transition-all duration-300 sm:px-6",
          scrolled
            ? "border border-white/[0.08] bg-bg/90 shadow-lg shadow-black/10 backdrop-blur-xl"
            : "bg-transparent"
        )}
      >
        <Link href="/" className="relative shrink-0">
          <Image
            src="/logoghinel.png"
            alt="GHINEL"
            width={120}
            height={36}
            className="h-7 w-auto object-contain sm:h-8"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigation principale">
          {mainNav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-lg px-3.5 py-2 text-[13px] font-medium transition-colors",
                  active
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/contact"
            className="rounded-full bg-foreground px-5 py-2.5 text-[13px] font-semibold text-on-brand transition-colors hover:bg-brand hover:text-on-brand"
          >
            Partenariats
          </Link>
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg text-foreground lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-[60] bg-bg-deep/98 backdrop-blur-xl lg:hidden">
          <div className="flex h-full flex-col px-6 pt-24 pb-10">
            <nav className="flex flex-col gap-1" aria-label="Navigation mobile">
              {mainNav.map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "rounded-xl px-4 py-4 text-2xl font-medium tracking-tight",
                      active ? "text-foreground" : "text-muted-foreground"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <Link
              href="/contact"
              className="mt-auto rounded-full bg-foreground py-4 text-center text-sm font-semibold text-on-brand"
            >
              Partenariats
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
