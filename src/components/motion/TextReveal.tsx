"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ease } from "@/lib/motion";
import { cn } from "@/lib/utils";

type TextRevealProps = {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
  /** "mount" = animate on load (hero). "inView" = animate when scrolled into view. */
  trigger?: "mount" | "inView";
};

export default function TextReveal({
  text,
  className,
  as: Tag = "h2",
  delay = 0,
  trigger = "inView",
}: TextRevealProps) {
  const words = text.split(" ");
  const prefersReducedMotion = useReducedMotion();
  const animateOnMount = trigger === "mount" || prefersReducedMotion;

  return (
    <Tag className={cn("overflow-hidden", className)}>
      <span className="sr-only">{text}</span>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            initial={prefersReducedMotion ? false : { y: "110%", opacity: 0 }}
            animate={
              animateOnMount ? { y: 0, opacity: 1 } : undefined
            }
            whileInView={
              animateOnMount
                ? undefined
                : { y: 0, opacity: 1 }
            }
            viewport={{ once: true, amount: 0.15, margin: "0px 0px -40px 0px" }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.75,
              delay: prefersReducedMotion ? 0 : delay + i * 0.06,
              ease,
            }}
          >
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
