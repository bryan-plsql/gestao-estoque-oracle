"use client"

import { useState, useEffect } from "react"
import { ProductCard, type Product } from "./product-card"
import { Filter, ChevronDown } from "lucide-react"

// Exportação NOMEADA para evitar o erro de "undefined"
export function ProductGrid() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("https://ga4e8095ca61a71-dbestudos.adb.sa-vinhedo-1.oraclecloudapps.com/ords/dbapex/api/produtos/");
        const data = await response.json();
        
        if (data && data.items) {
          const formattedProducts = data.items.map((item: any) => ({
            id: item.id_produto ? item.id_produto.toString() : Math.random().toString(),
            name: item.nome || "Produto sem nome",
            description: item.descricao || "Smartphone Gamer de alta performance.",
            price: item.preco || 0,
            originalPrice: (item.preco || 0) * 1.2,
            image: item.url_imagem || "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400",
            rating: 5,
            reviews: 128,
            badge: "Premium",
            inStock: true
          }));
          setProducts(formattedProducts);
        }
      } catch (error) {
        console.error("Erro na API Oracle:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  if (loading) return <div className="text-white text-center py-20 font-bold animate-pulse">Conectando ao Banco Oracle...</div>;

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-8">Produtos <span className="text-purple-400">Nexus</span></h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}