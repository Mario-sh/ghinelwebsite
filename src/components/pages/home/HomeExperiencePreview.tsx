"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ease } from "@/lib/motion";
import SectionLabel from "@/components/ui/SectionLabel";
import PremiumButton from "@/components/ui/PremiumButton";

export default function HomeExperiencePreview() {
  return (
    <section className="border-b border-white/10 bg-section-alt">
      <div className="container-wide section-y">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease }}
            className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10"
          >
            <Image
              src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&auto=format&fit=crop&q=80"
              alt="Patrimoine culturel africain"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-alt/80 via-transparent to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease }}
          >
            <SectionLabel>Solutions</SectionLabel>
            <h2 className="heading-section mt-4 font-serif font-medium text-foreground">
              Des produits numériques au service de la mémoire africaine.
            </h2>
            <PremiumButton href="/solutions" variant="ghost" arrow className="mt-8">
              Découvrir nos solutions
            </PremiumButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
