"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import TextReveal from "@/components/motion/TextReveal";
import PremiumButton from "@/components/ui/PremiumButton";
import SectionLabel from "@/components/ui/SectionLabel";
import { ease, easeCinematic } from "@/lib/motion";

const beats = [
  { label: "Patrimoine", value: "Préservé" },
  { label: "Créateurs", value: "Amplifiés" },
  { label: "Monde", value: "Connecté" },
];

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const videoScale = useTransform(scrollYProgress, [0, 0.7], [1, 1.12]);
  const overlayDarken = useTransform(scrollYProgress, [0, 0.5], [0.55, 0.85]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative flex min-h-svh items-end overflow-hidden pb-14 sm:items-center sm:pb-0"
    >
      <motion.div
        style={{ scale: videoScale }}
        className="absolute inset-0 z-0"
        aria-hidden
      >
        <div className="absolute inset-0 bg-bg-deep" />
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1920&auto=format&fit=crop&q=80"
          className="absolute inset-0 h-full w-full object-cover opacity-60"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-bg-deep via-bg/90 to-bg/30"
          style={{ opacity: overlayDarken }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_70%_20%,color-mix(in_srgb,var(--ember)_12%,transparent),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_20%_80%,color-mix(in_srgb,var(--brand)_10%,transparent),transparent_50%)]" />
        <div className="film-vignette absolute inset-0" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent" />
      </motion.div>

      <div className="relative z-10 w-full page-top-offset section-padding !pb-10 sm:!py-0">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-6">
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: easeCinematic }}
              >
                <SectionLabel className="mb-6 sm:mb-8">
                  Prologue — Un mouvement culturel
                </SectionLabel>
              </motion.div>

              <TextReveal
                as="h1"
                trigger="mount"
                text="L'Afrique ne demande pas la permission de raconter son histoire."
                className="heading-display font-serif font-medium text-foreground text-balance"
                delay={0.12}
              />

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.85, ease: easeCinematic }}
                className="mt-7 max-w-xl text-base leading-relaxed text-foreground-soft sm:mt-9 sm:text-lg md:text-xl"
              >
                GHINEL transforme la mémoire en expérience vivante — pour les
                créateurs qui portent la culture, et pour le monde qui doit
                l&apos;écouter.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.05, ease }}
                className="mt-9 flex flex-col gap-4 sm:mt-11 sm:flex-row sm:items-center"
              >
                <PremiumButton href="#about">Entrer dans l&apos;expérience</PremiumButton>
                <PremiumButton href="/contact" variant="outline">
                  Investir · Créer
                </PremiumButton>
              </motion.div>
            </div>

            <motion.aside
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.1, delay: 1.2, ease: easeCinematic }}
              className="flex flex-col gap-6 border-t border-white/10 pt-8 lg:col-span-4 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0"
            >
              <p className="pull-quote font-serif italic text-foreground/75">
                Chaque archive perdue est une voix qui se tait. Nous construisons
                l&apos;infrastructure pour qu&apos;elles résonnent à l&apos;échelle
                mondiale.
              </p>
              <ul className="grid grid-cols-3 gap-4 lg:grid-cols-1 lg:gap-5">
                {beats.map((beat) => (
                  <li key={beat.label} className="border-l border-brand/40 pl-3">
                    <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                      {beat.label}
                    </span>
                    <p className="mt-1 font-serif text-lg text-foreground sm:text-xl">
                      {beat.value}
                    </p>
                  </li>
                ))}
              </ul>
            </motion.aside>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
        aria-hidden
      >
        <span className="text-[9px] uppercase tracking-[0.4em] text-muted-foreground">
          Chapitre I
        </span>
        <motion.div
          animate={{ scaleY: [1, 0.4, 1] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="h-12 w-px bg-gradient-to-b from-brand to-transparent"
        />
      </motion.div>
    </section>
  );
}
