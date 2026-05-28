"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ease } from "@/lib/motion";

export default function HomeExperiencePreview() {
  return (
    <section className="border-b border-white/[0.06] bg-bg-subtle">
      <div className="container-wide section-y">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease }}
            className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/[0.08]"
          >
            <Image
              src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&auto=format&fit=crop&q=80"
              alt="Patrimoine culturel africain"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-deep/80 via-transparent to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease }}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand">
              Expériences
            </p>
            <h2 className="heading-section mt-4 font-serif font-medium text-foreground">
              Des interfaces qui rendent la culture tangible.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Galeries immersives, parcours interactifs et outils de
              médiation — conçus pour musées, festivals et marques qui
              souhaitent une présence digitale à la hauteur de leur ambition.
            </p>
            <Link
              href="/culture"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-brand"
            >
              Explorer les expériences
              <ArrowRight className="size-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
