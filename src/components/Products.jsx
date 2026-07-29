import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, Zap, ShoppingCart, Package, Wrench, ArrowRight } from 'lucide-react'
import { useCart } from '../context/CartContext'

const BASE = import.meta.env.BASE_URL

/* ── Poles ──────────────────────────────────────────────── */
const poleVariants = {
  bundle: {
    id: 'glaer-30-bundle',
    name: 'GLAER 30',
    label: 'GLAER Rigged',
    tagline: 'Everything you need, right out of the box.',
    badge: 'Most Popular',
    price: 0,
    variant: '30ft pole · Hybrid brush · 50ft hose',
    image: `${BASE}wfp-action.jpg`,
    thumbnails: [
      'https://xeroproducts.com/cdn/shop/files/Hose-Home-Page-Block-2025_1280x960.jpg',
      'https://xeroproducts.com/cdn/shop/files/Water-Fed-Brushes-Block-Home-Page-2025_1088x816.jpg',
    ],
    specs: [
      { label: 'Reach', value: "30'", sub: 'Full extension' },
      { label: 'Bare Weight', value: '2.4 lbs', sub: 'Pole only' },
      { label: 'Hose', value: "50'", sub: "50' of hose included" },
      { label: 'Brush', value: 'Hybrid', sub: 'Agitate & rinse' },
    ],
    features: [
      '30ft high-modulus carbon fibre pole',
      'Hybrid brush — agitates and rinses in one pass',
      "50' 8mm supply hose, ready to connect",
      '2.4 lb bare weight — less arm fatigue on long routes',
      'All fittings included, no extra purchases needed',
      'Unbox it, connect it, get to work',
    ],
    description: 'The GLAER Rigged is our complete, job-ready setup. Everything ships together — pole, hybrid brush, and 50 feet of 8mm supply hose — so you can unbox it, connect it, and start cleaning the same day.',
    shopifyVariantId: null,
  },
  unrigged: {
    id: 'glaer-30-unrigged',
    name: 'GLAER 30',
    label: 'GLAER Unrigged',
    tagline: 'Just the pole. Bring your own setup.',
    badge: null,
    price: 0,
    variant: '30ft pole only',
    image: `${BASE}wfp-action.jpg`,
    thumbnails: [],
    specs: [
      { label: 'Reach', value: "30'", sub: 'Full extension' },
      { label: 'Bare Weight', value: '2.4 lbs', sub: 'Pole only' },
      { label: 'Sections', value: '7', sub: 'Telescopic carbon fibre' },
    ],
    features: [
      '30ft high-modulus carbon fibre pole',
      '7-section telescopic build for a longer, smoother reach',
      '2.4 lb bare weight — lightest in its class',
      'Compatible with standard WFP fittings and brushes',
      'Ideal for cleaners with existing brush & hose setups',
      'Same pole as the GLAER Rigged — no compromise on build',
    ],
    description: 'The bare pole on its own — no brush, no hose. 7 sections of high-modulus carbon fibre, built for cleaners who already have their setup dialled in.',
    shopifyVariantId: null,
  },
}

/* ── Brushes ─────────────────────────────────────────────── */
const brushProducts = [
  {
    id: 'glaer-hybrid-brush',
    name: 'GLAER Hybrid Brush',
    tagline: 'Agitate and rinse in one pass.',
    price: 0,
    image: 'https://xeroproducts.com/cdn/shop/files/Water-Fed-Brushes-Block-Home-Page-2025_1088x816.jpg',
    specs: [
      { label: 'Type', value: 'Hybrid', sub: 'Pencil-jet + fan bristles' },
      { label: 'Neck', value: 'Trim', sub: 'Low-profile for tight windows' },
      { label: 'Jets', value: '4', sub: 'Even rinse coverage' },
      { label: 'Fit', value: 'Std', sub: 'Universal WFP thread' },
    ],
    features: [
      'Pencil jets for targeted rinsing on tough spots',
      'Fan bristles agitate glass in a single stroke',
      'Low-profile trim neck — reaches tight frames',
      'Universal thread fits any standard WFP pole',
      'Included in the GLAER Rigged',
    ],
    description: 'The GLAER Hybrid Brush is designed to do the job in one pass. Pencil jets hit where the water needs to go, fan bristles do the agitation — no doubling back, no wasted time.',
  },
]

/* ── Hoses ───────────────────────────────────────────────── */
const hoseProducts = [
  {
    id: 'glaer-supply-hose',
    name: "GLAER 50' Supply Hose",
    tagline: 'Ready to connect. Built to last.',
    price: 0,
    image: 'https://xeroproducts.com/cdn/shop/files/Hose-Home-Page-Block-2025_1280x960.jpg',
    specs: [
      { label: 'Length', value: "50'", sub: 'Ready to run' },
      { label: 'Diameter', value: '8mm', sub: 'Standard supply bore' },
      { label: 'Connectors', value: 'Std', sub: 'Quick-connect fittings' },
      { label: 'Rating', value: 'Pro', sub: 'Pressure-rated, kink-resistant' },
    ],
    features: [
      "50 feet of 8mm supply hose — ready out of the box",
      'Kink-resistant construction for all-day use',
      'Quick-connect fittings on both ends',
      'Works with any standard WFP system',
      'Included in the GLAER Rigged',
    ],
    description: "50 feet of 8mm supply hose that comes ready to connect. No sourcing parts separately, no messing with fittings — it's included in the GLAER Rigged or available on its own.",
  },
]

/* ── Sub-nav ─────────────────────────────────────────────── */
const sections = [
  { id: 'poles', label: 'Poles' },
  { id: 'brushes', label: 'Brushes' },
  { id: 'hoses', label: 'Hoses' },
]

/* ── Reusable product card (brushes & hoses) ─────────────── */
function SimpleProductCard({ product }) {
  const { addToCart } = useCart()
  const [added, setAdded] = useState(false)

  const handleAdd = () => {
    addToCart(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6 }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start"
    >
      {/* Image */}
      <div className="relative rounded-3xl border border-zinc-200 bg-white shadow-xl overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full aspect-[4/3] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
      </div>

      {/* Details */}
      <div>
        <p className="text-red-600 text-xs font-semibold tracking-widest uppercase mb-2">GLAER</p>
        <h3 className="text-3xl font-black text-black tracking-tight mb-1">{product.name}</h3>
        <p className="text-zinc-500 mb-8">{product.tagline}</p>

        {/* Specs */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          {product.specs.map((s) => (
            <div key={s.label} className="bg-zinc-50 border border-zinc-200 rounded-2xl p-5">
              <p className="text-red-600 text-2xl font-black mb-0.5">{s.value}</p>
              <p className="text-black text-sm font-semibold">{s.label}</p>
              <p className="text-zinc-400 text-xs mt-0.5">{s.sub}</p>
            </div>
          ))}
        </div>

        {/* Features */}
        <ul className="space-y-3 mb-8">
          {product.features.map((f) => (
            <li key={f} className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-red-600 flex items-center justify-center">
                <Check size={11} className="text-white" strokeWidth={3} />
              </div>
              <span className="text-zinc-600 text-sm leading-relaxed">{f}</span>
            </li>
          ))}
        </ul>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <button
            onClick={handleAdd}
            className={`group flex-1 inline-flex items-center justify-center gap-2.5 font-semibold px-6 py-4 rounded-xl border-2 transition-all duration-200 hover:-translate-y-0.5 ${
              added
                ? 'bg-green-50 border-green-500 text-green-700'
                : 'bg-white border-red-600 text-red-600 hover:bg-red-600 hover:text-white'
            }`}
          >
            <ShoppingCart size={17} />
            {added ? 'Added!' : 'Add to Cart'}
          </button>
          <a
            href="#contact"
            className="group flex-1 inline-flex items-center justify-center gap-2 bg-black hover:bg-zinc-800 text-white font-semibold px-6 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
          >
            Get a Quote
            <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        <div className="bg-white border border-zinc-200 rounded-2xl p-5">
          <p className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-2">About</p>
          <p className="text-zinc-600 text-sm leading-relaxed">{product.description}</p>
        </div>
      </div>
    </motion.div>
  )
}

/* ── Main export ─────────────────────────────────────────── */
export default function Products() {
  const { addToCart } = useCart()
  const [selected, setSelected] = useState('bundle')
  const [added, setAdded] = useState(false)

  const product = poleVariants[selected]

  const handleAddToCart = () => {
    addToCart(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div id="products" className="bg-zinc-50">

      {/* ── Sticky sub-nav ── */}
      <div className="sticky top-16 z-40 bg-white/95 backdrop-blur border-b border-zinc-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-1 overflow-x-auto py-1 scrollbar-none">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="flex-shrink-0 text-sm font-semibold text-zinc-500 hover:text-black px-5 py-3 rounded-lg hover:bg-zinc-50 transition-all duration-200 relative group"
              >
                {s.label}
                <span className="absolute bottom-1 left-5 right-5 h-0.5 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left rounded-full" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ══ POLES ══════════════════════════════════════════════ */}
      <section id="poles" className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p className="text-red-600 text-xs font-semibold tracking-widest uppercase mb-2">Poles</p>
            <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight mb-4">
              GLAER 30'
            </h2>
            <p className="text-zinc-500 text-lg max-w-xl">
              30 feet. 2.4 lbs. Choose what comes with it.
            </p>
          </motion.div>

          {/* Variant toggle */}
          <div className="flex mb-12">
            <div className="inline-flex bg-white border border-zinc-200 rounded-2xl p-1.5 shadow-sm gap-1">
              {[
                { key: 'bundle', icon: Package, label: 'GLAER Rigged', sub: 'Pole + Brush + Hose' },
                { key: 'unrigged', icon: Wrench, label: 'GLAER Unrigged', sub: 'Pole only' },
              ].map((opt) => (
                <button
                  key={opt.key}
                  onClick={() => { setSelected(opt.key); setAdded(false) }}
                  className={`relative flex items-center gap-3 px-6 py-3 rounded-xl transition-all duration-200 ${
                    selected === opt.key
                      ? 'bg-black text-white shadow-md'
                      : 'text-zinc-500 hover:text-black hover:bg-zinc-50'
                  }`}
                >
                  <opt.icon size={16} className={selected === opt.key ? 'text-red-400' : ''} />
                  <div className="text-left">
                    <p className="text-sm font-bold leading-tight">{opt.label}</p>
                    <p className="text-xs text-zinc-400 leading-tight">{opt.sub}</p>
                  </div>
                  {opt.key === 'bundle' && selected === opt.key && (
                    <span className="absolute -top-2.5 -right-2.5 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                      Popular
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={selected}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start"
            >
              {/* Image card */}
              <div className="relative flex justify-center">
                <div className="relative w-full max-w-lg">
                  <div className="relative rounded-3xl border border-zinc-200 bg-white p-8 shadow-xl overflow-hidden">
                    <div className="flex flex-col items-center gap-6">
                      <div className="relative w-full rounded-xl overflow-hidden" style={{ height: '340px' }}>
                        <img src={product.image} alt={product.label} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
                      </div>
                      {product.thumbnails.length > 0 && (
                        <div className="flex gap-2 w-full">
                          {product.thumbnails.map((src, i) => (
                            <div key={i} className="flex-1 rounded-lg overflow-hidden h-16 border border-zinc-200">
                              <img src={src} alt="" className="w-full h-full object-cover" />
                            </div>
                          ))}
                        </div>
                      )}
                      <div className="text-center">
                        <p className="text-red-600 text-xs font-semibold tracking-widest uppercase mb-1">GLAER</p>
                        <h3 className="text-black text-3xl font-black tracking-tight">{product.name}</h3>
                        <p className="text-zinc-500 text-sm mt-1">{product.label}</p>
                      </div>
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

              {/* Specs + features */}
              <div>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {product.specs.map((s) => (
                    <div key={s.label} className="bg-white border border-zinc-200 rounded-2xl p-5 shadow-sm">
                      <p className="text-red-600 text-2xl font-black mb-0.5">{s.value}</p>
                      <p className="text-black text-sm font-semibold">{s.label}</p>
                      <p className="text-zinc-400 text-xs mt-0.5">{s.sub}</p>
                    </div>
                  ))}
                </div>
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
                <div className="flex flex-col sm:flex-row gap-3 mb-6">
                  <button
                    onClick={handleAddToCart}
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
                <div className="bg-white border border-zinc-200 rounded-2xl p-5 shadow-sm">
                  <p className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-2">About this option</p>
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

      {/* Divider */}
      <div className="border-t border-zinc-200" />

      {/* ══ BRUSHES ════════════════════════════════════════════ */}
      <section id="brushes" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p className="text-red-600 text-xs font-semibold tracking-widest uppercase mb-2">Brushes</p>
            <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight mb-4">
              Hybrid Brush
            </h2>
            <p className="text-zinc-500 text-lg max-w-xl">
              One pass. Clean glass.
            </p>
          </motion.div>
          {brushProducts.map((p) => (
            <SimpleProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-zinc-200" />

      {/* ══ HOSES ══════════════════════════════════════════════ */}
      <section id="hoses" className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p className="text-red-600 text-xs font-semibold tracking-widest uppercase mb-2">Hoses</p>
            <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight mb-4">
              Supply Hose
            </h2>
            <p className="text-zinc-500 text-lg max-w-xl">
              50 feet. Ready out of the box.
            </p>
          </motion.div>
          {hoseProducts.map((p) => (
            <SimpleProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

    </div>
  )
}
