import { ArrowRight, Heart, ShoppingCart } from "lucide-react";

interface Product {
  id: number;
  category?: string;
  name: string;
  price: string;
  image: string;
  alt: string;
  badge?: string;
  description?: string;
}

export default function Home() {
  const products: Product[] = [
    {
      id: 1,
      category: "Home Decor",
      name: "Crystal Decanter",
      price: "$450.00",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBihHeu9hAAJeMKMeTyA8DsQnTjbgVl0g2lG4CHUzTXmtZ7Amr3W4P2trDfeqTEHno5ViR4FDB8JSTfers5z7l3xMVlIKGTASM3-_5PiMQ0u5r_EHXIbxAngespsbk5nCJRYZ0LBx9sVsxVZYFct2XYtf8mylQEzaUu4TgkLPioN90XgC3G5JYzyvpQ2u6Aa_D_4UyLwH9HMXNEJ3ZCIUrJ7YFHuVVpbDlSjfPjmKrnERWydxiz0nbfzcs2m6cYLaGXtJFhXj33TX4",
      alt: "Close up of a luxury crystal decanter"
    },
    {
      id: 2,
      category: "Timepieces",
      name: "Aura Minimalist",
      price: "$1,200.00",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuACkrh5BMvVQ5MVqfsjPPfFPeA0ihrIVWlA5pxOkL08mgHq_wJt17-Xi2R-EOYdQrAx49D2cAgMP75EdnQbvFRI0FuXMOAnSKUgwRxJx3BZlbKwKgQO3a1V54o0DItbgKgznP1UNC7SGsQDffBS8A71ND-trKrkgC_IywEEcGPfa-P62Dt5Tg1pLwEYi59qFY1HPYCVPFcFNSOWvSkq8u40LiHk4p5jk_pQDFqod8BciEdw4CaMJ-8ImyXGd-7Nc5MsTzcu-2550XU",
      alt: "Minimalist titanium wristwatch on dark background"
    }
  ];

  const trendingProducts: Product[] = [
    {
      id: 1,
      badge: "Editor's Choice",
      name: "Executive Portfolio",
      description: "Hand-stitched Italian leather with dedicated compartments for your digital lifestyle essentials.",
      price: "$320.00",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDrFHae5CkBbVB_8XxDE6xUKCKYklMvfMPG4HwIbNqQ9vQ82vaR2JHtp99Q3oHz7SAvlA14WAm-6YKCjrwl_J5GXGeVfShu5t4bcKUr0Uzjude-rfeM7FIlojJCS_1oGwFzRPrs3aQhCfD-86bZhLT0Pe5VkXYMbWaOA-7TwuG7JaDb22v1bQMxnmbbvqp5Az_CzQFqC6ElgI_vOCtRJPKoXZNHEsCigayRfLrXDPZVXc_LCbEyCzBECtu6We64bw9DEXMOPDz44-4",
      alt: "High-end leather workstation portfolio"
    },
    {
      id: 2,
      badge: "Luxury Fragrance",
      name: "Aura No. 7",
      description: "An ethereal blend of sandalwood, dark orchid, and rare spices for a lasting impression.",
      price: "$185.00",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDD4MbcsfUxGyLcW3AfXQU0tCz2zJ7wM3Y_0yByNWCvAlHRccP4q383V27HmvFfko3FHnNvviVLCXsKukMX6IEFILHhmOVsgibhAh2SHxrPWYGuNgStPqBetMFbFIFewIFHeyKpTAyQkrQeTPkOvtcDO0wIJ-BDoyKe1GCoenwjIxPVkv0hB7rV0jn6ohS3-_dsUbROCUJTAS3PPfnIT7cjxgT-XAQ5-x-aIR1L_R264u8b_3gkvVJ3kQ2UJwFeLIS8lOx0yAosIdo",
      alt: "Artistic perfume bottle with emerald glow"
    }
  ];

  return (
    <>
   
      <main className="max-w-7xl mx-auto px-6 pb-20">
        {/* Hero Section */}
        <section className="mt-4 rounded-3xl overflow-hidden relative">
          <div className="hero-gradient min-h-[500px] flex flex-col items-center justify-center text-center p-8">
            <div className="glass p-10 rounded-3xl border-white/20">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight leading-none">
                Elevate Your <span className="text-primary">Space</span>
              </h2>
              <p className="text-slate-300 text-lg mb-8 font-light">
                Experience the pinnacle of luxury with our curated collection of premium goods, designed for the modern connoisseur.
              </p>
              <button className="bg-primary text-background-dark px-10 py-4 rounded-xl font-bold text-lg hover:shadow-[0_0_30px_rgba(13,242,166,0.4)] transition-all transform hover:-translate-y-1">
                Shop Collection
              </button>
            </div>
          </div>
        </section>

        {/* Product Grid Header */}
        <div className="mt-20 mb-8 flex items-end justify-between px-2">
          <div>
            <span className="text-primary text-sm font-bold uppercase tracking-widest">New Arrivals</span>
            <h3 className="text-3xl font-bold mt-1">Featured Collection</h3>
          </div>
          <a className="text-sm font-semibold text-primary hover:underline flex items-center gap-1" href="#">
            View all items <ArrowRight className="size-4" />
          </a>
        </div>

        {/* Glassmorphic Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          
          {/* Skeleton Loaders */}
          <div className="glass p-3 rounded-2xl opacity-60">
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
          
          <div className="glass p-3 rounded-2xl opacity-40">
            <div className="aspect-square rounded-xl shimmer bg-white/5 mb-4"></div>
            <div className="px-2 space-y-3">
              <div className="h-3 w-1/4 bg-white/5 rounded shimmer"></div>
              <div className="h-5 w-2/3 bg-white/10 rounded shimmer"></div>
              <div className="flex justify-between items-center pt-2">
                <div className="h-6 w-1/5 bg-white/10 rounded shimmer"></div>
                <div className="size-8 bg-white/10 rounded-lg shimmer"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Grid: Trending */}
        <div className="mt-20 mb-8 px-2">
          <h3 className="text-3xl font-bold">Trending Now</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {trendingProducts.map((product) => (
            <TrendingProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
 
    </>
  );
}

function ProductCard({ product }: { product: Product }) {
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

function TrendingProductCard({ product }: { product: Product }) {
  return (
    <div className="glass p-6 rounded-3xl flex gap-6 items-center group">
      <div className="size-48 rounded-2xl overflow-hidden flex-shrink-0">
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