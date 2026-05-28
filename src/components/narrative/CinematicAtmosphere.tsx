"use client";

import { cn } from "@/lib/utils";

type CinematicAtmosphereProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  as?: "div" | "section";
  /** Background image URL for parallax layer */
  image?: string;
  imageOpacity?: number;
  variant?: "default" | "warm" | "deep" | "ember" | "void";
  vignette?: boolean;
  grain?: boolean;
};

const variantGradients = {
  default:
    "bg-[radial-gradient(ellipse_120%_80%_at_50%_-20%,color-mix(in_srgb,var(--brand)_14%,transparent),transparent_55%)]",
  warm: "bg-[radial-gradient(ellipse_100%_70%_at_80%_20%,color-mix(in_srgb,var(--ember)_18%,transparent),transparent_50%)]",
  deep: "bg-[radial-gradient(ellipse_90%_60%_at_20%_80%,color-mix(in_srgb,var(--depth-glow)_25%,transparent),transparent_55%)]",
  ember:
    "bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,color-mix(in_srgb,var(--brand-deep)_20%,transparent),transparent_60%)]",
  void: "bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,color-mix(in_srgb,var(--depth-mid)_30%,transparent),transparent_70%)]",
};

export default function CinematicAtmosphere({
  children,
  className,
  id,
  as: Tag = "div",
  image,
  imageOpacity = 0.22,
  variant = "default",
  vignette = true,
  grain = false,
}: CinematicAtmosphereProps) {
  return (
    <Tag id={id} className={cn("relative overflow-hidden", className)}>
      {image && (
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${image})`,
            opacity: imageOpacity,
          }}
          aria-hidden
        />
      )}
      <div
        className={cn("pointer-events-none absolute inset-0", variantGradients[variant])}
        aria-hidden
      />
      {vignette && (
        <div className="film-vignette pointer-events-none absolute inset-0" aria-hidden />
      )}
      {grain && (
        <div className="film-grain pointer-events-none absolute inset-0 opacity-[0.04]" aria-hidden />
      )}
      <div className="relative z-10">{children}</div>
    </Tag>
  );
}
