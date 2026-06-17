import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 — Page introuvable",
  description: "La page que vous cherchez n'existe pas.",
};

export default function NotFound() {
  return (
    <main>
      <section className="page-top-offset relative flex min-h-svh items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0" aria-hidden>
          <Image
            src="/auth-bg.png"
            alt=""
            fill
            className="object-cover opacity-65"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bg/70 via-bg/85 to-bg" />
        </div>
        <div className="container-wide relative z-10 py-16 text-center sm:py-20">
          <h1 className="font-serif text-7xl font-medium text-foreground sm:text-8xl">404</h1>
          <p className="mt-4 text-lg text-muted-foreground sm:text-xl">
            Page introuvable
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            La page que vous cherchez n&apos;existe pas ou a été déplacée.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex min-h-11 items-center rounded-full bg-foreground px-7 text-sm font-semibold text-on-brand transition-all hover:bg-brand hover:scale-105 active:scale-95"
          >
            Retour à l&apos;accueil
          </Link>
        </div>
      </section>
    </main>
  );
}
