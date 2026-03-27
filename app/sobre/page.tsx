import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AboutIntro } from "@/components/about-intro"
import { AchievementsTimeline } from "@/components/achievements-timeline"
import { TechStackCarousel } from "@/components/tech-stack-carousel"

export const metadata: Metadata = {
  title: "NexusDEV | Sobre Mim",
  description: "Conheça a jornada de um desenvolvedor júnior apaixonado por tecnologia, com evolução do start ao commit no desenvolvimento full-stack.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <AboutIntro />
      <AchievementsTimeline />
      <TechStackCarousel />
      <Footer />
    </main>
  )
}
