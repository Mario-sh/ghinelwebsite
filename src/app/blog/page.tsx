import Blog from "@/components/Blog";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BlogPage() {
  return (
    <main className="page-top-offset min-h-screen">
      <Navbar />
      <Blog />
      <Footer />
    </main>
  );
}
