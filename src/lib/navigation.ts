export const mainNav = [
  { href: "/", label: "Accueil" },
  { href: "/solutions", label: "Solutions" },
  { href: "/about", label: "Pourquoi GHINEL" },
  { href: "/contact", label: "Collaboration" },
  { href: "/journal", label: "Journal" },
] as const;

export const footerNav = [
  { href: "/solutions", label: "Solutions" },
  { href: "/about", label: "Pourquoi GHINEL" },
  { href: "/contact", label: "Collaboration" },
  { href: "/journal", label: "Journal" },
  { href: "/equipe", label: "Équipe" },
] as const;

export type NavHref = (typeof mainNav)[number]["href"];
