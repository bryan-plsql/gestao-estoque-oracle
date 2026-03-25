'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/contexts/auth-context'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Eye, EyeOff, LogIn } from 'lucide-react'
import { ForgotPasswordDialog } from '@/components/forgot-password-dialog'

export default function LoginPage() {
  const [adventurerName, setAdventurerName] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showForgotDialog, setShowForgotDialog] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { login } = useAuth()
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!adventurerName.trim()) {
      alert('Por favor, insira seu Nome de Aventureiro')
      return
    }

    if (!password) {
      alert('Por favor, insira uma Senha de Acesso')
      return
    }

    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      login(adventurerName)
      setIsLoading(false)
      router.push('/perfil')
    }, 600)
  }

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">
        {/* Background glow effect */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        </div>

        {/* Terminal style container */}
        <div className="relative border border-purple-500/30 bg-slate-900/80 backdrop-blur-md rounded-lg p-8 shadow-2xl shadow-purple-500/20">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-center mb-4">
              <LogIn className="w-8 h-8 text-cyan-400" />
            </div>
            <h1 className="text-2xl font-bold text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Terminal de Acesso
            </h1>
            <p className="text-center text-sm text-muted-foreground mt-2">
              Insira suas credenciais para acessar a Guilda
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-5">
            {/* Adventurer Name */}
            <div className="space-y-2">
              <Label htmlFor="adventurer-name" className="text-sm font-medium text-cyan-300">
                Nome de Aventureiro
              </Label>
              <Input
                id="adventurer-name"
                type="text"
                placeholder="Ex: NexusGamer_X"
                value={adventurerName}
                onChange={(e) => setAdventurerName(e.target.value)}
                className="bg-slate-800/50 border-purple-500/30 text-foreground placeholder:text-muted-foreground focus:border-purple-500/60 focus:ring-purple-500/20"
                disabled={isLoading}
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium text-cyan-300">
                Senha de Acesso
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-slate-800/50 border-purple-500/30 text-foreground placeholder:text-muted-foreground focus:border-purple-500/60 focus:ring-purple-500/20"
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-cyan-400 transition-colors"
                  disabled={isLoading}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3 text-xs text-blue-200">
              ℹ️ <strong>Santuário Seguro:</strong> Podes usar dados reais ou inventar um avatar. O objetivo é testar as mecânicas deste portfólio.
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white font-medium border border-purple-400/30 shadow-lg shadow-purple-500/20 disabled:opacity-50"
            >
              {isLoading ? 'Acessando...' : '⚔️ Entrar na Guilda'}
            </Button>
          </form>

          {/* Footer Links */}
          <div className="mt-6 space-y-3 text-center">
            <button
              onClick={() => setShowForgotDialog(true)}
              className="text-sm text-muted-foreground hover:text-cyan-400 transition-colors block w-full"
              disabled={isLoading}
            >
              Esqueci minha senha
            </button>

            <div className="flex items-center justify-center gap-2">
              <span className="text-sm text-muted-foreground">Não tem conta?</span>
              <Link href="/" className="text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors">
                Criar Nova Guilda
              </Link>
            </div>
          </div>
        </div>
      </div>

      <ForgotPasswordDialog isOpen={showForgotDialog} onOpenChange={setShowForgotDialog} />
    </div>
  )
}
