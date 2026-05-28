"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { experienceDomains } from "@/lib/content";
import { ease } from "@/lib/motion";
import { cn } from "@/lib/utils";

type Domain = (typeof experienceDomains)[number];

export default function CultureExperiences() {
  const [active, setActive] = useState<Domain>(experienceDomains[0]);

  return (
    <section className="border-b border-white/[0.06] bg-bg">
      <div className="container-wide section-y">
        <div className="flex flex-wrap gap-2 border-b border-white/[0.06] pb-6">
          {experienceDomains.map((d) => (
            <button
              key={d.id}
              type="button"
              onClick={() => setActive(d)}
              className={cn(
                "rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                active.id === d.id
                  ? "bg-white/10 text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {d.label}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease }}
            >
              <h2 className="font-serif text-3xl font-medium text-foreground sm:text-4xl">
                {active.title}
              </h2>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
                {active.description}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/[0.08]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={active.image}
                  alt={active.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-deep/60 to-transparent" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
