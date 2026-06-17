import type { Metadata, Viewport } from "next";
import { Archivo, Cormorant_Garamond } from "next/font/google";
import AppShell from "@/components/layout/AppShell";
import SmoothScroll from "@/components/ui/SmoothScroll";
import OfflineDetector from "@/components/ui/OfflineDetector";
import { cn } from "@/lib/utils";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#080b12",
};

export const metadata: Metadata = {
  title: {
    default: "GHINEL — Culture & technologie",
    template: "%s · GHINEL",
  },
  description:
    "GHINEL conçoit des expériences culturelles et des infrastructures numériques pour préserver et diffuser le patrimoine africain.",
  openGraph: {
    title: "GHINEL",
    description:
      "Infrastructure culturelle et technologique pour l'Afrique et le monde.",
    type: "website",
    locale: "fr_FR",
    siteName: "GHINEL",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={cn("dark", archivo.variable)}>
      <body
        className={cn(
          archivo.className,
          cormorant.variable,
          "bg-bg font-sans text-foreground antialiased"
        )}
      >
        <SmoothScroll>
          <AppShell>{children}</AppShell>
        </SmoothScroll>
        <OfflineDetector />
      </body>
    </html>
  );
}
