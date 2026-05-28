"use client";

import { motion, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Reveal from "@/components/motion/Reveal";
import TextReveal from "@/components/motion/TextReveal";
import CinematicAtmosphere from "@/components/narrative/CinematicAtmosphere";
import SectionLabel from "@/components/ui/SectionLabel";
import { easeCinematic } from "@/lib/motion";

const metrics = [
  { value: 12, suffix: "k+", label: "Œuvres numérisées" },
  { value: 50, suffix: "+", label: "Partenaires culturels" },
  { value: 8, suffix: "", label: "Pays couverts" },
  { value: 4, suffix: "k+", label: "Heures d'archives" },
];

function AnimatedMetric({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const spring = useSpring(0, { stiffness: 50, damping: 22 });
  const display = useTransform(spring, (v) => Math.round(v));

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (inView) spring.set(value);
  }, [inView, spring, value]);

  return (
    <div ref={ref} className="border-l border-brand/30 pl-5 md:pl-6">
      <div className="font-serif text-4xl font-medium text-gradient sm:text-5xl md:text-6xl">
        <motion.span>{display}</motion.span>
        <span>{suffix}</span>
      </div>
      <p className="mt-2 text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
        {label}
      </p>
    </div>
  );
}

const ambitions = [
  {
    title: "Échelle mondiale",
    body: "Infrastructure pensée pour des millions — musées, plateformes, écoles, créateurs.",
  },
  {
    title: "Écosystème vivant",
    body: "Partenariats avec institutions, universités et studios — un réseau culturel en expansion.",
  },
  {
    title: "Innovation responsable",
    body: "Immersion 3D, archives intelligentes, APIs culturelles — la tech au service de l'authenticité.",
  },
];

export default function GlobalImpact() {
  return (
    <CinematicAtmosphere
      as="section"
      id="impact"
      variant="ember"
      className="section-padding relative border-t border-white/[0.06] bg-bg-elevated/40"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <Reveal>
              <SectionLabel>Chapitre V — L&apos;ambition</SectionLabel>
            </Reveal>
            <TextReveal
              as="h2"
              text="Assez grand pour le monde. Assez profond pour l'âme."
              className="heading-section mt-5 max-w-3xl font-serif font-medium text-foreground"
            />
          </div>
          <Reveal delay={0.1}>
            <p className="text-base leading-relaxed text-foreground-soft sm:text-lg">
              Pour les investisseurs : une infrastructure culturelle scalable.
              Pour les créateurs : une scène qui enfin leur ressemble.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-6">
          {metrics.map((m) => (
            <AnimatedMetric
              key={m.label}
              value={m.value}
              suffix={m.suffix}
              label={m.label}
            />
          ))}
        </div>

        <div className="narrative-rule mx-auto my-16 max-w-md" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
          className="grid gap-10 md:grid-cols-3 md:gap-8"
        >
          {ambitions.map((item) => (
            <motion.div
              key={item.title}
              variants={{
                hidden: { opacity: 0, y: 28 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: easeCinematic } },
              }}
              className="rounded-xl border border-white/[0.06] bg-surface p-7 sm:p-8"
            >
              <div className="mb-5 h-px w-10 bg-brand" />
              <h3 className="font-serif text-xl font-medium text-foreground sm:text-2xl">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {item.body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </CinematicAtmosphere>
  );
}
