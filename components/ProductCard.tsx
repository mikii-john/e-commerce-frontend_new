type ProductCardProps = {
  title: string
  category: string
  price: string
  image: string
}

export default function ProductCard({
  title,
  category,
  price,
  image,
}: ProductCardProps) {
  return (
    <div className="glass p-3 rounded-2xl group cursor-pointer hover:border-primary/50 transition-all">
      <div
        className="relative aspect-square rounded-xl overflow-hidden mb-4 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="px-2 pb-2">
        <p className="text-slate-400 text-xs uppercase">{category}</p>
        <h4 className="text-white font-semibold text-lg group-hover:text-primary transition-colors">
          {title}
        </h4>
        <div className="flex items-center justify-between mt-2">
          <span className="text-white font-bold">{price}</span>
          <button className="bg-white/10 hover:bg-primary hover:text-background-dark p-2 rounded-lg transition-all">
            +
          </button>
        </div>
      </div>
    </div>
  )
}
