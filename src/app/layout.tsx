import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import AppShell from "@/components/layout/AppShell";
import SmoothScroll from "@/components/ui/SmoothScroll";
import OfflineDetector from "@/components/ui/OfflineDetector";
import { cn } from "@/lib/utils";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
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
    <html lang="fr" className={cn("dark", inter.variable)}>
      <body
        className={cn(
          inter.className,
          playfair.variable,
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
