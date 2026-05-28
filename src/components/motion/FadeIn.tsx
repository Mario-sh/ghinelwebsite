"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { easeCinematic } from "@/lib/motion";
import { cn } from "@/lib/utils";

type FadeInProps = HTMLMotionProps<"div"> & {
  delay?: number;
  duration?: number;
  y?: number;
};

export default function FadeIn({
  children,
  className,
  delay = 0,
  duration = 0.9,
  y = 24,
  ...props
}: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration, delay, ease: easeCinematic }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
