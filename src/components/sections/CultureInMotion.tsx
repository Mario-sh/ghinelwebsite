"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Reveal from "@/components/motion/Reveal";
import TextReveal from "@/components/motion/TextReveal";
import CinematicAtmosphere from "@/components/narrative/CinematicAtmosphere";
import SectionLabel from "@/components/ui/SectionLabel";
import { ease, easeCinematic } from "@/lib/motion";
import { cn } from "@/lib/utils";

const domains = [
  {
    id: "music",
    label: "Musique",
    headline: "Le pouls qui ne s'arrête jamais",
    description:
      "Des griots aux studios de Lagos — chaque rythme porte une identité. Nous le capturons, le préservons, le projetons.",
    image:
      "https://images.unsplash.com/photo-1514320291840-755e9aaeb12d?w=1200&auto=format&fit=crop&q=80",
  },
  {
    id: "fashion",
    label: "Mode",
    headline: "Le corps comme manifeste",
    description:
      "Textiles sacrés, silhouettes audacieuses — la mode africaine réécrit les codes du luxe mondial.",
    image:
      "https://images.unsplash.com/photo-1533750349088-cf871aefe3d1?w=1200&auto=format&fit=crop&q=80",
  },
  {
    id: "language",
    label: "Langues",
    headline: "Des milliers de voix, une mémoire",
    description:
      "Chaque dialecte est un univers. Nous les archivons pour que le futur numérique parle toutes les langues.",
    image:
      "https://images.unsplash.com/photo-1456513080920-9d49d2d1b9c2?w=1200&auto=format&fit=crop&q=80",
  },
  {
    id: "art",
    label: "Art",
    headline: "L'art qui traverse les siècles",
    description:
      "Sculpture, peinture, installation — nous donnons aux œuvres une présence qui émouvait autrefois les palais.",
    image:
      "https://images.unsplash.com/photo-1569172122681-988bf8f1d4b8?w=1200&auto=format&fit=crop&q=80",
  },
  {
    id: "story",
    label: "Récits",
    headline: "Chaque histoire est un combat",
    description:
      "Oralité, littérature, documentaire — nous construisons des archives narratives pour les générations qui n'ont pas encore de voix.",
    image:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&auto=format&fit=crop&q=80",
  },
  {
    id: "creators",
    label: "Créateurs",
    headline: "Les architectes de demain",
    description:
      "Artistes, auteurs, innovateurs — nous leur offrons la scène mondiale qu'ils méritent depuis toujours.",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&auto=format&fit=crop&q=80",
  },
];

export default function CultureInMotion() {
  const [active, setActive] = useState(domains[0]);
  const activeIndex = domains.findIndex((d) => d.id === active.id);

  return (
    <CinematicAtmosphere
      as="section"
      id="culture"
      variant="deep"
      className="section-padding relative border-t border-white/[0.06] bg-bg-elevated/50"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <Reveal>
              <SectionLabel>Chapitre II — La matière vivante</SectionLabel>
            </Reveal>
            <TextReveal
              as="h2"
              text="Six langages. Une seule civilisation en mouvement."
              className="heading-section mt-5 font-serif font-medium text-foreground"
            />
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground sm:text-base">
              Explorez les domaines où GHINEL opère — chaque discipline est une
              porte vers l&apos;immersion.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:gap-8">
          <div className="flex gap-2 overflow-x-auto pb-2 lg:col-span-4 lg:flex-col lg:gap-0 lg:overflow-visible lg:pb-0">
            {domains.map((domain, i) => (
              <button
                key={domain.id}
                type="button"
                onClick={() => setActive(domain)}
                className={cn(
                  "group relative shrink-0 rounded-lg px-4 py-3 text-left transition-all duration-500 lg:rounded-none lg:px-0 lg:py-5",
                  active.id === domain.id
                    ? "bg-white/[0.06] text-foreground lg:bg-transparent"
                    : "text-muted-foreground hover:text-foreground/85"
                )}
              >
                <span className="relative z-10 flex items-center gap-3">
                  <span
                    className={cn(
                      "text-[10px] font-semibold tracking-[0.3em]",
                      active.id === domain.id ? "text-brand" : "text-white/25"
                    )}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-medium sm:text-base">{domain.label}</span>
                </span>
                {active.id === domain.id && (
                  <motion.span
                    layoutId="culture-indicator"
                    className="absolute bottom-0 left-0 hidden h-px w-full bg-brand lg:block"
                    transition={{ type: "spring", stiffness: 380, damping: 36 }}
                  />
                )}
              </button>
            ))}
          </div>

          <div className="relative min-h-[380px] overflow-hidden rounded-xl border border-white/10 border-glow lg:col-span-8 lg:min-h-[480px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: easeCinematic }}
                className="absolute inset-0"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
                  style={{ backgroundImage: `url(${active.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-deep via-bg-deep/60 to-bg/20" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,color-mix(in_srgb,var(--ember)_15%,transparent),transparent_50%)]" />
                <div className="absolute inset-0 flex flex-col justify-end p-7 sm:p-10">
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08, ease }}
                    className="text-[10px] font-semibold uppercase tracking-[0.4em] text-brand"
                  >
                    {String(activeIndex + 1).padStart(2, "0")} — {active.label}
                  </motion.span>
                  <motion.h3
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.14, ease: easeCinematic }}
                    className="mt-3 max-w-lg font-serif text-2xl font-medium leading-tight text-foreground sm:text-4xl"
                  >
                    {active.headline}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, ease }}
                    className="mt-3 max-w-md text-sm leading-relaxed text-foreground-soft sm:text-base"
                  >
                    {active.description}
                  </motion.p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </CinematicAtmosphere>
  );
}
