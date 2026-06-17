import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/layout/PageHero";
import { journalPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog",
  description: "Récits, recherches et actualités de GHINEL.",
};

export default function BlogPage() {
  return (
    <main>
      <PageHero
        label="Blog"
        title="Récits & perspectives"
        description="Recherche, production et actualités de notre équipe et de nos partenaires."
      />

      <section className="bg-bg">
        <div className="container-wide section-y-compact pb-20">
          <div className="grid gap-8 sm:grid-cols-2">
            {journalPosts.map((post) => (
              <article
                key={post.slug}
                id={post.slug}
                className="card-surface overflow-hidden scroll-mt-28"
              >
                <div className="relative aspect-[16/9]">
                  <Image
                    src={post.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <p className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                    {post.category} · {post.date}
                  </p>
                  <h2 className="mt-3 font-serif text-xl font-medium text-foreground sm:text-2xl">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {post.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
