"use client";

import { motion } from "framer-motion";
import { Archive, Globe, Sparkles } from "lucide-react";
import { ease } from "@/lib/motion";
import SectionLabel from "@/components/ui/SectionLabel";
import PremiumButton from "@/components/ui/PremiumButton";

const items = [
  {
    icon: Archive,
    title: "IA & Patrimoine",
    body: "Des expériences conversationnelles pour interagir avec les grandes figures de l'histoire africaine — KONDO donne vie à la mémoire.",
  },
  {
    icon: Sparkles,
    title: "Bibliothèque numérique",
    body: "Une expérience de lecture moderne et interactive avec PAPYRUS — pour rendre les œuvres et savoirs africains accessibles à tous.",
  },
  {
    icon: Globe,
    title: "Impact mondial",
    body: "Des solutions conçues pour préserver, célébrer et transmettre le patrimoine africain à l'échelle internationale.",
  },
];

export default function HomeCapabilities() {
  return (
    <section className="border-b border-white/10 bg-section">
      <div className="container-wide section-y">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionLabel>Ce que nous faisons</SectionLabel>
            <h2 className="heading-section mt-4 font-serif font-medium text-foreground">
              Sauvegarder. Célébrer. Transmettre.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Des solutions numériques innovantes pour rendre l&apos;histoire,
              la culture et les savoirs africains accessibles aux générations
              d&apos;aujourd&apos;hui et de demain.
            </p>
            <PremiumButton href="/solutions" variant="ghost" arrow className="mt-6">
              Découvrir nos solutions
            </PremiumButton>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:col-span-8">
            {items.map((item, i) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: i * 0.08, ease }}
                className="card-surface p-6 sm:p-7"
              >
                <item.icon className="size-5 text-brand" strokeWidth={1.5} />
                <h3 className="mt-5 font-medium text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
