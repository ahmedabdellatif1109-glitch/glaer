import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const categories = [
  {
    id: 'poles',
    label: '01',
    name: 'Poles',
    tagline: 'Carbon fibre. Featherlight.',
    description: '30ft reach at 2.4 lbs bare — built for full days on the job without the arm burn.',
    image: 'https://xeroproducts.com/cdn/shop/files/Water-Fed-Poles-Block-Home-Page-2025_1280x960.jpg',
    href: '#products',
    span: 'lg:col-span-2',
  },
  {
    id: 'brushes',
    label: '02',
    name: 'Brushes',
    tagline: 'Hybrid. One pass.',
    description: 'Agitates and rinses in a single stroke. Every package ships with one.',
    image: 'https://xeroproducts.com/cdn/shop/files/Water-Fed-Brushes-Block-Home-Page-2025_1088x816.jpg',
    href: '#products',
    span: 'lg:col-span-1',
  },
  {
    id: 'hose',
    label: '03',
    name: 'Hose',
    tagline: "100 feet. Ready to run.",
    description: "Supply hose included in every kit — no separate order, no missing parts.",
    image: 'https://xeroproducts.com/cdn/shop/files/Hose-Home-Page-Block-2025_1280x960.jpg',
    href: '#products',
    span: 'lg:col-span-1',
  },
]

export default function Categories() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-10"
        >
          <div>
            <p className="text-red-600 text-xs font-semibold tracking-widest uppercase mb-2">
              What's in the kit
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-black tracking-tight">
              Shop by Category
            </h2>
          </div>
          <a
            href="#products"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-zinc-500 hover:text-black transition-colors group"
          >
            View all
            <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
        </motion.div>

        {/* Grid — big card left, two stacked right */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {categories.map((cat, i) => (
            <motion.a
              key={cat.id}
              href={cat.href}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl bg-zinc-100 ${cat.span} ${
                cat.id === 'poles' ? 'min-h-[420px]' : 'min-h-[200px]'
              }`}
            >
              {/* Image */}
              <img
                src={cat.image}
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/5 transition-opacity duration-300 group-hover:from-black/90" />

              {/* Content */}
              <div className="absolute inset-0 p-7 flex flex-col justify-between">
                {/* Top — number + arrow */}
                <div className="flex items-center justify-between">
                  <span className="text-white/40 text-xs font-bold tracking-widest">{cat.label}</span>
                  <span className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0 translate-x-2">
                    <ArrowRight size={14} className="text-white" />
                  </span>
                </div>

                {/* Bottom — name + tagline */}
                <div>
                  <p className="text-red-400 text-xs font-semibold tracking-widest uppercase mb-1">
                    {cat.tagline}
                  </p>
                  <h3 className="text-white font-black text-2xl md:text-3xl tracking-tight mb-2">
                    {cat.name}
                  </h3>
                  <p className={`text-white/60 text-sm leading-relaxed transition-all duration-300 ${
                    cat.id === 'poles' ? 'max-w-xs' : 'max-w-[220px]'
                  } opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0`}>
                    {cat.description}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Mobile view all */}
        <div className="sm:hidden mt-6 text-center">
          <a href="#products" className="inline-flex items-center gap-1.5 text-sm font-semibold text-zinc-500 hover:text-black transition-colors">
            View all <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  )
}
