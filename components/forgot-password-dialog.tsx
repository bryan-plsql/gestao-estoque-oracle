'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Mail, User } from 'lucide-react'

interface ForgotPasswordDialogProps {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
}

export function ForgotPasswordDialog({ isOpen, onOpenChange }: ForgotPasswordDialogProps) {
  const [email, setEmail] = useState('')
  const [adventurerName, setAdventurerName] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email.trim() || !adventurerName.trim()) {
      alert('Por favor, preencha todos os campos')
      return
    }

    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true)
      setIsLoading(false)
    }, 600)
  }

  const handleClose = () => {
    setEmail('')
    setAdventurerName('')
    setIsSubmitted(false)
    onOpenChange(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="border-cyan-500/30 bg-slate-900/95 backdrop-blur-md sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            {isSubmitted ? '📡 Sinal de Socorro Enviado...' : '🆘 Recuperar Acesso'}
          </DialogTitle>
          <DialogDescription className="text-center text-muted-foreground mt-2">
            {isSubmitted
              ? 'O Mestre da Guilda receberá sua solicitação em breve.'
              : 'Insira seus dados para recuperar acesso à sua conta.'}
          </DialogDescription>
        </DialogHeader>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-4 mt-6">
            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="recovery-email" className="text-sm font-medium text-cyan-300 flex items-center gap-2">
                <Mail className="w-4 h-4" />
                E-mail de Contato
              </Label>
              <Input
                id="recovery-email"
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-slate-800/50 border-purple-500/30 text-foreground placeholder:text-muted-foreground focus:border-purple-500/60 focus:ring-purple-500/20"
                disabled={isLoading}
              />
            </div>

            {/* Adventurer Name */}
            <div className="space-y-2">
              <Label htmlFor="recovery-name" className="text-sm font-medium text-cyan-300 flex items-center gap-2">
                <User className="w-4 h-4" />
                Nome de Aventureiro
              </Label>
              <Input
                id="recovery-name"
                type="text"
                placeholder="Ex: NexusGamer_X"
                value={adventurerName}
                onChange={(e) => setAdventurerName(e.target.value)}
                className="bg-slate-800/50 border-purple-500/30 text-foreground placeholder:text-muted-foreground focus:border-purple-500/60 focus:ring-purple-500/20"
                disabled={isLoading}
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-700 hover:to-cyan-600 text-slate-950 font-medium border border-cyan-400/30 shadow-lg shadow-cyan-500/20 disabled:opacity-50"
            >
              {isLoading ? 'Enviando...' : '📬 Contatar o Mestre da Guilda'}
            </Button>
          </form>
        ) : (
          <div className="mt-6 space-y-4">
            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 text-center">
              <p className="text-green-200 text-sm">
                ✅ Sua solicitação foi enviada com sucesso! Verifique seu e-mail para instruções de recuperação.
              </p>
            </div>

            <Button
              onClick={handleClose}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white"
            >
              Fechar
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
