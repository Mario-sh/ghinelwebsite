import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import ContactForm from "@/components/pages/contact/ContactForm";

export const metadata: Metadata = {
  title: "Partenariats",
  description: "Contactez GHINEL pour un partenariat, un projet ou une collaboration.",
};

const partnershipTypes = [
  "Institution culturelle",
  "Investissement",
  "Créateur / artiste",
  "Marque & média",
  "Autre",
];

export default function ContactPage() {
  return (
    <main>
      <PageHero
        label="Contact"
        title={
          <>
            Parlons de votre
            <span className="text-gradient"> prochain projet.</span>
          </>
        }
        description="Institutions, investisseurs, créateurs — notre équipe répond sous 48 h ouvrées."
      />

      <section className="bg-bg">
        <div className="container-wide section-y">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <h2 className="text-lg font-medium text-foreground">Coordonnées</h2>
              <p className="mt-4 text-sm text-muted-foreground">Cotonou, Bénin</p>
              <a
                href="mailto:contact@ghinel.com"
                className="mt-2 block text-sm text-foreground hover:text-brand"
              >
                contact@ghinel.com
              </a>
              <p className="mt-8 text-sm text-muted-foreground">
                Types de demandes :
              </p>
              <ul className="mt-3 space-y-2">
                {partnershipTypes.map((t) => (
                  <li key={t} className="text-sm text-foreground/80">
                    {t}
                  </li>
                ))}
              </ul>
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
