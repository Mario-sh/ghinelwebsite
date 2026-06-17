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
        "page-top-offset border-b border-white/10 bg-bg",
        className
      )}
    >
      <div className="container-wide section-y">
        <div className="max-w-4xl">
          {label && (
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand/90">
              {label}
            </p>
          )}
          <h1
            className={cn(
              "font-serif text-[clamp(2.25rem,8vw,4.5rem)] font-medium leading-[1.08] tracking-tight text-foreground",
              label && "mt-5"
            )}
          >
            {title}
          </h1>
          {description && (
            <p className="mt-6 max-w-2xl text-[clamp(1rem,3vw,1.25rem)] leading-relaxed text-muted-foreground">
              {description}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
