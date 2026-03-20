import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ProductGrid } from "@/components/product-grid"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <HeroSection />
      <ProductGrid /> 
      <Footer />
    </main>
  )
}