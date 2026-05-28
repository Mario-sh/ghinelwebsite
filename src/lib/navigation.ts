export const mainNav = [
  { href: "/", label: "Accueil" },
  { href: "/about", label: "À propos" },
  { href: "/culture", label: "Expériences" },
  { href: "/creators", label: "Créateurs" },
  { href: "/journal", label: "Journal" },
] as const;

export const footerNav = [
  { href: "/about", label: "À propos" },
  { href: "/culture", label: "Expériences" },
  { href: "/creators", label: "Créateurs" },
  { href: "/journal", label: "Journal" },
  { href: "/equipe", label: "Équipe" },
  { href: "/contact", label: "Partenariats" },
] as const;

export type NavHref = (typeof mainNav)[number]["href"];
