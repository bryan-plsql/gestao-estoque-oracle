'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { User, Mail, Lock, Eye, EyeOff, UserPlus } from 'lucide-react'
import { realizarCadastro } from '@/app/actions/auth'

interface RegisterDialogProps {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
}

export function RegisterDialog({ isOpen, onOpenChange }: RegisterDialogProps) {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Client-side validation
  const [formErrors, setFormErrors] = useState<{
    nome?: string
    email?: string
    senha?: string
  }>({})

  function validateForm(formData: FormData): boolean {
    const nome = formData.get('nome') as string
    const email = formData.get('email') as string
    const senha = formData.get('senha') as string
    const errors: typeof formErrors = {}

    if (!nome || nome.trim().length < 3) {
      errors.nome = 'Nome deve ter pelo menos 3 caracteres'
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = 'E-mail invalido'
    }

    if (!senha || senha.length < 6) {
      errors.senha = 'Senha deve ter pelo menos 6 caracteres'
    }

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  async function handleSubmit(formData: FormData) {
    setError(null)

    if (!validateForm(formData)) {
      return
    }

    setIsLoading(true)

    try {
      await realizarCadastro(formData)
      // Se der certo, a Action redireciona automaticamente para /login
    } catch (err: any) {
      setError(err.message || 'Erro ao criar conta. Tente novamente.')
      setIsLoading(false)
    }
  }

  function handleClose() {
    setError(null)
    setFormErrors({})
    onOpenChange(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="border-purple-500/30 bg-slate-900/95 backdrop-blur-md sm:max-w-md shadow-2xl shadow-purple-500/20">
        {/* Glow effect behind dialog */}
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 via-cyan-500/10 to-purple-600/20 rounded-lg blur-xl -z-10" />

        <DialogHeader>
          <div className="flex items-center justify-center mb-2">
            <div className="p-3 rounded-full bg-purple-500/20 border border-purple-500/30">
              <UserPlus className="w-6 h-6 text-purple-400" />
            </div>
          </div>
          <DialogTitle className="text-xl font-bold text-center bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Registro de Aventureiro
          </DialogTitle>
          <DialogDescription className="text-center text-muted-foreground">
            Crie sua conta para ingressar na Guilda
          </DialogDescription>
        </DialogHeader>

        {/* Error message */}
        {error && (
          <div className="p-3 bg-red-500/10 border border-red-500/50 rounded-lg text-red-400 text-sm animate-pulse">
            {error}
          </div>
        )}

        <form action={handleSubmit} className="space-y-4 mt-4">
          {/* Adventurer Name */}
          <div className="space-y-2">
            <Label
              htmlFor="register-nome"
              className="text-sm font-medium text-cyan-300 flex items-center gap-2"
            >
              <User className="w-4 h-4" />
              Nome de Aventureiro
            </Label>
            <Input
              id="register-nome"
              name="nome"
              type="text"
              placeholder="Ex: NexusGamer_X"
              className={`bg-slate-800/50 border-purple-500/30 text-foreground placeholder:text-muted-foreground focus:border-purple-500/60 focus:ring-purple-500/20 ${
                formErrors.nome ? 'border-red-500/50' : ''
              }`}
              disabled={isLoading}
            />
            {formErrors.nome && (
              <p className="text-xs text-red-400">{formErrors.nome}</p>
            )}
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label
              htmlFor="register-email"
              className="text-sm font-medium text-cyan-300 flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              E-mail
            </Label>
            <Input
              id="register-email"
              name="email"
              type="email"
              placeholder="aventureiro@guilda.com"
              className={`bg-slate-800/50 border-purple-500/30 text-foreground placeholder:text-muted-foreground focus:border-purple-500/60 focus:ring-purple-500/20 ${
                formErrors.email ? 'border-red-500/50' : ''
              }`}
              disabled={isLoading}
            />
            {formErrors.email && (
              <p className="text-xs text-red-400">{formErrors.email}</p>
            )}
          </div>

          {/* Password */}
          <div className="space-y-2">
            <Label
              htmlFor="register-senha"
              className="text-sm font-medium text-cyan-300 flex items-center gap-2"
            >
              <Lock className="w-4 h-4" />
              Senha
            </Label>
            <div className="relative">
              <Input
                id="register-senha"
                name="senha"
                type={showPassword ? 'text' : 'password'}
                placeholder="Minimo 6 caracteres"
                className={`bg-slate-800/50 border-purple-500/30 text-foreground placeholder:text-muted-foreground focus:border-purple-500/60 focus:ring-purple-500/20 pr-10 ${
                  formErrors.senha ? 'border-red-500/50' : ''
                }`}
                disabled={isLoading}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-cyan-400 transition-colors"
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>
            {formErrors.senha && (
              <p className="text-xs text-red-400">{formErrors.senha}</p>
            )}
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white font-medium border border-purple-400/30 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Criando conta...
              </span>
            ) : (
              'Ingressar na Guilda'
            )}
          </Button>
        </form>

        {/* Footer note */}
        <p className="text-xs text-center text-muted-foreground mt-4">
          Ao criar sua conta, voce concorda com os termos da Guilda.
        </p>
      </DialogContent>
    </Dialog>
  )
}
