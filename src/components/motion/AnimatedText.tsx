"use client";

import { motion, useReducedMotion } from "framer-motion";
import { easeCinematic } from "@/lib/motion";
import { cn } from "@/lib/utils";

type AnimatedTextProps = {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  id?: string;
  delay?: number;
  /** Stagger between words in seconds */
  stagger?: number;
};

export default function AnimatedText({
  text,
  className,
  as: Tag = "p",
  id,
  delay = 0,
  stagger: staggerDelay = 0.045,
}: AnimatedTextProps) {
  const words = text.split(" ");
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <Tag id={id} className={className}>
        {text}
      </Tag>
    );
  }

  return (
    <Tag id={id} className={cn(className)}>
      <span className="sr-only">{text}</span>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ opacity: 0, y: "100%" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 0.65,
              delay: delay + i * staggerDelay,
              ease: easeCinematic,
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
