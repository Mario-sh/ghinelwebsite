"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type PremiumButtonProps = {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "outline";
  className?: string;
};

export default function PremiumButton({
  href,
  onClick,
  children,
  variant = "primary",
  className,
}: PremiumButtonProps) {
  const base = cn(
    "group relative inline-flex min-h-12 items-center justify-center gap-3 overflow-hidden rounded-full px-8 py-3.5 text-sm font-semibold tracking-wide transition-colors sm:px-10 sm:py-4",
    variant === "primary" &&
      "bg-white text-on-brand hover:bg-brand hover:text-on-brand",
    variant === "ghost" &&
      "text-foreground/90 hover:text-brand",
    variant === "outline" &&
      "border border-white/15 text-foreground/90 hover:border-brand/50 hover:text-brand",
    className
  );

  const inner = (
    <>
      <span className="relative z-10">{children}</span>
      {variant === "primary" && (
        <motion.span
          className="relative z-10 inline-block transition-transform duration-300 group-hover:translate-x-0.5"
          aria-hidden
        >
          →
        </motion.span>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={base}>
        {inner}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={base}>
      {inner}
    </button>
  );
}
