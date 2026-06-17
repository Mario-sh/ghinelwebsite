"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { easeCinematic } from "@/lib/motion";
import { cn } from "@/lib/utils";

const PANEL_COUNT = 3;
const TRACK_WIDTH_VW = PANEL_COUNT * 100;

type Slide = {
  image: string;
  label: string;
  title: string;
  description: string;
};

const slides: Slide[] = [
  {
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&auto=format&fit=crop&q=80",
    label: "IA & Mémoire",
    title: "KONDO — Dialogue avec l'histoire",
    description:
      "Une expérience conversationnelle pour interagir avec les grandes figures de l'histoire africaine. Posez vos questions, découvrez leurs récits.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1920&auto=format&fit=crop&q=80",
    label: "Bibliothèque",
    title: "PAPYRUS — Lire le patrimoine",
    description:
      "Une bibliothèque numérique interactive qui rend les œuvres, récits et savoirs africains accessibles grâce à une expérience de lecture moderne.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&auto=format&fit=crop&q=80",
    label: "Mission",
    title: "Sauvegarder. Célébrer. Transmettre.",
    description:
      "Utiliser la puissance de la technologie pour conserver l'héritage culturel africain, le rendre interactif et universellement accessible.",
  },
];

function SlideText({
  label,
  title,
  description,
  className,
}: Pick<Slide, "label" | "title" | "description"> & { className?: string }) {
  return (
    <div className={cn("max-w-xl", className)}>
      <div className="overflow-hidden">
        <motion.p
          initial={{ y: "100%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: easeCinematic }}
          className="text-[11px] font-semibold uppercase tracking-[0.35em] text-brand"
        >
          {label}
        </motion.p>
      </div>
      <div className="mt-4 overflow-hidden">
        <motion.h3
          initial={{ y: "100%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.85, delay: 0.08, ease: easeCinematic }}
          className="font-serif text-3xl font-medium leading-tight text-foreground sm:text-4xl md:text-5xl"
        >
          {title}
        </motion.h3>
      </div>
      <div className="mt-5 overflow-hidden">
        <motion.p
          initial={{ y: "100%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.85, delay: 0.16, ease: easeCinematic }}
          className="text-base leading-relaxed text-foreground/75 sm:text-lg"
        >
          {description}
        </motion.p>
      </div>
    </div>
  );
}

function SlidePanel({ slide }: { slide: Slide }) {
  return (
    <article className="relative h-full w-screen shrink-0 overflow-hidden">
      <Image
        src={slide.image}
        alt=""
        fill
        priority={false}
        className="object-cover mix-blend-luminosity"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-bg-deep/55" aria-hidden />
      <div
        className="absolute inset-0 bg-gradient-to-r from-bg-deep/90 via-bg-deep/40 to-transparent"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,color-mix(in_srgb,var(--brand)_12%,transparent),transparent_60%)]"
        aria-hidden
      />

      <div className="relative z-10 flex h-full items-end">
        <div className="container-wide w-full pb-16 pt-24 sm:pb-20 md:pb-24">
          <SlideText
            label={slide.label}
            title={slide.title}
            description={slide.description}
          />
        </div>
      </div>
    </article>
  );
}

export default function Immersive() {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${((PANEL_COUNT - 1) / PANEL_COUNT) * 100}%`]
  );

  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={containerRef}
      id="immersive"
      className="relative h-[300vh] bg-bg-deep"
      aria-label="Immersive horizontal scroll"
    >
      <div className="sticky top-0 h-svh w-full overflow-hidden">
        <motion.div
          className="flex h-full"
          style={{ x, width: `${TRACK_WIDTH_VW}vw` }}
        >
          {slides.map((slide) => (
            <SlidePanel key={slide.label} slide={slide} />
          ))}
        </motion.div>

        {/* Progress indicator */}
        <div className="pointer-events-none absolute inset-x-0 bottom-8 z-20 px-6 sm:bottom-10">
          <div className="container-wide flex items-center gap-4">
            <div className="h-px flex-1 overflow-hidden bg-white/10">
              <motion.div
                className="h-full bg-brand"
                style={{ width: progressWidth }}
              />
            </div>
            <span className="shrink-0 font-mono text-[10px] tabular-nums tracking-widest text-muted-foreground">
              Scroll
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
