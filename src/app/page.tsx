import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import CorePillars from "@/components/CorePillars";
import CulturalTimeline from "@/components/CulturalTimeline";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Mission />
      <CorePillars />
      <CulturalTimeline />
      
      {/* Immersive Divider */}
      <section className="py-20 flex justify-center">
        <div className="w-px h-64 bg-gradient-to-b from-primary/50 via-accent/30 to-transparent" />
      </section>

      <Footer />
    </main>
  );
}
