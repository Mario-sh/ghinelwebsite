import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import ContactForm from "@/components/pages/contact/ContactForm";
import SectionLabel from "@/components/ui/SectionLabel";

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

      {/* Bande d'accroche */}
      <section className="bg-section-brand">
        <div className="container-wide py-12 text-center sm:py-14">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-on-brand/70">
            Vous avez un projet ?
          </p>
          <a
            href="mailto:contact@ghinel.com"
            className="mt-2 inline-block font-serif text-2xl font-medium text-on-brand underline underline-offset-4 decoration-on-brand/30 hover:decoration-on-brand/60 sm:text-3xl"
          >
            contact@ghinel.com
          </a>
        </div>
      </section>

      {/* Formulaire de contact */}
      <section className="bg-section">
        <div className="container-wide section-y">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <SectionLabel>Contact</SectionLabel>
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
