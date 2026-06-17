"use client";

import { motion } from "framer-motion";
import { MessageCircle, BookOpen } from "lucide-react";
import { easeCinematic } from "@/lib/motion";
import Reveal from "@/components/motion/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import PremiumButton from "@/components/ui/PremiumButton";

const products = [
  {
    name: "KONDO",
    tag: "Version 1 disponible",
    tagColor: "border-brand/30 text-brand",
    icon: MessageCircle,
    url: "https://kondo-frontend.onrender.com/",
    subtitle: "Discutez avec les grandes figures de l'histoire africaine.",
    body: "KONDO est une expérience conversationnelle permettant d'interagir avec des personnages historiques, légendaires et emblématiques du continent africain. Posez vos questions, parlez de vive voix, découvrez leurs histoires, leurs idées et les événements ayant marqué leur époque.",
  },
  {
    name: "PAPYRUS",
    tag: "En cours de développement",
    tagColor: "border-white/10 text-muted-foreground",
    icon: BookOpen,
    subtitle: "Une bibliothèque numérique interactive pensée pour le patrimoine littéraire africain.",
    body: "PAPYRUS rend les œuvres, récits et savoirs africains plus accessibles grâce à une expérience de lecture moderne, interactive et adaptée aux besoins de la population. Une nouvelle manière de découvrir, préserver et transmettre la richesse littéraire du continent.",
  },
];

export default function SolutionsContent() {
  return (
    <>
      <section className="border-b border-white/10 bg-bg">
        <div className="container-wide section-y">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <SectionLabel variant="serif">L&apos;Approche GHINEL</SectionLabel>
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
                className="card-surface p-8 sm:p-10"
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

      <section className="bg-bg-alt">
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
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl"
                >
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
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">
                      {product.subtitle}
                    </p>
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {product.body}
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                      {product.url && (
                        <a
                          href={product.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex min-h-11 items-center gap-2 rounded-full bg-foreground px-7 text-sm font-semibold text-on-brand transition-all hover:bg-brand hover:scale-105 active:scale-95"
                        >
                          Essayer {product.name}
                        </a>
                      )}
                      <PremiumButton href="/contact" variant="ghost" arrow>
                        Rejoignez la liste d&apos;attente
                      </PremiumButton>
                    </div>
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
