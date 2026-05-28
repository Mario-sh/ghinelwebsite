"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Reveal from "@/components/motion/Reveal";
import TextReveal from "@/components/motion/TextReveal";
import CinematicAtmosphere from "@/components/narrative/CinematicAtmosphere";
import SectionLabel from "@/components/ui/SectionLabel";
import { stagger, easeCinematic } from "@/lib/motion";

const pillars = [
  {
    title: "Écouter",
    body: "Capturer les voix avant qu'elles ne s'effacent — archives orales, récits, témoignages transmis de génération en génération.",
  },
  {
    title: "Préserver",
    body: "Numériser avec respect et rigueur — manuscrits, artefacts, traditions. Chaque pixel est un acte de mémoire.",
  },
  {
    title: "Rayonner",
    body: "Projeter la culture africaine sur la scène mondiale — immersive, authentique, irrésistible.",
  },
];

export default function AboutSection() {
  return (
    <CinematicAtmosphere
      id="about"
      as="section"
      image="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1600&auto=format&fit=crop&q=80"
      imageOpacity={0.12}
      variant="warm"
      className="section-padding relative border-t border-white/[0.06]"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10 lg:items-start">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionLabel>Chapitre I — L&apos;éveil</SectionLabel>
            </Reveal>
            <TextReveal
              as="h2"
              text="Nous ne documentons pas. Nous réveillons la mémoire."
              className="heading-section mt-6 font-serif font-medium text-foreground text-balance"
            />
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-md text-base leading-relaxed text-foreground-soft sm:text-lg">
                GHINEL est né d&apos;une urgence culturelle : des milliers
                d&apos;histoires disparaissent chaque jour. Nous bâtissons
                l&apos;expérience digitale qui leur donne une seconde vie —
                cinématographique, immersive, globale.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <blockquote className="mt-8 border-l-2 border-brand/60 pl-5">
                <p className="pull-quote font-serif italic text-foreground/80">
                  &laquo;&nbsp;La technologie n&apos;est pas l&apos;ennemi de
                  l&apos;authenticité. C&apos;est son amplificateur.&nbsp;&raquo;
                </p>
              </blockquote>
            </Reveal>
          </div>

          <div className="relative lg:col-span-7">
            <div className="relative mb-8 aspect-[16/10] overflow-hidden rounded-xl border border-white/10 border-glow sm:mb-10">
              <Image
                src="https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1200&auto=format&fit=crop&q=80"
                alt="Danseurs traditionnels — culture africaine vivante"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-deep/90 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-4 right-4 text-[10px] uppercase tracking-[0.35em] text-foreground/60">
                Culture vivante · Mémoire active
              </p>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
              className="flex flex-col gap-px overflow-hidden rounded-xl border border-white/10 bg-surface"
            >
              {pillars.map((item, i) => (
                <motion.div
                  key={item.title}
                  variants={{
                    hidden: { opacity: 0, x: 16 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.85, delay: i * 0.08, ease: easeCinematic },
                    },
                  }}
                  className="group relative p-6 transition-colors hover:bg-surface-raised sm:p-8"
                >
                  <span className="text-[10px] font-semibold uppercase tracking-[0.4em] text-brand">
                    0{i + 1}
                  </span>
                  <h3 className="mt-3 font-serif text-xl font-medium text-foreground sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {item.body}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </CinematicAtmosphere>
  );
}
