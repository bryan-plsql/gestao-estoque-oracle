"use client"

import { Trophy, Code, Rocket, Zap, Star } from "lucide-react"

const achievements = [
  {
    level: "Level 1",
    title: "Primeiro Contato com Programação",
    description: "Lógica de programação",
    icon: Code,
    color: "from-cyan-400 to-cyan-600",
  },
  {
    level: "Level 2",
    title: "Descoberta do Front-end",
    description: "HTML, CSS e JavaScript",
    icon: Zap,
    color: "from-purple-400 to-purple-600",
  },
  {
    level: "Level 3",
    title: "Mergulho no Back-end",
    description: "Node.js, SQL/Oracle",
    icon: Rocket,
    color: "from-cyan-400 to-purple-600",
  },
  {
    level: "Level 4",
    title: "Desenvolvimento Full-Stack",
    description: "React + Node.js",
    icon: Trophy,
    color: "from-purple-400 to-cyan-600",
  },
  {
    level: "Level Max",
    title: "Criação do NexusDEV",
    description: "Vitrine de Estudos",
    icon: Star,
    color: "from-cyan-400 to-purple-600",
  },
]

export function AchievementsTimeline() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-slate-950/50 to-transparent">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance mb-4">
            Minhas Conquistas
            <span className="block text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text">
              (Achievements)
            </span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Uma jornada de aprendizado e crescimento no desenvolvimento
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon
            return (
              <div key={index} className="flex gap-6 sm:gap-8 md:gap-12">
                {/* Timeline dot and line */}
                <div className="flex flex-col items-center">
                  <div className={`relative w-16 h-16 rounded-full bg-gradient-to-br ${achievement.color} p-0.5 flex items-center justify-center shadow-lg hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-all duration-300`}>
                    <div className="absolute inset-0 rounded-full bg-slate-950" />
                    <IconComponent className="relative z-10 w-8 h-8 text-white" />
                  </div>
                  {index !== achievements.length - 1 && (
                    <div className="w-0.5 h-24 bg-gradient-to-b from-purple-500/50 to-cyan-500/20 mt-4" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <div className="p-4 sm:p-6 bg-card/30 border border-border/50 rounded-lg hover:border-purple-500/50 transition-all duration-300 group hover:bg-card/50">
                    <span className="inline-block px-3 py-1 text-xs font-semibold bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/50 text-purple-300 rounded-full mb-2 group-hover:text-cyan-300 transition-colors">
                      {achievement.level}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1">
                      {achievement.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
