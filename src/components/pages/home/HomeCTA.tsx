import Link from "next/link";

export default function HomeCTA() {
  return (
    <section className="bg-bg-elevated">
      <div className="container-wide section-y">
        <div className="card-surface flex flex-col items-start justify-between gap-8 p-8 sm:flex-row sm:items-center sm:p-12">
          <div className="max-w-xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand">
              Collaboration
            </p>
            <h2 className="mt-3 font-serif text-2xl font-medium text-foreground sm:text-3xl">
              Bâtissons ensemble le futur du patrimoine africain.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Investisseurs, institutions, porteurs de projets — construisons
              quelque chose de durable ensemble.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex min-h-11 shrink-0 items-center rounded-full bg-foreground px-7 text-sm font-semibold text-on-brand transition-colors hover:bg-brand"
          >
            Nous contacter
          </Link>
        </div>
      </div>
    </section>
  );
}
