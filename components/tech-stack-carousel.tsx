"use client"

import { useEffect, useState } from "react"
import { 
  ReactIcon,
  NodeIcon,
  TypescriptIcon,
  TailwindIcon,
  OracleIcon,
  PostgresIcon,
  GitIcon,
  DockerIcon,
} from "@/components/tech-icons"

interface TechStack {
  id: string
  name: string
  icon: React.ReactNode
  category: "Frontend" | "Backend" | "Database" | "Tools"
}

const techStacks: TechStack[] = [
  {
    id: "react",
    name: "React",
    icon: <ReactIcon />,
    category: "Frontend",
  },
  {
    id: "typescript",
    name: "TypeScript",
    icon: <TypescriptIcon />,
    category: "Frontend",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    icon: <TailwindIcon />,
    category: "Frontend",
  },
  {
    id: "node",
    name: "Node.js",
    icon: <NodeIcon />,
    category: "Backend",
  },
  {
    id: "postgres",
    name: "PostgreSQL",
    icon: <PostgresIcon />,
    category: "Database",
  },
  {
    id: "oracle",
    name: "Oracle SQL",
    icon: <OracleIcon />,
    category: "Database",
  },
  {
    id: "git",
    name: "Git",
    icon: <GitIcon />,
    category: "Tools",
  },
  {
    id: "docker",
    name: "Docker",
    icon: <DockerIcon />,
    category: "Tools",
  },
]

export function TechStackCarousel() {
  const [isPaused, setIsPaused] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  // Double the array for seamless loop
  const extendedStacks = [...techStacks, ...techStacks]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance mb-4">
            Meus Power-ups
            <span className="block text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text">
              (Tech Stacks)
            </span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            As ferramentas e tecnologias que alimentam meus projetos
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative w-full overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Fade gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

          {/* Carousel Track */}
          <div className="flex gap-4 sm:gap-6 py-8">
            {extendedStacks.map((stack, index) => (
              <div
                key={`${stack.id}-${index}`}
                className={`flex-shrink-0 w-40 sm:w-48 transition-all duration-300 ${
                  isPaused ? "paused" : ""
                }`}
                style={{
                  animation: isPaused 
                    ? "none" 
                    : `scroll-left 30s linear infinite`,
                }}
              >
                {/* Tech Card */}
                <div className="h-full p-4 sm:p-6 bg-card/30 border border-border/50 rounded-lg hover:border-purple-500/50 hover:bg-card/50 transition-all duration-300 group flex flex-col items-center justify-center gap-3 cursor-default hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {stack.icon}
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-sm sm:text-base text-foreground mb-1">
                      {stack.name}
                    </h3>
                    <span className="inline-block px-2 py-1 text-xs bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/50 text-purple-300 rounded-full">
                      {stack.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Animation styles */}
        <style jsx>{`
          @keyframes scroll-left {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </div>
    </section>
  )
}
