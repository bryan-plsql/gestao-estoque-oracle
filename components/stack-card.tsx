import { LucideIcon, Zap, Code2, Palette, Rocket, Triangle, Server, Package, Code, Network, GitBranch, Database, HardDrive, Leaf, Flame, Box, Terminal } from 'lucide-react'
import { type Stack } from '@/types/stack'

const iconMap: Record<string, LucideIcon> = {
  Zap,
  Code2,
  Palette,
  Rocket,
  Triangle,
  Server,
  Package,
  Code,
  Network,
  GitBranch,
  Database,
  HardDrive,
  Leaf,
  Flame,
  Box,
  Terminal,
}

const colorClasses = {
  purple: {
    glow: 'shadow-lg shadow-purple-600/20 hover:shadow-purple-600/40',
    border: 'border-purple-600/40 hover:border-purple-400/80',
    icon: 'text-purple-400',
    text: 'text-purple-300',
  },
  cyan: {
    glow: 'shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40',
    border: 'border-cyan-500/40 hover:border-cyan-400/80',
    icon: 'text-cyan-400',
    text: 'text-cyan-300',
  },
  blue: {
    glow: 'shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40',
    border: 'border-blue-500/40 hover:border-blue-400/80',
    icon: 'text-blue-400',
    text: 'text-blue-300',
  },
  green: {
    glow: 'shadow-lg shadow-green-500/20 hover:shadow-green-500/40',
    border: 'border-green-500/40 hover:border-green-400/80',
    icon: 'text-green-400',
    text: 'text-green-300',
  },
}

interface StackCardProps {
  stack: Stack
}

export function StackCard({ stack }: StackCardProps) {
  const IconComponent = iconMap[stack.icon] || Zap
  const color = stack.color || 'purple'
  const colors = colorClasses[color]

  const levelLabel = stack.level >= 90 ? 'MAX' : `LVL ${Math.floor(stack.level / 10)}`
  const progressPercent = stack.level

  return (
    <div
      className={`group flex flex-col gap-3 p-4 rounded-lg border bg-slate-900/40 backdrop-blur-sm transition-all duration-300 hover:scale-105 cursor-default ${colors.border} ${colors.glow}`}
    >
      {/* Header com ícone e nível */}
      <div className="flex items-start justify-between gap-2">
        <div className={`p-2 rounded-lg bg-slate-800/50 transition-colors duration-300 group-hover:bg-slate-700 ${colors.icon}`}>
          <IconComponent className="w-6 h-6" />
        </div>
        <div className={`px-2 py-1 rounded text-xs font-bold ${colors.text} bg-slate-800/30 group-hover:bg-slate-800/60 transition-colors`}>
          {levelLabel}
        </div>
      </div>

      {/* Nome da tecnologia */}
      <h3 className="font-semibold text-white group-hover:text-slate-100 transition-colors">
        {stack.name}
      </h3>

      {/* Descrição / Categoria */}
      <p className="text-xs text-slate-400 capitalize">
        {stack.category.replace('-', ' ')} • Proficiência: {stack.level}%
      </p>

      {/* Barra de progresso com efeito neon */}
      <div className="relative h-2 rounded-full bg-slate-800/50 overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-300 ${
            color === 'purple'
              ? 'bg-gradient-to-r from-purple-600 to-purple-400'
              : color === 'cyan'
              ? 'bg-gradient-to-r from-cyan-600 to-cyan-400'
              : color === 'blue'
              ? 'bg-gradient-to-r from-blue-600 to-blue-400'
              : 'bg-gradient-to-r from-green-600 to-green-400'
          } shadow-lg`}
          style={{ width: `${progressPercent}%` }}
        />
      </div>
    </div>
  )
}
