import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { StacksGrid } from '@/components/stacks-grid'

export const metadata = {
  title: 'Stacks - Portfólio NexusDEV',
  description: 'Minhas competências tecnológicas e nível de proficiência em diferentes stacks',
}

export default function StacksPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <StacksGrid />
      </div>
      <Footer />
    </main>
  )
}
