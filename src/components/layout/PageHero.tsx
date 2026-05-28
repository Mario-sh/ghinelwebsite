import { cn } from "@/lib/utils";

type PageHeroProps = {
  label?: string;
  title: React.ReactNode;
  description?: string;
  className?: string;
  children?: React.ReactNode;
};

export default function PageHero({
  label,
  title,
  description,
  className,
  children,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "page-top-offset border-b border-white/[0.06] bg-bg",
        className
      )}
    >
      <div className="container-wide section-y">
        <div className="max-w-3xl">
          {label && (
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand">
              {label}
            </p>
          )}
          <h1
            className={cn(
              "font-serif text-4xl font-medium leading-[1.08] tracking-tight text-foreground sm:text-5xl md:text-6xl",
              label && "mt-4"
            )}
          >
            {title}
          </h1>
          {description && (
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {description}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
