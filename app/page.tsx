import React from 'react';
import Hero from '../components/Hero.tsx';
import Navbar from '../components/Navbar.tsx';

export default function HomePage() {
  return (
    <>
   <Navbar />

      <main className="max-w-7xl mx-auto px-6 pb-20">
   <Hero />

        {/* Featured Collection */}
        <div className="mt-20 mb-8 flex items-end justify-between px-2">
          <div>
            <span className="text-primary text-sm font-bold uppercase tracking-widest">New Arrivals</span>
            <h3 className="text-3xl font-bold mt-1">Featured Collection</h3>
          </div>
          <a className="text-sm font-semibold text-primary hover:underline flex items-center gap-1" href="#">
            View all items <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ProductCard title="Crystal Decanter" category="Home Decor" price="450.00" />
          <ProductCard title="Aura Minimalist" category="Timepieces" price="1,200.00" />
          <SkeletonCard />
          <SkeletonCard opacity="opacity-40" />
        </div>
      </main>
    </>
  );
}

function ProductCard({ title, category, price }: { title: string, category: string, price: string }) {
  return (
    <div className="glass p-3 rounded-2xl group cursor-pointer hover:border-primary/50 transition-all duration-300">
      <div className="relative aspect-square rounded-xl overflow-hidden mb-4 bg-slate-800">
        <div className="absolute top-3 right-3 glass p-1.5 rounded-full">
          <span className="material-symbols-outlined text-sm">favorite</span>
        </div>
      </div>
      <div className="px-2 pb-2">
        <p className="text-slate-400 text-xs font-medium uppercase tracking-tighter">{category}</p>
        <h4 className="text-white font-semibold text-lg group-hover:text-primary transition-colors">{title}</h4>
        <div className="flex items-center justify-between mt-2">
          <span className="text-white font-bold">${price}</span>
          <button className="bg-white/10 hover:bg-primary hover:text-background-dark p-2 rounded-lg transition-all">
            <span className="material-symbols-outlined text-lg">add_shopping_cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}

function SkeletonCard({ opacity = "opacity-60" }: { opacity?: string }) {
  return (
    <div className={`glass p-3 rounded-2xl ${opacity}`}>
      <div className="aspect-square rounded-xl shimmer bg-white/5 mb-4"></div>
      <div className="px-2 space-y-3">
        <div className="h-3 w-1/3 bg-white/5 rounded shimmer"></div>
        <div className="h-5 w-3/4 bg-white/10 rounded shimmer"></div>
        <div className="flex justify-between items-center pt-2">
          <div className="h-6 w-1/4 bg-white/10 rounded shimmer"></div>
          <div className="size-8 bg-white/10 rounded-lg shimmer"></div>
        </div>
      </div>
    </div>
  );
}