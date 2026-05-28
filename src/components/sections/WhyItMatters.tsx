"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/motion/Reveal";
import TextReveal from "@/components/motion/TextReveal";
import CinematicAtmosphere from "@/components/narrative/CinematicAtmosphere";
import SectionLabel from "@/components/ui/SectionLabel";
import { stagger, ease, easeCinematic } from "@/lib/motion";

const reasons = [
  {
    stat: "< 2%",
    title: "de présence digitale mondiale",
    body: "L'Afrique produit une part immense de la culture planétaire — et reste quasi invisible dans l'écosystème numérique. Ce n'est pas un écart. C'est une injustice.",
  },
  {
    stat: "1",
    title: "génération pour agir",
    body: "Manuscrits, langues, traditions orales — chaque jour sans action, c'est une bibliothèque qui brûle en silence.",
  },
  {
    stat: "∞",
    title: "d'identités à préserver",
    body: "Un continent, mille civilisations. Les perdre, c'est appauvrir l'humanité entière — pour toujours.",
  },
];

const impacts = [
  "Réactiver la mémoire avant qu'elle ne s'efface",
  "Donner aux créateurs une scène mondiale",
  "Connecter les générations par l'immersion",
  "Construire l'infrastructure culturelle du futur",
  "Rendre le patrimoine accessible partout",
];

export default function WhyItMatters() {
  return (
    <CinematicAtmosphere
      as="section"
      id="why"
      image="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1600&auto=format&fit=crop&q=80"
      imageOpacity={0.08}
      variant="void"
      className="section-padding relative border-t border-white/[0.06]"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <Reveal>
              <SectionLabel>Chapitre III — L&apos;urgence</SectionLabel>
            </Reveal>
            <TextReveal
              as="h2"
              text="Perdre une histoire, c'est perdre une part de nous-mêmes."
              className="heading-section mt-5 font-serif font-medium text-foreground text-balance"
            />
          </div>
          <Reveal delay={0.1}>
            <p className="text-base leading-relaxed text-foreground-soft sm:text-lg">
              Ce n&apos;est pas de la nostalgie. C&apos;est de la responsabilité
              — envers ceux qui nous ont précédés, et ceux qui n&apos;ont pas
              encore parlé.
            </p>
          </Reveal>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
          className="mt-14 grid gap-px overflow-hidden rounded-xl border border-white/10 bg-surface md:grid-cols-3"
        >
          {reasons.map((item, i) => (
            <motion.div
              key={item.title}
              variants={{
                hidden: { opacity: 0, y: 28 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.9, delay: i * 0.1, ease: easeCinematic },
                },
              }}
              className="flex flex-col justify-between bg-bg-elevated/80 p-7 sm:p-9"
            >
              <span className="font-serif text-5xl font-medium text-gradient sm:text-6xl">
                {item.stat}
              </span>
              <div className="mt-10">
                <h3 className="font-serif text-xl font-medium text-foreground sm:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {item.body}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-10 lg:items-start">
          <Reveal className="lg:col-span-5">
            <p className="heading-chapter font-serif font-medium leading-none text-foreground/15">
              Pourquoi
              <br />
              <span className="text-gradient">maintenant.</span>
            </p>
          </Reveal>
          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="space-y-0 lg:col-span-7"
          >
            {impacts.map((line, i) => (
              <motion.li
                key={line}
                variants={{
                  hidden: { opacity: 0, x: 20 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.75, delay: i * 0.07, ease },
                  },
                }}
                className="flex items-start gap-5 border-b border-white/[0.06] py-5"
              >
                <span className="mt-2 font-serif text-lg text-brand/80" aria-hidden>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-base text-foreground sm:text-lg">{line}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </CinematicAtmosphere>
  );
}
