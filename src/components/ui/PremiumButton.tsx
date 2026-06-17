"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type PremiumButtonProps = {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "brand" | "outline" | "ghost";
  className?: string;
  arrow?: boolean;
};

export default function PremiumButton({
  href,
  onClick,
  children,
  variant = "primary",
  className,
  arrow,
}: PremiumButtonProps) {
  const base = cn(
    "group inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-7 text-sm font-semibold transition-all",
    variant === "primary" &&
      "bg-foreground text-on-brand hover:bg-brand hover:scale-105 active:scale-95",
    variant === "brand" &&
      "bg-brand text-on-brand hover:bg-brand/90 hover:scale-105 active:scale-95",
    variant === "outline" &&
      "border border-white/15 text-foreground hover:border-white/40 hover:bg-white/5",
    variant === "ghost" &&
      "text-muted-foreground hover:text-foreground",
    className
  );

  const content = (
    <>
      {children}
      {arrow && <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={base}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={base}>
      {content}
    </button>
  );
}
