import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, Zap, ShoppingCart, Package, Wrench } from 'lucide-react'
import { useCart } from '../context/CartContext'

const variants = {
  bundle: {
    id: 'glaer-30-bundle',
    name: 'GLAER 30',
    label: 'Pro Bundle',
    tagline: 'Everything you need, right out of the box.',
    badge: 'Most Popular',
    price: 0,
    variant: '30ft pole · Hybrid brush · 100ft hose',
    image: 'https://xeroproducts.com/cdn/shop/files/The-Best-Line-Of-Water-Fed-Poles_Large_d79a9f5f-d656-42b8-be03-315d5905094b_1280x853.jpg',
    thumbnails: [
      'https://xeroproducts.com/cdn/shop/files/Hose-Home-Page-Block-2025_1280x960.jpg',
      'https://xeroproducts.com/cdn/shop/files/Water-Fed-Brushes-Block-Home-Page-2025_1088x816.jpg',
    ],
    specs: [
      { label: 'Reach', value: "30'", sub: 'Full extension' },
      { label: 'Bare Weight', value: '2.4 lbs', sub: 'Pole only' },
      { label: 'Hose', value: "100'", sub: 'Supply hose included' },
      { label: 'Brush', value: 'Hybrid', sub: 'Agitate & rinse' },
    ],
    features: [
      '30ft high-modulus carbon fibre pole',
      'Hybrid brush — agitates and rinses in one pass',
      "100' supply hose, ready to connect",
      '2.4 lb bare weight — less arm fatigue on long routes',
      'All fittings included, no extra purchases needed',
      'Unbox it, connect it, get to work',
    ],
    description: 'The Pro Bundle is our complete, job-ready setup. Everything ships together — pole, hybrid brush, and 100 feet of supply hose — so you can unbox it, connect it, and start cleaning the same day. Built for window cleaners who want professional performance without the hassle of sourcing components separately.',
    shopifyVariantId: null,
  },
  unrigged: {
    id: 'glaer-30-unrigged',
    name: 'GLAER 30',
    label: 'Pro Unrigged',
    tagline: 'Just the pole. Bring your own setup.',
    badge: null,
    price: 0,
    variant: '30ft pole only',
    image: 'https://xeroproducts.com/cdn/shop/files/Water-Fed-Poles-Block-Home-Page-2025_1280x960.jpg',
    thumbnails: [],
    specs: [
      { label: 'Reach', value: "30'", sub: 'Full extension' },
      { label: 'Bare Weight', value: '2.4 lbs', sub: 'Pole only' },
      { label: 'Sections', value: '6', sub: 'Telescopic carbon' },
      { label: 'Material', value: 'CF', sub: 'High-modulus carbon' },
    ],
    features: [
      '30ft high-modulus carbon fibre pole',
      '2.4 lb bare weight — lightest in its class',
      'Compatible with standard WFP fittings and brushes',
      'Ideal for cleaners with existing brush & hose setups',
      'Same pole as the Pro Bundle — no compromise on build',
    ],
    description: 'The Pro Unrigged is the bare pole on its own — no brush, no hose. Perfect for experienced window cleaners who already have a preferred brush head and hose setup and just want the carbon fibre pole itself. Same high-modulus carbon construction as the Pro Bundle, at a lower entry point.',
    shopifyVariantId: null,
  },
}

export default function Products() {
  const { addToCart } = useCart()
  const [selected, setSelected] = useState('bundle')
  const [added, setAdded] = useState(false)

  const product = variants[selected]

  const handleAddToCart = () => {
    addToCart(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  const handleBuyNow = () => {
    addToCart(product)
  }

  return (
    <section id="products" className="relative py-28 overflow-hidden bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-red-600 text-sm font-semibold tracking-widest uppercase mb-4">
            The Package
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight mb-5">
            One pole. Zero compromises.{' '}
            <span className="shimmer-text">Ready to work.</span>
          </h2>
          <p className="text-zinc-500 text-lg max-w-2xl mx-auto">
            Choose the setup that fits how you work. Same pole, same carbon — your call on what comes with it.
          </p>
        </motion.div>

        {/* Variant toggle */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center mb-14"
        >
          <div className="inline-flex bg-white border border-zinc-200 rounded-2xl p-1.5 shadow-sm gap-1">
            {[
              { key: 'bundle', icon: Package, label: 'Pro Bundle', sub: 'Pole + Brush + Hose' },
              { key: 'unrigged', icon: Wrench, label: 'Pro Unrigged', sub: 'Pole only' },
            ].map((opt) => (
              <button
                key={opt.key}
                onClick={() => { setSelected(opt.key); setAdded(false) }}
                className={`relative flex items-center gap-3 px-6 py-3 rounded-xl transition-all duration-250 ${
                  selected === opt.key
                    ? 'bg-black text-white shadow-md'
                    : 'text-zinc-500 hover:text-black hover:bg-zinc-50'
                }`}
              >
                <opt.icon size={16} className={selected === opt.key ? 'text-red-400' : ''} />
                <div className="text-left">
                  <p className="text-sm font-bold leading-tight">{opt.label}</p>
                  <p className={`text-xs leading-tight ${selected === opt.key ? 'text-zinc-400' : 'text-zinc-400'}`}>{opt.sub}</p>
                </div>
                {opt.key === 'bundle' && selected === opt.key && (
                  <span className="absolute -top-2.5 -right-2.5 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                    Popular
                  </span>
                )}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Content — animates on switch */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selected}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start"
          >
            {/* Left — image card */}
            <div className="relative flex justify-center">
              <div className="relative w-full max-w-sm">
                <div className="relative rounded-3xl border border-zinc-200 bg-white p-8 shadow-xl overflow-hidden">
                  <div className="flex flex-col items-center gap-6">
                    {/* Main image */}
                    <div className="relative w-full rounded-xl overflow-hidden" style={{ height: '260px' }}>
                      <img
                        src={product.image}
                        alt={product.label}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
                    </div>

                    {/* Thumbnails — only for bundle */}
                    {product.thumbnails.length > 0 && (
                      <div className="flex gap-2 w-full">
                        {product.thumbnails.map((src, i) => (
                          <div key={i} className="flex-1 rounded-lg overflow-hidden h-16 border border-zinc-200">
                            <img src={src} alt="" className="w-full h-full object-cover" />
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Name + badge */}
                    <div className="text-center">
                      <p className="text-red-600 text-xs font-semibold tracking-widest uppercase mb-1">GLAER</p>
                      <h3 className="text-black text-3xl font-black tracking-tight">{product.name}</h3>
                      <p className="text-zinc-500 text-sm mt-1">{product.label}</p>
                    </div>

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-black text-white rounded-full px-5 py-2">
                      <Zap size={13} className="text-red-400" fill="currentColor" />
                      <span className="text-sm font-semibold">
                        {selected === 'bundle' ? 'Ready to Work' : 'Pole Only'}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="absolute -left-3 -bottom-3 w-16 h-16 border-l-2 border-b-2 border-red-600/30 rounded-bl-xl pointer-events-none" />
                <div className="absolute -right-3 -top-3 w-16 h-16 border-r-2 border-t-2 border-red-600/30 rounded-tr-xl pointer-events-none" />
              </div>
            </div>

            {/* Right — specs, features, CTAs */}
            <div>
              {/* Spec grid */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {product.specs.map((s) => (
                  <div key={s.label} className="bg-white border border-zinc-200 rounded-2xl p-5 shadow-sm">
                    <p className="text-red-600 text-2xl font-black mb-0.5">{s.value}</p>
                    <p className="text-black text-sm font-semibold">{s.label}</p>
                    <p className="text-zinc-400 text-xs mt-0.5">{s.sub}</p>
                  </div>
                ))}
              </div>

              {/* Feature list */}
              <ul className="space-y-3 mb-8">
                {product.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-red-600 flex items-center justify-center">
                      <Check size={11} className="text-white" strokeWidth={3} />
                    </div>
                    <span className="text-zinc-600 text-sm leading-relaxed">{feat}</span>
                  </li>
                ))}
              </ul>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <button
                  onClick={handleBuyNow}
                  className="group flex-1 inline-flex items-center justify-center gap-2.5 bg-black hover:bg-zinc-800 text-white font-semibold px-6 py-4 rounded-xl transition-all duration-200 shadow-lg hover:-translate-y-0.5"
                >
                  <Zap size={17} className="text-red-400" fill="currentColor" />
                  Buy Now
                </button>
                <button
                  onClick={handleAddToCart}
                  className={`group flex-1 inline-flex items-center justify-center gap-2.5 font-semibold px-6 py-4 rounded-xl border-2 transition-all duration-200 hover:-translate-y-0.5 ${
                    added
                      ? 'bg-green-50 border-green-500 text-green-700'
                      : 'bg-white border-red-600 text-red-600 hover:bg-red-600 hover:text-white'
                  }`}
                >
                  <ShoppingCart size={17} />
                  {added ? 'Added!' : 'Add to Cart'}
                </button>
              </div>

              {/* Description box */}
              <div className="bg-white border border-zinc-200 rounded-2xl p-5 shadow-sm">
                <p className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-2">
                  About this option
                </p>
                <p className="text-zinc-600 text-sm leading-relaxed">{product.description}</p>
              </div>

              <p className="text-zinc-400 text-xs mt-4">
                Pricing set at checkout · Custom configs available —{' '}
                <a href="#contact" className="text-red-600 hover:underline">just ask</a>
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
