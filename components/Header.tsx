export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full px-6 py-4">
      <div className="max-w-7xl mx-auto glass rounded-xl px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <div className="flex items-center gap-2">
            <div className="size-8 text-primary">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z" fill="currentColor"></path>
              </svg>
            </div>
            <h1 className="text-xl font-black tracking-tighter uppercase">LUXE</h1>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Home</a>
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Shop</a>
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Collections</a>
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#">About</a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative hidden sm:block">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">search</span>
            <input 
              className="bg-white/5 border-white/10 rounded-lg pl-10 pr-4 py-1.5 text-sm focus:ring-primary focus:border-primary w-48 lg:w-64 outline-none" 
              placeholder="Search luxury..." 
              type="text"
            />
          </div>
          <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
            <span className="material-symbols-outlined">person</span>
          </button>
          <button className="p-2 hover:bg-white/10 rounded-lg transition-colors relative">
            <span className="material-symbols-outlined">shopping_cart</span>
            <span className="absolute top-1 right-1 size-4 bg-primary text-background-dark text-[10px] font-bold rounded-full flex items-center justify-center">3</span>
          </button>
        </div>
      </div>
    </header>
  );
}