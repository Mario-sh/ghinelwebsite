import Manifeste from "@/components/Manifeste";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ManifestePage() {
  return (
    <main className="page-top-offset min-h-screen">
      <Navbar />
      <Manifeste />
      <Footer />
    </main>
  );
}
