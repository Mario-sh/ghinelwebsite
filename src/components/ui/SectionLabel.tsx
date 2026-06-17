import { cn } from "@/lib/utils";

type SectionLabelProps = {
  children: React.ReactNode;
  variant?: "pill" | "serif" | "relaxed";
  className?: string;
};

export default function SectionLabel({ children, variant = "pill", className }: SectionLabelProps) {
  return (
    <p
      className={cn(
        variant === "pill" &&
          "text-[11px] font-semibold uppercase tracking-[0.22em] text-brand",
        variant === "serif" &&
          "font-serif text-base font-medium italic text-brand",
        variant === "relaxed" &&
          "text-xs font-medium uppercase tracking-[0.15em] text-brand",
        className
      )}
    >
      {children}
    </p>
  );
}
