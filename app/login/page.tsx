'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Eye, EyeOff, LogIn } from 'lucide-react'
import { ForgotPasswordDialog } from '@/components/forgot-password-dialog'
import { realizarLogin } from '@/app/actions/auth' // Importando sua Action real

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showForgotDialog, setShowForgotDialog] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  // Função para gerenciar o envio do formulário
  async function handleSubmit(formData: FormData) {
    setIsLoading(true)
    setError(null)

    try {
      await realizarLogin(formData)
      // Se der certo, a Action redireciona automaticamente.
    } catch (err: any) {
      setError(err.message || "Erro ao acessar a guilda.")
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4 py-8 relative">
      {/* Background glow effect */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="w-full max-w-md">
        <div className="relative border border-purple-500/30 bg-slate-900/80 backdrop-blur-md rounded-lg p-8 shadow-2xl shadow-purple-500/20">
          
          <div className="mb-8 text-center">
            <div className="flex items-center justify-center mb-4">
              <LogIn className="w-8 h-8 text-cyan-400" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Terminal de Acesso
            </h1>
            <p className="text-sm text-muted-foreground mt-2">
              Insira suas credenciais para acessar a Guilda
            </p>
          </div>

          {/* Mensagem de Erro amigável */}
          {error && (
            <div className="mb-4 p-3 bg-red-500/10 border border-red-500/50 rounded text-red-400 text-sm animate-pulse">
              ⚠️ {error}
            </div>
          )}

          <form action={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-cyan-300">
                E-mail do Aventureiro
              </Label>
              <Input
                id="email"
                name="email" // IMPORTANTE: igual ao que está na Action
                type="email"
                placeholder="exemplo@guilda.com"
                className="bg-slate-800/50 border-purple-500/30 text-foreground"
                disabled={isLoading}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="senha" className="text-sm font-medium text-cyan-300">
                Senha de Acesso
              </Label>
              <div className="relative">
                <Input
                  id="senha"
                  name="senha" // IMPORTANTE: igual ao que está na Action
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  className="bg-slate-800/50 border-purple-500/30 text-foreground"
                  disabled={isLoading}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-cyan-400"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white font-medium shadow-lg"
            >
              {isLoading ? 'Autenticando...' : '⚔️ Entrar na Guilda'}
            </Button>
          </form>

          <div className="mt-6 space-y-3 text-center">
            <button
              onClick={() => setShowForgotDialog(true)}
              className="text-sm text-muted-foreground hover:text-cyan-400 block w-full"
            >
              Esqueci minha senha
            </button>

            <div className="flex items-center justify-center gap-2">
              <span className="text-sm text-muted-foreground">Novo aqui?</span>
              <Link href="/cadastro" className="text-sm font-medium text-purple-400 hover:text-purple-300">
                Criar Nova Conta
              </Link>
            </div>
          </div>
        </div>
      </div>

      <ForgotPasswordDialog isOpen={showForgotDialog} onOpenChange={setShowForgotDialog} />
    </div>
  )
}