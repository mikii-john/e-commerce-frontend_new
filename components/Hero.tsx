export default function Hero() {
  return (
    <section className="mt-4 rounded-3xl overflow-hidden relative">
      <div className="hero-gradient min-h-[500px] flex items-center justify-center text-center p-8">
        <div className="max-w-2xl glass p-10 rounded-3xl border-white/20">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
            Elevate Your <span className="text-primary">Space</span>
          </h2>
          <p className="text-slate-300 text-lg mb-8 font-light">
            Experience the pinnacle of luxury with our curated collection.
          </p>
          <button className="bg-primary text-background-dark px-10 py-4 rounded-xl font-bold text-lg hover:shadow-[0_0_30px_rgba(13,242,166,0.4)] transition-all hover:-translate-y-1">
            Shop Collection
          </button>
        </div>
      </div>
    </section>
  )
}
