"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MessageCircle, BookOpen, ArrowRight } from "lucide-react";
import { easeCinematic, stagger } from "@/lib/motion";
import Reveal from "@/components/motion/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";

const products = [
  {
    name: "KONDO",
    tag: "Disponible bientôt",
    tagColor: "border-brand/30 text-brand",
    icon: MessageCircle,
    subtitle: "Discutez avec les grandes figures de l'histoire africaine.",
    body: "KONDO est une expérience conversationnelle permettant d'interagir avec des personnages historiques, légendaires et emblématiques du continent africain. Posez vos questions, parlez de vive voix, découvrez leurs histoires, leurs idées et les événements ayant marqué leur époque.",
    gradient: "from-amber-600/20 via-brand/10 to-transparent",
  },
  {
    name: "PAPYRUS",
    tag: "En cours de développement",
    tagColor: "border-white/10 text-foreground/60",
    icon: BookOpen,
    subtitle: "Une bibliothèque numérique interactive pensée pour le patrimoine littéraire africain.",
    body: "PAPYRUS rend les œuvres, récits et savoirs africains plus accessibles grâce à une expérience de lecture moderne, interactive et adaptée aux besoins de la population. Une nouvelle manière de découvrir, préserver et transmettre la richesse littéraire du continent.",
    gradient: "from-blue-600/20 via-indigo-500/10 to-transparent",
  },
];

export default function SolutionsContent() {
  return (
    <>
      {/* Approche GHINEL */}
      <section className="border-b border-white/[0.06] bg-bg">
        <div className="container-wide section-y">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <SectionLabel>L&apos;Approche GHINEL</SectionLabel>
              </Reveal>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: easeCinematic }}
                className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg"
              >
                La conception de nos solutions innovantes et immersives fait
                converger la recherche historique rigoureuse avec les
                technologies de pointe : l&apos;intelligence artificielle,
                l&apos;accessibilité web et la réalité virtuelle.
              </motion.p>
            </div>
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: easeCinematic }}
                className="rounded-2xl border border-white/[0.08] bg-bg-elevated p-8 sm:p-10"
              >
                <p className="font-serif text-2xl font-medium italic leading-snug text-foreground sm:text-3xl">
                  &laquo;&nbsp;Nous ne modifions pas l&apos;histoire.
                </p>
                <p className="mt-2 font-serif text-2xl font-medium italic leading-snug text-brand sm:text-3xl">
                  Nous changeons la manière dont vous la vivez.&nbsp;&raquo;
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Produits */}
      <section className="bg-bg-subtle">
        <div className="container-wide section-y">
          <Reveal>
            <SectionLabel>Nos Produits</SectionLabel>
          </Reveal>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {products.map((product, i) => {
              const Icon = product.icon;
              return (
                <motion.article
                  key={product.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: i * 0.15, ease: easeCinematic }}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-bg-elevated"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                  />
                  <div className="relative z-10 flex flex-1 flex-col p-8 sm:p-10">
                    <div className="flex items-start justify-between">
                      <div className="flex size-14 items-center justify-center rounded-xl bg-white/5 text-brand">
                        <Icon className="size-7" />
                      </div>
                      <span
                        className={`rounded-full border px-3 py-1 text-[10px] font-medium uppercase tracking-widest ${product.tagColor}`}
                      >
                        {product.tag}
                      </span>
                    </div>

                    <h3 className="mt-8 font-serif text-3xl font-medium text-foreground sm:text-4xl">
                      {product.name}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-foreground/80 sm:text-lg">
                      {product.subtitle}
                    </p>
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {product.body}
                    </p>

                    <Link
                      href="/contact"
                      className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand transition-colors hover:text-brand/80"
                    >
                      Rejoignez la liste d&apos;attente
                      <ArrowRight className="size-4" />
                    </Link>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
