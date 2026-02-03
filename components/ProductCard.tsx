import { Heart, ShoppingCart } from "lucide-react";

export interface Product {
  id: number;
  category?: string;
  name: string;
  price: string;
  image: string;
  alt: string;
  badge?: string;
  description?: string;
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="glass p-3 rounded-2xl group cursor-pointer hover:border-primary/50 transition-all duration-300">
      <div className="relative aspect-square rounded-xl overflow-hidden mb-4">
        <div 
          className="absolute inset-0 bg-slate-800 animate-pulse group-hover:scale-110 transition-transform duration-500 bg-cover bg-center"
          style={{ backgroundImage: `url(${product.image})` }}
          aria-label={product.alt}
        ></div>
        {product.id === 1 && (
          <div className="absolute top-3 right-3 glass p-1.5 rounded-full">
            <Heart className="size-4 text-white" />
          </div>
        )}
      </div>
      <div className="px-2 pb-2">
        <p className="text-slate-400 text-xs font-medium uppercase tracking-tighter">{product.category}</p>
        <h4 className="text-white font-semibold text-lg group-hover:text-primary transition-colors">{product.name}</h4>
        <div className="flex items-center justify-between mt-2">
          <span className="text-white font-bold">{product.price}</span>
          <button className="bg-white/10 hover:bg-primary hover:text-background-dark p-2 rounded-lg transition-all">
            <ShoppingCart className="size-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export function TrendingProductCard({ product }: { product: Product }) {
  return (
    <div className="glass p-6 rounded-3xl flex gap-6 items-center group">
      <div className="size-48 rounded-2xl overflow-hidden shrink-0">
        <div 
          className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
          style={{ backgroundImage: `url(${product.image})` }}
          aria-label={product.alt}
        ></div>
      </div>
      <div>
        <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">{product.badge}</span>
        <h4 className="text-2xl font-bold mt-3 mb-2">{product.name}</h4>
        <p className="text-slate-400 text-sm mb-4 line-clamp-2">{product.description}</p>
        <p className="text-primary font-bold text-xl mb-4">{product.price}</p>
        <button className="border border-white/20 hover:border-primary hover:bg-primary/10 px-6 py-2 rounded-lg text-sm font-semibold transition-all">Details</button>
      </div>
    </div>
  );
}
