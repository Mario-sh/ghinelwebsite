import Products from "@/components/Products";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ProduitsPage() {
  return (
    <main className="min-h-screen pt-20">
      <Navbar />
      <Products />
      <Footer />
    </main>
  );
}
