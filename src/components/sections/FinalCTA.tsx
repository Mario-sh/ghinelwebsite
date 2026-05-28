"use client";

import { motion } from "framer-motion";
import TextReveal from "@/components/motion/TextReveal";
import CinematicAtmosphere from "@/components/narrative/CinematicAtmosphere";
import PremiumButton from "@/components/ui/PremiumButton";
import { ease, easeCinematic } from "@/lib/motion";

export default function FinalCTA() {
  return (
    <CinematicAtmosphere
      as="section"
      id="join"
      variant="warm"
      vignette
      className="section-padding relative overflow-hidden border-t border-white/[0.06]"
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 100%, color-mix(in srgb, var(--brand) 18%, transparent), transparent 65%)",
        }}
      />

      <div className="relative mx-auto max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[10px] font-semibold uppercase tracking-[0.5em] text-brand"
        >
          Épilogue
        </motion.p>

        <TextReveal
          as="h2"
          text="L'avenir de la culture africaine s'écrit maintenant."
          className="heading-section mt-6 font-serif font-medium text-foreground text-balance"
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.4, ease: easeCinematic }}
          className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-foreground-soft sm:text-lg"
        >
          Que vous soyez investisseur, institution ou créateur — GHINEL est le
          mouvement où la mémoire rencontre le monde. Entrez.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.55, ease }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <PremiumButton href="/contact">Rejoindre le mouvement</PremiumButton>
          <PremiumButton href="/manifeste" variant="outline">
            Lire le manifeste
          </PremiumButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.85, duration: 1 }}
          className="narrative-rule mx-auto mt-16 max-w-xs"
        />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-10 font-serif text-sm italic text-muted-foreground"
        >
          GHINEL — L&apos;âme de l&apos;Afrique, réinventée pour le monde.
        </motion.p>
      </div>
    </CinematicAtmosphere>
  );
}
