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
            <p className="text-label text-brand/90">
              {label}
            </p>
          )}
          <h1
            className={cn(
              "heading-section text-foreground",
              label && "mt-5"
            )}
          >
            {title}
          </h1>
          {description && (
            <p className="mt-6 max-w-2xl text-body-lg text-muted-foreground">
              {description}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
