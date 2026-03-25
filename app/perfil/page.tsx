'use client'

import { useAuth } from '@/contexts/auth-context'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Sword, Zap, Shield } from 'lucide-react'

export default function ProfilePage() {
  const { adventurerName, isLoggedIn } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoggedIn) {
      router.push('/login')
    }
  }, [isLoggedIn, router])

  if (!isLoggedIn) {
    return null
  }

  const userLevel = Math.floor(Math.random() * 50) + 1
  const acquiredSkills = [
    { name: 'React', level: 85, category: 'Frontend' },
    { name: 'TypeScript', level: 90, category: 'Frontend' },
    { name: 'Next.js', level: 88, category: 'Frontend' },
    { name: 'Tailwind CSS', level: 95, category: 'Frontend' },
  ]

  return (
    <div className="min-h-screen bg-slate-950 pt-20 px-4 pb-12">
      <div className="max-w-4xl mx-auto">
        {/* Background glow */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
        </div>

        {/* Character Sheet Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
            Ficha de Personagem
          </h1>
          <p className="text-muted-foreground">Seu perfil na Guilda NexusDEV</p>
        </div>

        {/* Main Character Info */}
        <Card className="border-purple-500/30 bg-slate-900/80 backdrop-blur-md mb-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-cyan-500/5 pointer-events-none" />
          <CardHeader className="relative">
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-3xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  {adventurerName}
                </CardTitle>
                <CardDescription className="mt-2 text-base">
                  Experiente Dev no Universo NexusDEV
                </CardDescription>
              </div>

              {/* Level Badge */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-500 p-0.5">
                  <div className="w-full h-full rounded-lg bg-slate-900 flex items-center justify-center">
                    <div className="text-center">
                      <Zap className="w-6 h-6 text-yellow-400 mx-auto mb-1" />
                      <span className="text-2xl font-bold text-purple-400">L{userLevel}</span>
                    </div>
                  </div>
                </div>
                <span className="text-xs text-muted-foreground">Level</span>
              </div>
            </div>
          </CardHeader>

          <CardContent className="relative space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: Sword, label: 'Força', value: '78' },
                { icon: Shield, label: 'Defesa', value: '85' },
                { icon: Zap, label: 'Agilidade', value: '92' },
              ].map((stat, idx) => {
                const Icon = stat.icon
                return (
                  <div
                    key={idx}
                    className="bg-slate-800/50 border border-cyan-500/20 rounded-lg p-4 text-center hover:border-cyan-500/40 transition-all"
                  >
                    <Icon className="w-5 h-5 text-cyan-400 mx-auto mb-2" />
                    <p className="text-xs text-muted-foreground mb-1">{stat.label}</p>
                    <p className="text-2xl font-bold text-cyan-400">{stat.value}</p>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Acquired Skills Section */}
        <Card className="border-cyan-500/30 bg-slate-900/80 backdrop-blur-md">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 pointer-events-none" />
          <CardHeader className="relative">
            <CardTitle className="text-xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Habilidades Adquiridas
            </CardTitle>
            <CardDescription>
              Proficiências desbloqueadas no mercado de Tech Stacks
            </CardDescription>
          </CardHeader>

          <CardContent className="relative">
            {acquiredSkills.length > 0 ? (
              <div className="space-y-3">
                {acquiredSkills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-4 p-4 bg-slate-800/50 border border-purple-500/20 rounded-lg hover:border-purple-500/40 transition-all group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-purple-500/20 border border-purple-500/50 flex items-center justify-center group-hover:shadow-[0_0_15px_rgba(168,85,247,0.4)]">
                      <span className="text-purple-400 font-bold text-sm">{skill.level}%</span>
                    </div>

                    <div className="flex-1">
                      <p className="font-medium text-foreground">{skill.name}</p>
                      <p className="text-xs text-muted-foreground">{skill.category}</p>
                    </div>

                    <div className="flex-shrink-0 w-24 h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full transition-all"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-muted-foreground mb-4">
                  Nenhuma habilidade adquirida ainda. Comece a explorar o mercado!
                </p>
                <Link href="/stacks">
                  <Button className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white">
                    🛍️ Visitar Mercado de Tech Stacks
                  </Button>
                </Link>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="mt-8 flex gap-4 justify-center">
          <Link href="/stacks">
            <Button className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white border border-purple-400/30">
              🛍️ Explorar Tech Stacks
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
