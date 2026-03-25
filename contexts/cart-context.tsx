"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from "react"
import { type Stack } from "@/types/stack"

export interface CartItem extends Stack {
  xpCost: number
}

interface CartContextType {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (id: string) => void
  clearCart: () => void
  totalXP: number
  itemCount: number
  isOpen: boolean
  openCart: () => void
  closeCart: () => void
  toggleCart: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([
    // Itens de exemplo para demonstracao
    { id: "react", name: "React", level: 85, category: "frontend", icon: "Code2", color: "cyan", xpCost: 500 },
    { id: "typescript", name: "TypeScript", level: 80, category: "frontend", icon: "FileCode", color: "blue", xpCost: 450 },
    { id: "nodejs", name: "Node.js", level: 75, category: "backend", icon: "Server", color: "green", xpCost: 400 },
  ])
  const [isOpen, setIsOpen] = useState(false)

  const addItem = useCallback((item: CartItem) => {
    setItems((prev) => {
      const exists = prev.find((i) => i.id === item.id)
      if (exists) return prev
      return [...prev, item]
    })
  }, [])

  const removeItem = useCallback((id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }, [])

  const clearCart = useCallback(() => {
    setItems([])
  }, [])

  const totalXP = items.reduce((sum, item) => sum + item.xpCost, 0)
  const itemCount = items.length

  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])
  const toggleCart = useCallback(() => setIsOpen((prev) => !prev), [])

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        clearCart,
        totalXP,
        itemCount,
        isOpen,
        openCart,
        closeCart,
        toggleCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
