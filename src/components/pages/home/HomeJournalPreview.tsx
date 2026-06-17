"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { journalPosts } from "@/lib/content";
import { ease } from "@/lib/motion";
import SectionLabel from "@/components/ui/SectionLabel";
import PremiumButton from "@/components/ui/PremiumButton";

export default function HomeJournalPreview() {
  const featured = journalPosts.slice(0, 3);

  return (
    <section className="hidden border-b border-white/10 bg-section lg:block">
      <div className="container-wide section-y">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionLabel>Blog</SectionLabel>
            <h2 className="heading-section mt-4 font-serif font-medium text-foreground">
              Récits, recherches et actualités.
            </h2>
          </div>
          <PremiumButton href="/blog" variant="ghost" arrow>
            Voir tout le blog
          </PremiumButton>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.06, ease }}
            >
              <a href={`/blog#${post.slug}`} className="group block">
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-white/10">
                  <Image
                    src={post.image}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <p className="mt-4 text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                  {post.category} · {post.date}
                </p>
                <h3 className="mt-2 font-medium text-foreground transition-colors group-hover:text-brand">
                  {post.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                  {post.excerpt}
                </p>
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
