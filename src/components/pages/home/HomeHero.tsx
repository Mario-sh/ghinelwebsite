"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ease } from "@/lib/motion";

export default function HomeHero() {
  return (
    <section className="relative flex min-h-svh items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0" aria-hidden>
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1920&auto=format&fit=crop&q=80"
          className="absolute inset-0 h-full w-full object-cover opacity-60"
          onError={(e) => { e.currentTarget.style.display = "none" }}
        >
          <source src="/herovideo.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-bg/40 via-bg/60 to-bg/80" />
      </div>

      <div className="container-wide relative z-10 px-4 text-center sm:px-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="text-[11px] font-semibold uppercase tracking-[0.25em] text-brand/80"
        >
          GHINEL
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease }}
          className="mx-auto mt-4 max-w-5xl font-serif text-[clamp(2.2rem,8vw,5rem)] font-medium leading-[1.05] tracking-tight text-foreground"
        >
          Nous construisons la mémoire
          <br />
          <span className="text-gradient">numérique de l&apos;Afrique.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
          className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-foreground/60 sm:text-base"
        >
          GHINEL crée des solutions numériques innovantes pour rendre
          l&apos;histoire, la culture et les savoirs africains accessibles
          à tous.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.32, ease }}
          className="mt-8"
        >
          <Link
            href="/solutions"
            className="group inline-flex min-h-11 items-center gap-2 rounded-full bg-foreground px-7 text-sm font-semibold text-on-brand transition-all hover:bg-brand hover:scale-105 active:scale-95"
          >
            Découvrir GHINEL
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
