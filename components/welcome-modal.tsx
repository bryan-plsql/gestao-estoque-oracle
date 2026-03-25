'use client'

import { useAuth } from '@/contexts/auth-context'
import { useEffect, useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function WelcomeModal() {
  const { isLoggedIn } = useAuth()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Only show if not logged in - delay to avoid hydration mismatch
    const timer = setTimeout(() => {
      if (!isLoggedIn) {
        setIsOpen(true)
      }
    }, 100)

    return () => clearTimeout(timer)
  }, [isLoggedIn])

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="border-purple-500/30 bg-slate-900/95 backdrop-blur-md sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Identifique-se, Aventureiro
          </DialogTitle>
          <DialogDescription className="text-center text-muted-foreground mt-2">
            Bem-vindo ao NexusDEV! Para desbloquear a experiência completa do mercado de proficiências e sistema de níveis, recomendamos fazer login.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 mt-6">
          <p className="text-xs text-muted-foreground text-center bg-blue-500/10 border border-blue-500/30 rounded-lg p-3">
            ℹ️ Santuário Seguro: Podes usar dados reais ou inventar um avatar. O objetivo é testar as mecânicas deste portfólio.
          </p>

          <div className="space-y-3">
            <Link href="/login" onClick={() => setIsOpen(false)} className="block">
              <Button className="w-full bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white font-medium border border-purple-400/30 shadow-lg shadow-purple-500/20">
                ⚔️ Fazer Login
              </Button>
            </Link>

            <Button
              variant="outline"
              onClick={() => setIsOpen(false)}
              className="w-full border-cyan-500/30 bg-cyan-500/5 hover:bg-cyan-500/10 text-cyan-400 hover:text-cyan-300"
            >
              🗺️ Continuar como Convidado
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
