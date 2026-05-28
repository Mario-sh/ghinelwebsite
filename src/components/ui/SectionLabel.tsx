import { cn } from "@/lib/utils";

type SectionLabelProps = {
  children: React.ReactNode;
  className?: string;
};

export default function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <p
      className={cn(
        "text-[10px] font-semibold uppercase tracking-[0.4em] text-brand sm:text-xs",
        className
      )}
    >
      {children}
    </p>
  );
}
