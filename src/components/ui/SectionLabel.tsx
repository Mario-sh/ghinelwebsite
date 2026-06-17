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
        "text-label text-brand",
        variant === "pill" &&
          "text-brand",
        variant === "serif" &&
          "font-serif text-base font-medium italic tracking-normal uppercase-none",
        variant === "relaxed" &&
          "tracking-[0.15em]",
        className
      )}
    >
      {children}
    </p>
  );
}
