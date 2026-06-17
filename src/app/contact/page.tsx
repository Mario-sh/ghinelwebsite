import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import ContactForm from "@/components/pages/contact/ContactForm";

export const metadata: Metadata = {
  title: "Collaboration",
  description:
    "Partenaires, investisseurs et conseil digital — construisons ensemble l'infrastructure culturelle et technologique de l'Afrique.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        label="Collaboration"
        title={
          <>
            Bâtissons ensemble le futur du patrimoine
            <span className="text-gradient"> culturel et technologique</span>
            {" de l'Afrique."}
          </>
        }
        description="GHINEL n'est pas seulement un projet culturel. C'est une infrastructure d'avenir pour l'héritage africain."
      />

      {/* Investisseurs & Partenaires Stratégiques */}
      <section className="border-b border-white/[0.06] bg-bg-subtle">
        <div className="container-wide section-y">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand">
                Investisseurs & Partenaires
              </p>
              <h2 className="heading-section mt-4 font-serif font-medium text-foreground">
                Vous souhaitez faire partie de l&apos;aventure ?
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                Investissez dans un projet culturel unique qui allie nouvelles
                technologies, recherche et passion. Ensemble, déployons des
                solutions à fort impact culturel, éducatif et technologique sur
                tout le continent.
              </p>
              <div className="mt-8 rounded-xl border border-brand/20 bg-brand/5 px-6 py-5">
                <p className="text-sm font-medium text-foreground">
                  Rejoignez GHINEL en tant que partenaire stratégique ou
                  investisseur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conseil & Déploiement Digital */}
      <section className="border-b border-white/[0.06] bg-bg">
        <div className="container-wide section-y">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand">
                Conseil & Déploiement
              </p>
              <h2 className="heading-section mt-4 font-serif font-medium text-foreground">
                Vous développez un projet digital ?
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                Au-delà de nos propres produits, nous mettons également notre
                expertise au service des entreprises, institutions et porteurs
                de projets qui souhaitent concevoir, lancer ou développer des
                solutions numériques innovantes.
              </p>
              <div className="mt-8 rounded-xl border border-white/10 bg-bg-elevated px-6 py-5">
                <p className="text-sm font-medium text-foreground">
                  Mettez l&apos;expertise technique et stratégique de
                  l&apos;équipe GHINEL au service de vos ambitions.
                </p>
              </div>
              <Link
                href="mailto:contact@ghinel.com"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand/80"
              >
                contact@ghinel.com
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Formulaire de contact */}
      <section className="bg-bg-subtle">
        <div className="container-wide section-y">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand">
                Contact
              </p>
              <h2 className="heading-section mt-4 font-serif font-medium text-foreground">
                Construisons quelque chose de durable ensemble.
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                Cotonou, Bénin
              </p>
              <a
                href="mailto:contact@ghinel.com"
                className="mt-2 block text-sm text-foreground hover:text-brand"
              >
                contact@ghinel.com
              </a>
            </div>
            <div className="lg:col-span-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
