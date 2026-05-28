"use client";

import { motion } from "framer-motion";
import { ease } from "@/lib/motion";

const steps = [
  {
    num: "01",
    title: "Diagnostic",
    body: "Audit des contenus, des publics et des objectifs. Identification des priorités à fort impact.",
  },
  {
    num: "02",
    title: "Conception",
    body: "Architecture produit, direction artistique et prototypage des expériences.",
  },
  {
    num: "03",
    title: "Production",
    body: "Développement, intégration des médias et déploiement sur mesure.",
  },
  {
    num: "04",
    title: "Transmission",
    body: "Formation des équipes, maintenance et évolution continue de la plateforme.",
  },
];

export default function HomeProcess() {
  return (
    <section className="border-b border-white/[0.06] bg-bg">
      <div className="container-wide section-y">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand">
            Méthode
          </p>
          <h2 className="heading-section mt-4 font-serif font-medium text-foreground">
            Un processus structuré, de l&apos;idée au déploiement.
          </h2>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.04] sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.06, ease }}
              className="bg-bg p-6 sm:p-8"
            >
              <span className="font-mono text-xs text-brand">{step.num}</span>
              <h3 className="mt-4 font-medium text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
