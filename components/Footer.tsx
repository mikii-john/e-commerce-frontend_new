export default function Footer() {
  const shopLinks = [
    { name: "New Arrivals", href: "#" },
    { name: "Best Sellers", href: "#" },
    { name: "Exclusive Packs", href: "#" },
    { name: "Gift Cards", href: "#" },
  ];

  const supportLinks = [
    { name: "Order Tracking", href: "#" },
    { name: "Returns & Refunds", href: "#" },
    { name: "Care Guide", href: "#" },
    { name: "Contact Us", href: "#" },
  ];

  return (
    <footer className="mt-20 border-t border-white/5 bg-background-dark py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="size-6 text-primary">
                <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z" fill="currentColor"></path>
                </svg>
              </div>
              <h2 className="text-lg font-black tracking-tighter uppercase">LUXE</h2>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Defining modern elegance through meticulously crafted luxury goods.
            </p>
          </div>
          <div>
            <h5 className="text-white font-bold mb-4">Shop</h5>
            <ul className="space-y-2 text-sm text-slate-400">
              {shopLinks.map((link) => (
                <li key={link.name}>
                  <a className="hover:text-primary transition-colors" href={link.href}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="text-white font-bold mb-4">Support</h5>
            <ul className="space-y-2 text-sm text-slate-400">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <a className="hover:text-primary transition-colors" href={link.href}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="text-white font-bold mb-4">Newsletter</h5>
            <p className="text-slate-400 text-sm mb-4">Join our elite circle for exclusive previews.</p>
            <div className="flex gap-2">
              <input 
                className="bg-white/5 border-white/10 rounded-lg text-sm px-4 py-2 flex-1 focus:ring-primary focus:border-primary outline-none" 
                placeholder="Email" 
                type="email"
              />
              <button className="bg-primary text-background-dark p-2 rounded-lg">
                <span className="material-symbols-outlined">send</span>
              </button>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 uppercase tracking-widest">
          <p>© 2024 LUXE ATELIER. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a className="hover:text-white" href="#">Privacy Policy</a>
            <a className="hover:text-white" href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}