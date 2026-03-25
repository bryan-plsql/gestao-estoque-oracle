'use client'

import { type StackCategory } from '@/types/stack'

interface StackFilterProps {
  activeCategory: StackCategory | 'all'
  onCategoryChange: (category: StackCategory | 'all') => void
}

const categories: Array<{ id: StackCategory | 'all'; label: string; icon: string }> = [
  { id: 'all', label: 'Tudo', icon: '⚔️' },
  { id: 'frontend', label: 'Front-end', icon: '🎨' },
  { id: 'backend', label: 'Back-end', icon: '⚙️' },
  { id: 'database', label: 'Database', icon: '💾' },
  { id: 'tools', label: 'Ferramentas', icon: '🛠️' },
]

export function StackFilter({ activeCategory, onCategoryChange }: StackFilterProps) {
  return (
    <div className="flex gap-2 flex-wrap">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id as StackCategory | 'all')}
          className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 border ${
            activeCategory === category.id
              ? 'bg-gradient-to-r from-purple-600 to-cyan-500 border-purple-400 text-white shadow-lg shadow-purple-600/50'
              : 'bg-slate-800/40 border-slate-700/50 text-slate-300 hover:border-slate-600 hover:bg-slate-800/60'
          }`}
        >
          <span className="mr-2">{category.icon}</span>
          {category.label}
        </button>
      ))}
    </div>
  )
}
