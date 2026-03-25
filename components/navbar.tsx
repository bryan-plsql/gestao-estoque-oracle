"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { GamerLogo } from "./gamer-logo"
import { Search, ShoppingCart, Menu, X, User, Loader2 } from "lucide-react"
import { type Stack } from "@/types/stack"

const navLinks = [
  { name: "Início", href: "/" },
  { name: "Tech Stacks", href: "/stacks" },
  { name: "Sobre Mim", href: "/sobre" },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<Stack[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)
  const debounceTimer = useRef<NodeJS.Timeout | null>(null)

  // Debounce search
  useEffect(() => {
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current)
    }

    if (!query.trim()) {
      setResults([])
      setIsOpen(false)
      return
    }

    setIsLoading(true)
    debounceTimer.current = setTimeout(async () => {
      try {
        const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`)
        const data = await response.json()
        setResults(data.results)
        setIsOpen(true)
      } catch (error) {
        console.error("[v0] Erro ao buscar:", error)
        setResults([])
      } finally {
        setIsLoading(false)
      }
    }, 300)

    return () => {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current)
      }
    }
  }, [query])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleResultClick = () => {
    setQuery("")
    setResults([])
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <GamerLogo className="drop-shadow-[0_0_10px_rgba(139,92,246,0.5)]" />
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent hidden sm:block">
              NexusDEV
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-400 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md hidden sm:block" ref={searchRef}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-lg blur opacity-0 group-focus-within:opacity-100 transition-opacity" />
              <div className="relative flex items-center">
                <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Buscar Stacks..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onFocus={() => query && setIsOpen(true)}
                  className="w-full h-10 pl-10 pr-4 bg-secondary/50 border border-border/50 rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/30 transition-all"
                />
                {isLoading && (
                  <Loader2 className="absolute right-3 h-4 w-4 text-purple-500 animate-spin" />
                )}
              </div>

              {/* Dropdown Results */}
              {isOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-slate-900/95 backdrop-blur-md border border-cyan-500/30 rounded-lg shadow-xl overflow-hidden z-50">
                  {isLoading && (
                    <div className="p-4 flex items-center justify-center gap-2">
                      <Loader2 className="h-4 w-4 text-cyan-500 animate-spin" />
                      <span className="text-sm text-muted-foreground">Procurando loot...</span>
                    </div>
                  )}

                  {!isLoading && results.length === 0 && (
                    <div className="p-4 text-center text-sm text-muted-foreground">
                      Nenhum loot encontrado...
                    </div>
                  )}

                  {!isLoading && results.length > 0 && (
                    <div className="max-h-96 overflow-y-auto">
                      {results.map((stack, index) => (
                        <Link
                          key={stack.id}
                          href="/stacks"
                          onClick={handleResultClick}
                          className="flex items-center gap-3 px-4 py-3 hover:bg-purple-500/10 transition-colors border-b border-border/20 last:border-b-0 group"
                          style={{ animationDelay: `${index * 50}ms` }}
                        >
                          <div className={`w-8 h-8 rounded-md bg-${stack.color}-500/20 border border-${stack.color}-500/50 flex items-center justify-center text-${stack.color}-500 text-xs font-bold group-hover:shadow-[0_0_10px_rgba(${stack.color === 'cyan' ? '34,211,238' : stack.color === 'purple' ? '168,85,247' : '59,130,246'},0.5)]`}>
                            {stack.level}
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-foreground">{stack.name}</p>
                            <p className="text-xs text-muted-foreground capitalize">{stack.category}</p>
                          </div>
                          <div className="w-16 h-1.5 bg-slate-700 rounded-full overflow-hidden">
                            <div
                              className={`h-full bg-gradient-to-r from-${stack.color}-500 to-${stack.color}-400`}
                              style={{ width: `${stack.level}%` }}
                            />
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Mobile Search */}
            <button className="sm:hidden p-2 text-muted-foreground hover:text-foreground transition-colors">
              <Search className="h-5 w-5" />
            </button>

            {/* User */}
            <button className="p-2 text-muted-foreground hover:text-foreground transition-colors hidden sm:block">
              <User className="h-5 w-5" />
            </button>

            {/* Cart */}
            <button className="relative p-2 text-muted-foreground hover:text-foreground transition-colors group">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-0.5 -right-0.5 h-4 w-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full text-[10px] font-bold text-foreground flex items-center justify-center shadow-[0_0_10px_rgba(139,92,246,0.5)]">
                3
              </span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <div className="flex flex-col gap-4">
              {/* Mobile Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Buscar Stacks..."
                  className="w-full h-10 pl-10 pr-4 bg-secondary/50 border border-border/50 rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-purple-500/50"
                />
              </div>

              {/* Mobile Nav Links */}
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
