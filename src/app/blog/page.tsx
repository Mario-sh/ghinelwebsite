import Blog from "@/components/Blog";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BlogPage() {
  return (
    <main className="min-h-screen pt-20">
      <Navbar />
      <Blog />
      <Footer />
    </main>
  );
}
