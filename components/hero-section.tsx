import { ArrowRight, Zap, Shield, Truck, Box } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-16">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-smartphone-gamer.jpg"
          alt="Gamer com smartphone gaming"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        
        {/* Animated glow effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[128px] animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/30 mb-6">
            <Zap className="h-4 w-4 text-cyan-400" />
            <span className="text-sm font-medium text-cyan-400">Novo Lançamento</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="text-foreground">NexusDEV</span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Showcase
            </span>
            <br />
            <span className="text-foreground">By Bryan</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
            Explore minha vitrine tecnológica e descubra o arsenal de habilidades que utilizo para criar experiências digitais de alto desempenho. Do front-end dinâmico ao back-end Oracle robusto, venha ver este desenvolimento constante comigo.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-12">
            <a
              href="#products"
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-500 rounded-lg font-semibold text-foreground overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(139,92,246,0.4)]"
            >
              <span className="relative z-10">Tech Stacks</span>
              <ArrowRight className="relative z-10 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 bg-secondary/50 border border-border hover:border-purple-500/50 rounded-lg font-semibold text-foreground transition-all hover:bg-secondary"
            >
              Saiba Mais
            </a>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="p-2 rounded-lg bg-purple-500/10">
                <Box className="h-4 w-4 text-purple-400" />
              </div>
              <span>Full-Stack</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="p-2 rounded-lg bg-cyan-500/10">
                <Shield className="h-4 w-4 text-cyan-400" />
              </div>
              <span>Safety First</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="p-2 rounded-lg bg-purple-500/10">
                <Zap className="h-4 w-4 text-purple-400" />
              </div>
              <span>Automação</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
