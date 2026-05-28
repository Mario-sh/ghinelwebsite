import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import { creatorBenefits } from "@/lib/content";

export const metadata: Metadata = {
  title: "Créateurs",
  description:
    "Rejoignez la communauté GHINEL — visibilité, outils et réseau pour créateurs culturels.",
};

export default function CreatorsPage() {
  return (
    <main>
      <PageHero
        label="Créateurs & communauté"
        title={
          <>
            Votre travail mérite
            <span className="text-gradient"> une scène mondiale.</span>
          </>
        }
        description="GHINEL accompagne artistes, auteurs et producteurs culturels avec des outils, une distribution et un réseau institutionnel."
      />

      <section className="border-b border-white/[0.06] bg-bg">
        <div className="container-wide section-y">
          <div className="grid gap-4 sm:grid-cols-2">
            {creatorBenefits.map((b) => (
              <div key={b.title} className="card-surface p-6 sm:p-8">
                <h3 className="font-medium text-foreground">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {b.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg-subtle">
        <div className="container-wide section-y">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/[0.08]">
              <Image
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&auto=format&fit=crop&q=80"
                alt="Créateurs culturels"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="heading-section font-serif font-medium text-foreground">
                Comment rejoindre le réseau
              </h2>
              <ol className="mt-6 space-y-4 text-sm text-muted-foreground">
                <li className="flex gap-4">
                  <span className="font-mono text-brand">01</span>
                  <span>Soumettez votre portfolio et une description de projet.</span>
                </li>
                <li className="flex gap-4">
                  <span className="font-mono text-brand">02</span>
                  <span>Échange avec notre équipe éditoriale et technique.</span>
                </li>
                <li className="flex gap-4">
                  <span className="font-mono text-brand">03</span>
                  <span>Intégration progressive selon vos objectifs et notre calendrier.</span>
                </li>
              </ol>
              <Link
                href="/contact"
                className="mt-8 inline-flex min-h-11 items-center rounded-full bg-foreground px-6 text-sm font-semibold text-on-brand hover:bg-brand"
              >
                Candidater
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
