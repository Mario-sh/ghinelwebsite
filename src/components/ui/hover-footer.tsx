"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Share2,
  Heart,
  Sparkles,
  MessageCircle,
  ArrowUp,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Logo from "./Logo";

export function TextHoverEffect({
  text,
  duration,
  className,
}: {
  text: string;
  duration?: number;
  className?: string;
}) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });

  useEffect(() => {
    if (!svgRef.current) return;
    const svgRect = svgRef.current.getBoundingClientRect();
    if (svgRect.width === 0 || svgRect.height === 0) return;
    const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100;
    const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100;
    setMaskPosition({
      cx: `${cxPercentage}%`,
      cy: `${cyPercentage}%`,
    });
  }, [cursor]);

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 300 100"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
      className={cn(
        "cursor-pointer select-none uppercase text-primary",
        className
      )}
    >
      <defs>
        <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          {hovered ? (
            <>
              <stop offset="0%" stopColor="#eab308" />
              <stop offset="25%" stopColor="#ef4444" />
              <stop offset="50%" stopColor="#4ade80" />
              <stop offset="75%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="#a855f7" />
            </>
          ) : (
            <>
              <stop offset="0%" stopColor="hsl(38 92% 50%)" />
              <stop offset="100%" stopColor="hsl(45 93% 47%)" />
            </>
          )}
        </linearGradient>

        <motion.radialGradient
          id="revealMask"
          gradientUnits="userSpaceOnUse"
          r="35%"
          initial={{ cx: "50%", cy: "50%" }}
          animate={{ cx: maskPosition.cx, cy: maskPosition.cy }}
          transition={{ duration: duration ?? 0.15, ease: "easeOut" }}
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </motion.radialGradient>
        <mask id="textMask">
          <rect x="0" y="0" width="100%" height="100%" fill="url(#revealMask)" />
        </mask>
      </defs>
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.3"
        className="fill-transparent stroke-neutral-200 font-sans text-7xl font-bold dark:stroke-neutral-700"
        style={{ opacity: hovered ? 0.7 : 0 }}
      >
        {text}
      </text>
      <motion.text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.3"
        className="fill-transparent stroke-primary font-sans text-7xl font-bold"
        initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
        animate={{
          strokeDashoffset: 0,
          strokeDasharray: 1000,
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
        }}
      >
        {text}
      </motion.text>
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        stroke="url(#textGradient)"
        strokeWidth="0.3"
        mask="url(#textMask)"
        className="fill-transparent font-sans text-7xl font-bold"
      >
        {text}
      </text>
    </svg>
  );
}

export function FooterBackgroundGradient() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0"
      style={{
        background:
          "radial-gradient(125% 125% at 50% 10%, hsl(240 10% 6% / 0.92) 45%, hsl(38 92% 50% / 0.18) 100%)",
      }}
    />
  );
}

type FooterLink = { label: string; href: string; pulse?: boolean };

export default function HoverFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks: { title: string; links: FooterLink[] }[] = [
    {
      title: "Ghinel",
      links: [
        { label: "Manifeste", href: "/manifeste" },
        { label: "Produits", href: "/produits" },
        { label: "Équipe", href: "/equipe" },
        { label: "Blog", href: "/blog" },
      ],
    },
    {
      title: "Liens utiles",
      links: [
        { label: "Contact", href: "/contact" },
        { label: "Mentions légales", href: "#" },
        { label: "Confidentialité", href: "#" },
        { label: "Support", href: "/contact", pulse: true },
      ],
    },
  ];

  const contactInfo = [
    {
      icon: <Mail size={18} className="shrink-0 text-primary" />,
      text: "contact@ghinel.com",
      href: "mailto:contact@ghinel.com",
    },
    {
      icon: <Phone size={18} className="shrink-0 text-primary" />,
      text: "+229 00 00 00 00",
      href: "tel:+22900000000",
    },
    {
      icon: <MapPin size={18} className="shrink-0 text-primary" />,
      text: "Cotonou, Bénin",
    },
  ];

  const socialLinks = [
    { icon: <Globe size={20} />, label: "Site web", href: "#" },
    { icon: <Share2 size={20} />, label: "Partager", href: "#" },
    { icon: <Heart size={20} />, label: "Ghinel", href: "/" },
    { icon: <Sparkles size={20} />, label: "Culture", href: "/manifeste" },
    { icon: <MessageCircle size={20} />, label: "Contact", href: "/contact" },
  ];

  return (
    <footer
      id="contact"
      className="relative mx-3 mb-[max(0.75rem,env(safe-area-inset-bottom))] mt-8 overflow-hidden rounded-2xl border border-white/10 bg-background/40 sm:mx-6 sm:mb-6 sm:rounded-3xl"
    >
      <div className="relative z-40 mx-auto max-w-7xl p-8 sm:p-10 md:p-14">
        <div className="grid grid-cols-1 gap-10 pb-10 md:grid-cols-2 md:gap-8 lg:grid-cols-4 lg:gap-14">
          <div className="flex flex-col space-y-4">
            <Link href="/" className="flex max-w-[200px] items-center gap-2">
              <Logo width={160} height={48} className="origin-left" />
            </Link>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Bâtir le futur sur les fondations de notre passé. Startup béninoise
              au service de la mémoire et du patrimoine africain.
            </p>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="mb-4 text-base font-semibold text-white sm:mb-6 sm:text-lg">
                {section.title}
              </h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {section.links.map((link) => (
                  <li key={link.label} className="relative">
                    <Link
                      href={link.href}
                      className="transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                    {link.pulse ? (
                      <span className="absolute -right-2 top-0 inline-block size-2 animate-pulse rounded-full bg-primary" />
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="mb-4 text-base font-semibold text-white sm:mb-6 sm:text-lg">
              Contact
            </h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  {item.icon}
                  {item.href ? (
                    <a
                      href={item.href}
                      className="transition-colors hover:text-primary"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span>{item.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="my-8 border-t border-white/10" />

        <div className="flex flex-col items-center justify-between gap-6 text-sm text-muted-foreground md:flex-row">
          <div className="flex flex-wrap justify-center gap-5 md:justify-start">
            {socialLinks.map(({ icon, label, href }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className="text-gray-400 transition-colors hover:text-primary"
              >
                {icon}
              </Link>
            ))}
          </div>

          <p className="text-center md:text-left">
            © {new Date().getFullYear()} Ghinel. Tous droits réservés.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Retour en haut"
            className="flex size-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted-foreground transition-all hover:border-primary hover:text-white"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>

      <div className="-mb-24 -mt-40 hidden h-[28rem] sm:flex md:h-[30rem]">
        <TextHoverEffect text="GHINEL" className="z-50 w-full" />
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
}
