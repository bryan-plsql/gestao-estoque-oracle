import Link from "next/link"
import { GamerLogo } from "./gamer-logo"

const navLinks = [
  { name: "Home", href: "/#home" },
  { name: "Projects", href: "/#quests" },
  { name: "About", href: "/#about" },
]

export function Navbar() {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-cyan-400/20 bg-[#020617]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3">
          <GamerLogo className="drop-shadow-[0_0_12px_rgba(6,182,212,0.45)]" />
          <span className="hidden text-lg font-bold tracking-wide text-slate-100 sm:block">
            CYBER NEXUS
          </span>
        </Link>

        <div className="flex items-center gap-5 text-sm font-medium text-slate-300 sm:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="group relative transition-colors hover:text-cyan-300"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-cyan-400 to-fuchsia-500 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
