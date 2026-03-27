import Link from "next/link"
import { GamerLogo } from "./gamer-logo"

const navLinks = [
  { name: "Inicio", href: "/#home" },
  { name: "Habilidades", href: "/#about" },
  { name: "Operacoes", href: "/#operacoes" },
]

export function Navbar() {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-cyan-500/10 bg-[#030712]/90 backdrop-blur-2xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3">
          <GamerLogo className="drop-shadow-[0_0_16px_rgba(6,182,212,0.5)]" />
          <span className="hidden font-mono text-sm font-bold uppercase tracking-[0.15em] text-slate-100 sm:block">
            CYBER_NEXUS
          </span>
        </Link>

        <div className="flex items-center gap-6 font-mono text-sm text-slate-400 sm:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="group relative uppercase tracking-wider transition-colors hover:text-cyan-400"
            >
              {link.name}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gradient-to-r from-cyan-400 to-fuchsia-500 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
