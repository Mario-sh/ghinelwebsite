import Products from "@/components/Products";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ProduitsPage() {
  return (
    <main className="page-top-offset min-h-screen">
      <Navbar />
      <Products />
      <Footer />
    </main>
  );
}
