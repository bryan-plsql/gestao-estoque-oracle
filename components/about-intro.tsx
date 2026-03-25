"use client"

export function AboutIntro() {
  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-purple-600 bg-clip-text text-transparent text-balance leading-tight">
              Minha Jornada: Do Start ao Commit
            </h1>
            
            <p className="text-lg text-muted-foreground text-balance">
              Conheça o desenvolvedor por trás do NexusDEV
            </p>
            
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed text-balance">
              Sou um desenvolvedor júnior apaixonado por tecnologia, com curiosidade constante e desejo inabalável de aprender. Cada linha de código que escrevo é resultado de muitos estudos, projetos práticos e dedicação. Este site é mais do que um portfólio — é uma vitrine do que aprendi e continuo aprendendo na jornada pelo desenvolvimento full-stack.
            </p>

            <div className="pt-4">
              <a 
                href="#"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-background font-semibold rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]"
              >
                Explorar Projetos
              </a>
            </div>
          </div>

          {/* Right: Avatar/Photo */}
          <div className="flex items-center justify-center">
            <div className="relative">
              {/* Animated glow background */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-cyan-500/30 blur-2xl animate-pulse" />
              
              {/* Avatar circle with neon border */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full border-2 border-purple-500 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center overflow-hidden group">
                {/* Neon glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full" />
                
                {/* Placeholder for photo */}
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <div className="w-56 h-56 sm:w-64 sm:h-64 bg-gradient-to-br from-slate-700 to-slate-800 rounded-full flex items-center justify-center text-muted-foreground">
                    <span className="text-center">
                      <p className="text-sm font-medium">Sua Foto Aqui</p>
                    </span>
                  </div>
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full shadow-lg" />
              <div className="absolute -bottom-2 -left-2 w-6 h-6 border-2 border-purple-500 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
