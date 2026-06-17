export const mainNav = [
  { href: "/", label: "Accueil" },
  { href: "/solutions", label: "Solutions" },
  { href: "/about", label: "Pourquoi GHINEL" },
  { href: "/contact", label: "Collaboration" },
  { href: "/blog", label: "Blog" },
] as const;

export const footerNav = [
  { href: "/solutions", label: "Solutions" },
  { href: "/about", label: "Pourquoi GHINEL" },
  { href: "/contact", label: "Collaboration" },
  { href: "/blog", label: "Blog" },
  { href: "/equipe", label: "Équipe" },
] as const;

export type NavHref = (typeof mainNav)[number]["href"];
