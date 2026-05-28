"use client";

import { motion } from "framer-motion";
import { Globe2, History, Radio, Users, type LucideIcon } from "lucide-react";
import AnimatedText from "@/components/motion/AnimatedText";
import FadeIn from "@/components/motion/FadeIn";
import { easeCinematic } from "@/lib/motion";
import { cn } from "@/lib/utils";

type Benefit = {
  title: string;
  desc: string;
  icon: LucideIcon;
};

const benefits: Benefit[] = [
  {
    title: "Living archives",
    desc: "Oral histories, manuscripts, and traditions — structured and preserved before they disappear from the record.",
    icon: History,
  },
  {
    title: "Global reach",
    desc: "Distribution infrastructure that puts African cultural work in front of international audiences and institutions.",
    icon: Radio,
  },
  {
    title: "Creator network",
    desc: "A growing community of artists, authors, and producers supported with tools, visibility, and fair partnerships.",
    icon: Users,
  },
  {
    title: "World-scale impact",
    desc: "Platforms built for museums, brands, and investors who need reliability, scale, and measurable cultural outcomes.",
    icon: Globe2,
  },
];

function BenefitCard({
  item,
  index,
}: {
  item: Benefit;
  index: number;
}) {
  const Icon = item.icon;

  return (
    <FadeIn
      delay={0.12 + index * 0.08}
      y={20}
      className="group bg-bg/80 p-8 backdrop-blur-md transition-colors duration-500 hover:bg-bg/90 sm:p-10 md:p-12"
    >
      <div className="flex size-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] transition-transform duration-500 group-hover:scale-110">
        <Icon className="size-5 text-brand" strokeWidth={1.5} aria-hidden />
      </div>
      <h3 className="mt-6 font-medium tracking-tight text-foreground sm:text-lg">
        {item.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
        {item.desc}
      </p>
    </FadeIn>
  );
}

export default function WhyItMatters() {
  return (
    <section
      className="relative overflow-hidden border-y border-white/[0.06] py-32 md:py-48"
      aria-labelledby="why-it-matters-heading"
    >
      {/* Base + golden radial */}
      <div className="absolute inset-0 bg-bg-deep" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 45%, color-mix(in srgb, var(--brand) 11%, transparent), transparent 68%)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 90% 50% at 50% 100%, color-mix(in srgb, var(--brand-deep) 8%, transparent), transparent 55%)",
        }}
        aria-hidden
      />

      <div className="container-wide relative z-10">
        {/* Header */}
        <header className="mx-auto max-w-3xl text-center">
          <FadeIn delay={0} y={16}>
            <div
              className="mx-auto mb-8 flex size-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.03]"
              aria-hidden
            >
              <span className="size-2 rounded-full bg-brand shadow-[0_0_12px_color-mix(in_srgb,var(--brand)_60%,transparent)]" />
            </div>
          </FadeIn>

          <AnimatedText
            as="h2"
            id="why-it-matters-heading"
            text="Beyond aesthetics. A mission of consequence."
            className={cn(
              "font-serif text-4xl font-medium leading-[1.08] tracking-tight text-foreground",
              "md:text-5xl lg:text-6xl"
            )}
            delay={0.1}
            stagger={0.055}
          />

          <FadeIn delay={0.35} y={16} className="mt-6 md:mt-8">
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              GHINEL exists to make African heritage legible, accessible, and
              economically viable in the digital age — for communities, creators,
              and partners worldwide.
            </p>
          </FadeIn>
        </header>

        {/* Bento grid */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 1, delay: 0.2, ease: easeCinematic }}
          className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-3xl bg-white/[0.08] md:mt-20 md:grid-cols-2"
        >
          {benefits.map((item, i) => (
            <BenefitCard key={item.title} item={item} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
