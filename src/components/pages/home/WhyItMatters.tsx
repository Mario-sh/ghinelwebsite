"use client";

import { motion } from "framer-motion";
import { Globe2, History, MessageCircle, BookOpen, type LucideIcon } from "lucide-react";
import FadeIn from "@/components/motion/FadeIn";
import { easeCinematic } from "@/lib/motion";

type Benefit = {
  title: string;
  desc: string;
  icon: LucideIcon;
};

const benefits: Benefit[] = [
  {
    title: "IA conversationnelle",
    desc: "KONDO permet d'interagir avec les grandes figures de l'histoire africaine — posez vos questions, découvrez leurs récits.",
    icon: MessageCircle,
  },
  {
    title: "Bibliothèque numérique",
    desc: "PAPYRUS rend les œuvres, récits et savoirs africains accessibles grâce à une expérience de lecture moderne et interactive.",
    icon: BookOpen,
  },
  {
    title: "Patrimoine préservé",
    desc: "Des traditions ancestrales aux manuscrits rares — nous structurons et numérisons la mémoire africaine pour les générations futures.",
    icon: History,
  },
  {
    title: "Impact mondial",
    desc: "Des solutions conçues pour le continent africain, déployées à l'échelle internationale — pour que la mémoire africaine rayonne.",
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
      className="group bg-bg p-8 backdrop-blur-md transition-colors duration-500 hover:bg-bg/90 sm:p-10 md:p-12"
    >
      <div className="flex size-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-transform duration-500 group-hover:scale-110">
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
      className="relative overflow-hidden border-y border-white/10 py-32 md:py-48"
      aria-labelledby="why-it-matters-heading"
    >
      <div className="absolute inset-0 bg-bg" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 45%, color-mix(in srgb, var(--brand) 11%, transparent), transparent 68%)",
        }}
        aria-hidden
      />

      <div className="container-wide relative z-10">
        <header className="mx-auto max-w-3xl text-center">
          <FadeIn delay={0} y={16}>
            <div
              className="mx-auto mb-8 flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5"
              aria-hidden
            >
              <span className="size-2 rounded-full bg-brand shadow-[0_0_12px_color-mix(in_srgb,var(--brand)_60%,transparent)]" />
            </div>
          </FadeIn>

          <FadeIn delay={0.1} y={20}>
            <h2
              id="why-it-matters-heading"
              className="font-serif text-4xl font-medium leading-[1.08] tracking-tight text-foreground md:text-5xl lg:text-6xl"
            >
              Nous ne modifions pas l&apos;histoire.
              <br />
              <span className="text-gradient">Nous changeons la manière dont vous la vivez.</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.35} y={16} className="mt-6 md:mt-8">
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              Des solutions numériques innovantes pour rendre l&apos;histoire,
              la culture et les savoirs africains accessibles aux générations
              d&apos;aujourd&apos;hui et de demain.
            </p>
          </FadeIn>
        </header>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 1, delay: 0.2, ease: easeCinematic }}
          className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-3xl bg-white/5 md:mt-20 md:grid-cols-2"
        >
          {benefits.map((item, i) => (
            <BenefitCard key={item.title} item={item} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
