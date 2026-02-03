export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/5 bg-background-dark py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="size-6 text-primary">
                <svg viewBox="0 0 48 48" fill="currentColor">
                  <path d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z" />
                </svg>
              </div>
              <h2 className="text-lg font-black tracking-tighter uppercase">
                LUXE
              </h2>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Defining modern elegance through meticulously crafted luxury goods.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h5 className="text-white font-bold mb-4">Shop</h5>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a className="hover:text-primary" href="#">New Arrivals</a></li>
              <li><a className="hover:text-primary" href="#">Best Sellers</a></li>
              <li><a className="hover:text-primary" href="#">Exclusive Packs</a></li>
              <li><a className="hover:text-primary" href="#">Gift Cards</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h5 className="text-white font-bold mb-4">Support</h5>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a className="hover:text-primary" href="#">Order Tracking</a></li>
              <li><a className="hover:text-primary" href="#">Returns & Refunds</a></li>
              <li><a className="hover:text-primary" href="#">Care Guide</a></li>
              <li><a className="hover:text-primary" href="#">Contact Us</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h5 className="text-white font-bold mb-4">Newsletter</h5>
            <p className="text-slate-400 text-sm mb-4">
              Join our elite circle for exclusive previews.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 bg-white/5 border border-white/10 rounded-lg text-sm px-4 py-2 outline-none focus:border-primary"
              />
              <button className="bg-primary text-background-dark px-4 rounded-lg font-bold">
                →
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 uppercase tracking-widest">
          <p>© 2024 LUXE ATELIER. All rights reserved.</p>
          <div className="flex gap-8">
            <a className="hover:text-white" href="#">Privacy Policy</a>
            <a className="hover:text-white" href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
