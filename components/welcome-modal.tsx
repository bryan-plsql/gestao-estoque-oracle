'use client'

import { useAuth } from '@/contexts/auth-context'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { X } from 'lucide-react'

export function WelcomeModal() {
  const { isLoggedIn } = useAuth()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Verifica se o usuário já logou ou se já fechou esse aviso na sessão atual
    const hasDismissed = sessionStorage.getItem('welcomeDismissed')
    if (isLoggedIn || hasDismissed) return

    // Timer de 1 minuto (10000 ms). 
    // DICA: Para testar agora sem esperar, mude temporariamente para 3000 (3 segundos)
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [isLoggedIn])

  const handleDismiss = () => {
    setIsVisible(false)
    // Salva na sessão para não incomodar mais até o usuário fechar a aba
    sessionStorage.setItem('welcomeDismissed', 'true')
  }

  // Se não for para aparecer, não renderiza nada na tela
  if (!isVisible) return null

  return (
    <div className="fixed top-20 right-4 md:right-8 z-50 w-80 animate-in slide-in-from-right-8 fade-in duration-500">
      <div className="relative border border-purple-500/40 bg-slate-950/95 backdrop-blur-xl p-5 rounded-lg shadow-[0_0_15px_rgba(168,85,247,0.2)]">
        
        {/* Botão X para fechar */}
        <button 
          onClick={handleDismiss}
          className="absolute top-3 right-3 text-slate-400 hover:text-white transition-colors"
          aria-label="Fechar aviso"
        >
          <X size={18} />
        </button>

        <h3 className="text-sm font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
          Sinal da Guilda Detectado 📡
        </h3>
        
        <p className="text-xs text-slate-300 mb-4 pr-4 leading-relaxed">
          Aventureiro, você está navegando no modo Convidado. Faça login (mesmo com dados fictícios) para habilitar o mercado de proficiências e salvar seu XP.
        </p>

        <div className="flex gap-2">
          <Link href="/login" onClick={handleDismiss} className="flex-1">
            <Button size="sm" className="w-full bg-purple-600 hover:bg-purple-700 text-white border border-purple-400/50 shadow-[0_0_10px_rgba(147,51,234,0.3)] text-xs">
              ⚔️ Fazer Login
            </Button>
          </Link>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleDismiss}
            className="flex-1 border-slate-700 bg-slate-800/50 hover:bg-slate-800 text-slate-300 text-xs"
          >
            Dispensar
          </Button>
        </div>
      </div>
    </div>
  )
}