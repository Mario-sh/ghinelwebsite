import Link from "next/link";

export default function HomeCTA() {
  return (
    <section className="bg-section-brand">
      <div className="container-wide section-y">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div className="max-w-xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-on-brand/70">
              Collaboration
            </p>
            <h2 className="mt-3 font-serif text-2xl font-medium text-on-brand sm:text-3xl">
              Bâtissons ensemble le futur du patrimoine africain.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-on-brand/80 sm:text-base">
              Investisseurs, institutions, porteurs de projets — construisons
              quelque chose de durable ensemble.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex min-h-11 shrink-0 items-center rounded-full bg-on-brand px-7 text-sm font-semibold text-brand transition-all hover:scale-105 active:scale-95"
          >
            Nous contacter
          </Link>
        </div>
      </div>
    </section>
  );
}
