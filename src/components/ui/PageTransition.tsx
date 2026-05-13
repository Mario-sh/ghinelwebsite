"use client";

/**
 * Framer AnimatePresence + route key previously forced an opacity-0 initial pass
 * and extra work on navigation; keep the tree minimal so first paint is reliable.
 */
export default function PageTransition({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
