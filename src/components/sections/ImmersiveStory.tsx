"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SectionLabel from "@/components/ui/SectionLabel";

const chapters = [
  {
    index: "01",
    title: "Écouter",
    subtitle: "Avant qu'il ne soit trop tard",
    body: "Archives orales, entretiens, récits de griots — nous capturons les voix que le temps efface.",
    image:
      "https://images.unsplash.com/photo-1456513080920-9d49d2d1b9c2?w=1920&auto=format&fit=crop&q=80",
  },
  {
    index: "02",
    title: "Préserver",
    subtitle: "Avec respect, avec rigueur",
    body: "Manuscrits, artefacts, traditions — numérisés comme on protège un trésor national.",
    image:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1920&auto=format&fit=crop&q=80",
  },
  {
    index: "03",
    title: "Réinventer",
    subtitle: "L'expérience qui émeut",
    body: "Immersion 3D, narration interactive, IA éthique — la culture devient une expérience que l'on traverse.",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&auto=format&fit=crop&q=80",
  },
  {
    index: "04",
    title: "Partager",
    subtitle: "Le monde entier écoute",
    body: "Une plateforme ouverte — pour chaque Africain, chaque créateur, chaque curieux du monde.",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&auto=format&fit=crop&q=80",
  },
];

export default function ImmersiveStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="experience"
      ref={containerRef}
      className="relative"
      style={{ height: `${chapters.length * 100}vh` }}
    >
      <div className="sticky top-0 flex h-svh min-h-svh flex-col overflow-hidden bg-bg-deep">
        {chapters.map((chapter, i) => (
          <ChapterBackground
            key={chapter.index}
            image={chapter.image}
            scrollYProgress={scrollYProgress}
            range={[
              i / chapters.length,
              (i + 0.5) / chapters.length,
              (i + 1) / chapters.length,
            ]}
            isLast={i === chapters.length - 1}
          />
        ))}

        <div className="absolute inset-0 bg-gradient-to-r from-bg-deep via-bg-deep/92 to-bg-deep/75" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,color-mix(in_srgb,var(--brand)_10%,transparent),transparent_55%)]" />
        <div className="film-vignette absolute inset-0" />

        <div className="relative z-10 flex flex-1 flex-col section-padding-dense !py-10 sm:!py-14">
          <SectionLabel>Chapitre IV — Le parcours</SectionLabel>

          <div className="mt-auto grid flex-1 items-end gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-5">
              <h2 className="heading-section font-serif font-medium text-foreground">
                Un musée sans murs.
                <br />
                <span className="text-gradient italic">Une émotion sans limites.</span>
              </h2>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-foreground-soft sm:text-base">
                Quatre actes. Un seul fil narratif — de l&apos;écoute à la
                transmission. Scrollez pour traverser l&apos;expérience GHINEL.
              </p>
            </div>

            <div className="relative min-h-[280px] lg:col-span-7 lg:min-h-[320px]">
              {chapters.map((chapter, i) => {
                const start = i / chapters.length;
                const end = (i + 1) / chapters.length;
                const mid = (start + end) / 2;
                return (
                  <ChapterPanel
                    key={chapter.index}
                    chapter={chapter}
                    scrollYProgress={scrollYProgress}
                    range={[start, mid, end]}
                    isLast={i === chapters.length - 1}
                  />
                );
              })}
            </div>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <div className="h-px flex-1 overflow-hidden bg-white/10">
              <motion.div
                style={{ width: progressWidth }}
                className="h-full bg-gradient-to-r from-brand-deep via-brand to-brand-glow"
              />
            </div>
            <span className="shrink-0 text-[9px] uppercase tracking-[0.35em] text-muted-foreground">
              Parcours
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function ChapterBackground({
  image,
  scrollYProgress,
  range,
  isLast,
}: {
  image: string;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  range: [number, number, number];
  isLast: boolean;
}) {
  const opacity = useTransform(
    scrollYProgress,
    [range[0], range[1], range[2]],
    [0, 0.35, isLast ? 0.35 : 0]
  );

  return (
    <motion.div
      style={{ opacity }}
      className="absolute inset-0 bg-cover bg-center"
      aria-hidden
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
    </motion.div>
  );
}

function ChapterPanel({
  chapter,
  scrollYProgress,
  range,
  isLast,
}: {
  chapter: (typeof chapters)[0];
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  range: [number, number, number];
  isLast: boolean;
}) {
  const opacity = useTransform(
    scrollYProgress,
    [range[0], range[1], range[2]],
    [0, 1, isLast ? 1 : 0]
  );
  const y = useTransform(
    scrollYProgress,
    [range[0], range[1], range[2]],
    [48, 0, isLast ? 0 : -48]
  );
  const scale = useTransform(
    scrollYProgress,
    [range[0], range[1], range[2]],
    [0.96, 1, isLast ? 1 : 0.96]
  );

  return (
    <motion.article
      style={{ opacity, y, scale }}
      className="absolute inset-0 flex flex-col justify-center"
    >
      <span className="text-[10px] font-semibold uppercase tracking-[0.45em] text-brand">
        Acte {chapter.index}
      </span>
      <h3 className="mt-4 font-serif text-4xl font-medium text-foreground sm:text-5xl md:text-6xl">
        {chapter.title}
      </h3>
      <p className="mt-2 font-serif text-xl italic text-foreground-soft sm:text-2xl">
        {chapter.subtitle}
      </p>
      <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
        {chapter.body}
      </p>
    </motion.article>
  );
}
