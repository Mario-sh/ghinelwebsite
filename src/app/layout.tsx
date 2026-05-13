import type { Metadata, Viewport } from "next";
import { Playfair_Display, Geist } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/ui/SmoothScroll";
import PageTransition from "@/components/ui/PageTransition";
import Soundscape from "@/components/ui/Soundscape";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "Ghinel | L'histoire de l'Afrique réinventée par la Technologie",
  description: "Ghinel est une startup béninoise dédiée à la préservation et à la diffusion de la culture africaine à travers le numérique. Découvrez notre vision.",
  keywords: ["Ghinel", "Bénin", "Culture Africaine", "Technologie", "Histoire de l'Afrique", "Bibliothèque Numérique"],
  authors: [{ name: "Ghinel Team" }],
  openGraph: {
    title: "Ghinel | L'histoire de l'Afrique réinventée",
    description: "Nous rêvons d'un monde où chaque africain connaît son histoire.",
    type: "website",
    locale: "fr_FR",
    siteName: "Ghinel",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={cn("dark", "font-sans", geist.variable)}>
      <body className={`${geist.variable} ${playfair.variable} font-sans`}>
        <Soundscape />
        <SmoothScroll>
          <PageTransition>
            {children}
          </PageTransition>
        </SmoothScroll>
      </body>
    </html>
  );
}
