export const ease = [0.16, 1, 0.3, 1] as const;

/** Slow, deliberate — chapter reveals */
export const easeCinematic = [0.22, 1, 0.36, 1] as const;

/** Weighted entrance — emotional beats */
export const easeDramatic = [0.65, 0, 0.35, 1] as const;

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.1, ease: easeCinematic },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1, ease: easeCinematic },
  },
};

export const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.06 },
  },
};

export const lineGrow = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 1.4, ease: easeCinematic },
  },
};

export const cinematicReveal = {
  hidden: { opacity: 0, y: 56, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.2, ease: easeCinematic },
  },
};
