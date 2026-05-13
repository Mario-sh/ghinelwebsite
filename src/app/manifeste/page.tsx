import Manifeste from "@/components/Manifeste";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ManifestePage() {
  return (
    <main className="min-h-screen pt-20">
      <Navbar />
      <Manifeste />
      <Footer />
    </main>
  );
}
