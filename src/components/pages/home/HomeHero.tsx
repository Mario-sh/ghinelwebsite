"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ease } from "@/lib/motion";

export default function HomeHero() {
  return (
    <section className="page-top-offset relative overflow-hidden border-b border-white/[0.06]">
      <div className="absolute inset-0 z-0" aria-hidden>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.18]"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1920&auto=format&fit=crop&q=80)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-deep/40 via-bg-deep/90 to-bg-deep" />
      </div>

      <div className="container-wide relative z-10 section-y">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-10">
          <div className="lg:col-span-8">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
              className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand"
            >
              Culture & technologie · Afrique
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.08, ease }}
              className="heading-display mt-5 font-serif font-medium text-foreground"
            >
              L&apos;infrastructure culturelle
              <br />
              <span className="text-gradient">pour le monde.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.18, ease }}
              className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              GHINEL conçoit des expériences immersives, des archives numériques
              et des plateformes pour préserver le patrimoine africain et
              connecter créateurs, institutions et publics internationaux.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.28, ease }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Link
                href="/culture"
                className="inline-flex min-h-11 items-center rounded-full bg-foreground px-6 text-sm font-semibold text-on-brand transition-colors hover:bg-brand"
              >
                Découvrir nos expériences
              </Link>
              <Link
                href="/contact"
                className="inline-flex min-h-11 items-center rounded-full border border-white/15 px-6 text-sm font-medium text-foreground transition-colors hover:border-white/30"
              >
                Partenariats
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease }}
            className="grid grid-cols-3 gap-4 border-t border-white/[0.08] pt-8 lg:col-span-4 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0"
          >
            {[
              { value: "12k+", label: "Œuvres archivées" },
              { value: "50+", label: "Partenaires" },
              { value: "8", label: "Pays" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-2xl font-medium text-foreground sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-[11px] leading-snug text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
