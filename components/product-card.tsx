"use client"

import { ShoppingCart, Star, Zap } from "lucide-react"

export interface Product {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number
  image: string
  rating: number
  reviews: number
  badge?: string
  inStock: boolean
}

interface ProductCardProps {
  product: Product
  onAddToCart?: (product: Product) => void
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const discount = product.originalPrice 
    ? Math.round((1 - product.price / product.originalPrice) * 100) 
    : 0

  return (
    <div className="group relative">
      {/* Glow effect on hover */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl opacity-0 group-hover:opacity-75 blur transition-all duration-500 group-hover:duration-200" />
      
      {/* Card */}
      <div className="relative flex flex-col h-full bg-card/40 backdrop-blur-xl border border-border/50 rounded-2xl overflow-hidden transition-all duration-300 group-hover:scale-[1.02] group-hover:border-purple-500/50">
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden bg-secondary/30">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Badges */}
          {product.badge && (
            <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-purple-600 to-purple-500 rounded-full text-xs font-semibold text-foreground shadow-lg">
              <Zap className="h-3 w-3" />
              {product.badge}
            </div>
          )}
          
          {discount > 0 && (
            <div className="absolute top-3 right-3 px-2.5 py-1 bg-chart-1/90 rounded-full text-xs font-bold text-background shadow-lg">
              -{discount}%
            </div>
          )}
          
          {/* Quick Add Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-background/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300">
            <button
              onClick={() => onAddToCart?.(product)}
              disabled={!product.inStock}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg font-semibold text-foreground transform -translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ShoppingCart className="h-4 w-4" />
              {product.inStock ? "Adicionar" : "Esgotado"}
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-5">
          {/* Rating */}
          <div className="flex items-center gap-2 mb-2">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-3.5 w-3.5 ${
                    i < Math.floor(product.rating)
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-muted-foreground"
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground">
              ({product.reviews})
            </span>
          </div>

          {/* Title */}
          <h3 className="font-semibold text-foreground mb-1 line-clamp-1 group-hover:text-purple-400 transition-colors">
            {product.name}
          </h3>
          
          {/* Description */}
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-1">
            {product.description}
          </p>

          {/* Price */}
          <div className="flex items-end gap-2 mb-4">
            <span className="text-2xl font-bold text-chart-1 drop-shadow-[0_0_10px_rgba(34,197,94,0.3)]">
              R$ {product.price.toLocaleString('pt-BR')}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                R$ {product.originalPrice.toLocaleString('pt-BR')}
              </span>
            )}
          </div>

          {/* Buy Button */}
          <button
            onClick={() => onAddToCart?.(product)}
            disabled={!product.inStock}
            className="w-full py-3 px-4 bg-secondary/50 border border-border rounded-lg font-medium text-foreground transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-600 hover:to-cyan-600 hover:border-transparent hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-secondary/50 disabled:hover:shadow-none"
          >
            {product.inStock ? "Comprar Agora" : "Indisponível"}
          </button>
        </div>
      </div>
    </div>
  )
}
