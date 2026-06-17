"use client";

import { motion } from "framer-motion";
import { Globe2, History, MessageCircle, BookOpen, type LucideIcon } from "lucide-react";
import { easeCinematic } from "@/lib/motion";
import SectionLabel from "@/components/ui/SectionLabel";

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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: easeCinematic }}
      className="card-surface p-6 sm:p-7"
    >
      <div className="flex size-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
        <Icon className="size-5 text-brand" strokeWidth={1.5} />
      </div>
      <h3 className="mt-5 font-medium text-foreground">{item.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {item.desc}
      </p>
    </motion.div>
  );
}

export default function WhyItMatters() {
  return (
    <section className="relative overflow-hidden border-y border-white/10">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 45%, color-mix(in srgb, var(--brand) 11%, transparent), transparent 68%)",
        }}
        aria-hidden
      />

      <div className="container-wide relative z-10 section-y">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionLabel>Notre approche</SectionLabel>
            <h2
              id="why-it-matters-heading"
              className="heading-section mt-4 font-serif font-medium text-foreground"
            >
              Nous ne modifions pas l&apos;histoire.
              <br />
              <span className="text-gradient">Nous changeons la manière dont vous la vivez.</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Des solutions numériques innovantes pour rendre l&apos;histoire,
              la culture et les savoirs africains accessibles aux générations
              d&apos;aujourd&apos;hui et de demain.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
            {benefits.map((item, i) => (
              <BenefitCard key={item.title} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
