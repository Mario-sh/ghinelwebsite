import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "GHINEL — mission, équipe et vision pour l'infrastructure culturelle africaine.",
};

const values = [
  {
    title: "Authenticité",
    body: "Chaque projet respecte les sources, les communautés et le contexte historique.",
  },
  {
    title: "Excellence produit",
    body: "Interfaces soignées, performances mesurées et déploiements fiables.",
  },
  {
    title: "Portée mondiale",
    body: "Conçu pour des publics internationaux sans renier les racines africaines.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <PageHero
        label="À propos"
        title={
          <>
            Une organisation dédiée au patrimoine
            <span className="text-gradient"> et à l&apos;innovation.</span>
          </>
        }
        description="GHINEL réunit expertise culturelle, design et ingénierie pour construire des produits numériques au service de la mémoire africaine."
      />

      <section className="border-b border-white/[0.06] bg-bg">
        <div className="container-wide section-y">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/[0.08] lg:aspect-auto lg:min-h-[480px]">
              <Image
                src="https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1000&auto=format&fit=crop&q=80"
                alt="Équipe et culture africaine"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="heading-section font-serif font-medium text-foreground">
                Notre mission
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Rendre le patrimoine africain accessible, compréhensible et
                valorisable à l&apos;ère numérique. Nous travaillons avec des
                musées, des créateurs et des investisseurs qui partagent cette
                ambition.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Basés à Cotonou, nous opérons à l&apos;échelle continentale et
                internationale — avec une approche produit inspirée des meilleures
                studios technologiques.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex text-sm font-semibold text-brand hover:underline"
              >
                Discuter d&apos;un partenariat →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bg-subtle">
        <div className="container-wide section-y">
          <h2 className="heading-section font-serif font-medium text-foreground">
            Nos principes
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="card-surface p-6 sm:p-8">
                <h3 className="font-medium text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
