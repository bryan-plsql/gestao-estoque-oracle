'use client'

import { useEffect, useState } from 'react'
import { type Stack, type StackCategory } from '@/types/stack'
import { StackCard } from '@/components/stack-card'
import { StackCardSkeleton } from '@/components/stack-card-skeleton'
import { StackFilter } from '@/components/stack-filter'

export function StacksGrid() {
  const [stacks, setStacks] = useState<Stack[]>([])
  const [activeCategory, setActiveCategory] = useState<StackCategory | 'all'>('all')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchStacks = async () => {
      try {
        setLoading(true)
        const response = await fetch('/api/stacks')
        if (!response.ok) throw new Error('Falha ao carregar stacks')
        const data = await response.json()
        setStacks(data)
        setError(null)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro desconhecido')
        console.error('[v0] Error fetching stacks:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchStacks()
  }, [])

  const filteredStacks =
    activeCategory === 'all' ? stacks : stacks.filter((s) => s.category === activeCategory)

  const categoryCounts = {
    all: stacks.length,
    frontend: stacks.filter((s) => s.category === 'frontend').length,
    backend: stacks.filter((s) => s.category === 'backend').length,
    database: stacks.filter((s) => s.category === 'database').length,
    tools: stacks.filter((s) => s.category === 'tools').length,
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-cyan-500 to-purple-600 bg-clip-text text-transparent mb-2">
            Meu Inventário de Habilidades
          </h1>
          <p className="text-slate-400">
            Confira o nível de proficiência em cada stack tecnológica
          </p>
        </div>

        {/* Filtros - Abas de Inventário */}
        <div className="pt-4 border-t border-slate-800">
          <p className="text-sm text-slate-400 mb-3 font-medium">FILTRAR POR SET DE EQUIPAMENTOS:</p>
          <StackFilter activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
        </div>
      </div>

      {/* Contador de Skills */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        <div className="px-3 py-2 rounded-lg bg-slate-800/40 border border-slate-700/50">
          <p className="text-xs text-slate-400">Total de Skills</p>
          <p className="text-2xl font-bold text-cyan-400">{stacks.length}</p>
        </div>
        <div className="px-3 py-2 rounded-lg bg-slate-800/40 border border-slate-700/50">
          <p className="text-xs text-slate-400">Categoria Ativa</p>
          <p className="text-2xl font-bold text-purple-400">{categoryCounts[activeCategory]}</p>
        </div>
        <div className="px-3 py-2 rounded-lg bg-slate-800/40 border border-slate-700/50">
          <p className="text-xs text-slate-400">Nível Médio</p>
          <p className="text-2xl font-bold text-green-400">
            {filteredStacks.length > 0
              ? Math.round(filteredStacks.reduce((acc, s) => acc + s.level, 0) / filteredStacks.length)
              : 0}
          </p>
        </div>
      </div>

      {/* Grid de Stacks */}
      {error && (
        <div className="p-4 rounded-lg bg-red-900/20 border border-red-700/50 text-red-400">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {loading ? (
          // Skeleton Loading
          Array.from({ length: 12 }).map((_, i) => <StackCardSkeleton key={i} />)
        ) : filteredStacks.length > 0 ? (
          // Stack Cards com Animação
          filteredStacks.map((stack, index) => (
            <div
              key={stack.id}
              style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.05}s both`,
              }}
            >
              <StackCard stack={stack} />
            </div>
          ))
        ) : (
          <div className="col-span-full py-12 text-center">
            <p className="text-slate-400">Nenhuma skill encontrada nesta categoria</p>
          </div>
        )}
      </div>

      {/* Estilo de animação */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}
