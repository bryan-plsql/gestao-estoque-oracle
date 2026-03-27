"use client"

import { useCart } from "@/contexts/cart-context"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
} from "@/components/ui/sheet"
import {
  Code2,
  FileCode,
  Server,
  Database,
  GitBranch,
  Container,
  Palette,
  Globe,
  Cpu,
  Trash2,
  Sparkles,
  Backpack,
  Zap,
} from "lucide-react"
import { Separator } from "@/components/ui/separator"

// Mapa de icones para as tecnologias
const iconMap: Record<string, React.ElementType> = {
  Code2,
  FileCode,
  Server,
  Database,
  GitBranch,
  Container,
  Palette,
  Globe,
  Cpu,
}

// Cores neon por categoria
const categoryColors: Record<string, { border: string; bg: string; text: string; glow: string }> = {
  frontend: {
    border: "border-cyan-500/50",
    bg: "bg-cyan-500/10",
    text: "text-cyan-400",
    glow: "shadow-[0_0_15px_rgba(34,211,238,0.3)]",
  },
  backend: {
    border: "border-green-500/50",
    bg: "bg-green-500/10",
    text: "text-green-400",
    glow: "shadow-[0_0_15px_rgba(34,197,94,0.3)]",
  },
  database: {
    border: "border-blue-500/50",
    bg: "bg-blue-500/10",
    text: "text-blue-400",
    glow: "shadow-[0_0_15px_rgba(59,130,246,0.3)]",
  },
  tools: {
    border: "border-purple-500/50",
    bg: "bg-purple-500/10",
    text: "text-purple-400",
    glow: "shadow-[0_0_15px_rgba(168,85,247,0.3)]",
  },
}

export function ProficiencyBag() {
  const { items, removeItem, totalXP, isOpen, closeCart, clearCart } = useCart()
  const isEmpty = items.length === 0

  const handleSync = () => {
    if (isEmpty) return
    // Simula sincronizacao - pode ser integrado com backend futuramente
    alert("Proficiencias sincronizadas com sucesso! Voce adquiriu " + totalXP + " XP!")
    clearCart()
    closeCart()
  }

  return (
    <Sheet open={isOpen} onOpenChange={(open) => !open && closeCart()}>
      <SheetContent
        side="right"
        className="w-full sm:max-w-md bg-slate-950/95 backdrop-blur-xl border-l border-purple-500/30 flex flex-col"
      >
        {/* Header */}
        <SheetHeader className="border-b border-purple-500/20 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-500/20 border border-purple-500/40">
              <Backpack className="h-5 w-5 text-purple-400" />
            </div>
            <div>
              <SheetTitle className="text-lg font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Mochila de Proficiencias
              </SheetTitle>
              <SheetDescription className="text-xs text-muted-foreground">
                {items.length} {items.length === 1 ? "item" : "itens"} na mochila
              </SheetDescription>
            </div>
          </div>
        </SheetHeader>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto py-4 space-y-3 pr-1">
          {isEmpty ? (
            <div className="flex flex-col items-center justify-center h-full text-center px-4">
              <div className="p-4 rounded-full bg-slate-800/50 border border-slate-700/50 mb-4">
                <Backpack className="h-10 w-10 text-slate-600" />
              </div>
              <p className="text-muted-foreground text-sm">Sua mochila esta vazia</p>
              <p className="text-xs text-slate-600 mt-1">
                Adicione proficiencias para comecar sua jornada!
              </p>
            </div>
          ) : (
            items.map((item, index) => {
              const IconComponent = iconMap[item.icon] || Code2
              const colors = categoryColors[item.category] || categoryColors.frontend

              return (
                <div
                  key={item.id}
                  className={`
                    group relative p-3 rounded-lg border ${colors.border} ${colors.bg}
                    hover:${colors.glow} transition-all duration-300
                    animate-in slide-in-from-right-5 fade-in
                  `}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-center gap-3">
                    {/* Icon */}
                    <div
                      className={`
                        p-2 rounded-md border ${colors.border} ${colors.bg}
                        group-hover:shadow-[0_0_10px_currentColor] transition-shadow
                      `}
                    >
                      <IconComponent className={`h-4 w-4 ${colors.text}`} />
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground truncate">
                        {item.name}
                      </p>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-xs text-muted-foreground capitalize">
                          {item.category}
                        </span>
                        <span className="text-xs text-slate-600">|</span>
                        <span className={`text-xs ${colors.text}`}>
                          Lv. {item.level}
                        </span>
                      </div>
                    </div>

                    {/* XP Cost */}
                    <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-amber-500/10 border border-amber-500/30">
                      <Zap className="h-3 w-3 text-amber-400" />
                      <span className="text-xs font-bold text-amber-300">
                        {item.xpCost} XP
                      </span>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-1.5 rounded-md text-red-400/60 hover:text-red-400 hover:bg-red-500/10 border border-transparent hover:border-red-500/30 transition-all"
                      aria-label={`Remover ${item.name}`}
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              )
            })
          )}
        </div>

        {/* Footer */}
        <SheetFooter className="border-t border-purple-500/20 pt-4 mt-auto">
          <div className="w-full space-y-4">
            {/* Total XP */}
            <div className="flex items-center justify-between px-1">
              <span className="text-sm text-muted-foreground">Total de XP</span>
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-amber-400" />
                <span className="text-lg font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                  {totalXP.toLocaleString()} XP
                </span>
              </div>
            </div>

            <Separator className="bg-purple-500/20" />

            {/* Checkout Button */}
            <button
              onClick={handleSync}
              disabled={isEmpty}
              className={`
                w-full py-3 px-4 rounded-lg font-semibold text-sm
                flex items-center justify-center gap-2
                transition-all duration-300
                ${
                  isEmpty
                    ? "bg-slate-800/50 border border-slate-700/50 text-slate-500 cursor-not-allowed"
                    : "bg-gradient-to-r from-purple-600 to-cyan-600 border border-purple-500/50 text-white hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] hover:scale-[1.02] active:scale-[0.98]"
                }
              `}
            >
              <Sparkles className={`h-4 w-4 ${isEmpty ? "" : "animate-pulse"}`} />
              Sincronizar Conhecimento
            </button>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
