"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Archive, Globe, Sparkles } from "lucide-react";
import { ease } from "@/lib/motion";

const items = [
  {
    icon: Archive,
    title: "Préservation numérique",
    body: "Archivage, numérisation et structuration du patrimoine culturel — manuscrits, artefacts, traditions orales.",
  },
  {
    icon: Sparkles,
    title: "Expériences immersives",
    body: "Galeries 3D, narration interactive et interfaces conçues pour un public international.",
  },
  {
    icon: Globe,
    title: "Distribution mondiale",
    body: "Plateformes et APIs pour institutions, créateurs et partenaires qui souhaitent une portée globale.",
  },
];

export default function HomeCapabilities() {
  return (
    <section className="border-b border-white/[0.06] bg-bg">
      <div className="container-wide section-y">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand">
              Ce que nous faisons
            </p>
            <h2 className="heading-section mt-4 font-serif font-medium text-foreground">
              Trois piliers. Une vision claire.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Nous accompagnons musées, créateurs et organisations avec une
              approche produit — rigoureuse, scalable et orientée impact.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-flex text-sm font-medium text-brand hover:underline"
            >
              En savoir plus →
            </Link>
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
