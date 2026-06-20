import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Zap, ShoppingCart } from 'lucide-react'
import { useCart } from '../context/CartContext'

// TODO: Replace with real Shopify product variant ID when wiring backend
const GLAER_30_PRODUCT = {
  id: 'glaer-30',
  name: 'GLAER 30 — Complete Package',
  variant: '30ft pole · Hybrid brush · 100ft hose',
  price: 0, // Set real price when Shopify is connected
  image: 'https://xeroproducts.com/cdn/shop/files/The-Best-Line-Of-Water-Fed-Poles_Large_d79a9f5f-d656-42b8-be03-315d5905094b_1280x853.jpg',
  shopifyVariantId: null, // TODO: Add Shopify variant ID
}

const specs = [
  { label: 'Reach', value: "30'", sub: 'Full extension' },
  { label: 'Bare Weight', value: '2.4 lbs', sub: 'Pole only' },
  { label: 'Hose Included', value: "100'", sub: 'Supply hose' },
  { label: 'Brush', value: 'Hybrid', sub: 'Agitate & rinse' },
]

const features = [
  '30ft high-modulus carbon fibre pole',
  'Hybrid brush — agitates and rinses in one pass',
  "100' supply hose, ready to connect",
  '2.4 lb bare weight — less arm fatigue on long routes',
  'All fittings included, no extra purchases needed',
  'Unbox it, connect it, get to work',
]

export default function Products() {
  const { addToCart } = useCart()
  const [added, setAdded] = useState(false)

  const handleAddToCart = () => {
    addToCart(GLAER_30_PRODUCT)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  const handleBuyNow = () => {
    addToCart(GLAER_30_PRODUCT)
    // TODO: When Shopify is wired, redirect straight to checkout:
    // window.location.href = shopifyCheckoutUrl
  }
  return (
    <section id="products" className="relative py-28 overflow-hidden bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-red-600 text-sm font-semibold tracking-widest uppercase mb-4">
            The Package
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight mb-5">
            One pole. Zero compromises.{' '}
            <span className="shimmer-text">Ready to work.</span>
          </h2>
          <p className="text-zinc-500 text-lg max-w-2xl mx-auto">
            We don't sell you a bare pole and charge extra for everything else. The
            GLAER 30 ships complete — brush, hose, fittings — because your time
            is worth more than hunting for add-ons.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — product visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-sm">
              <div className="relative rounded-3xl border border-zinc-200 bg-white p-8 shadow-xl overflow-hidden">
                <div className="flex flex-col items-center gap-6 relative z-10">
                  {/* Main pole photo */}
                  <div className="relative w-full rounded-xl overflow-hidden" style={{ height: '260px' }}>
                    <img
                      src="https://xeroproducts.com/cdn/shop/files/The-Best-Line-Of-Water-Fed-Poles_Large_d79a9f5f-d656-42b8-be03-315d5905094b_1280x853.jpg"
                      alt="Water-fed pole package"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent" />
                  </div>

                  {/* Thumbnail row */}
                  <div className="flex gap-2 w-full">
                    {[
                      'https://xeroproducts.com/cdn/shop/files/Hose-Home-Page-Block-2025_1280x960.jpg',
                      'https://xeroproducts.com/cdn/shop/files/Water-Fed-Brushes-Block-Home-Page-2025_1088x816.jpg',
                    ].map((src, i) => (
                      <div key={i} className="flex-1 rounded-lg overflow-hidden h-16 border border-zinc-200">
                        <img src={src} alt="" className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>

                  {/* Product name */}
                  <div className="text-center">
                    <p className="text-red-600 text-xs font-semibold tracking-widest uppercase mb-1">GLAER</p>
                    <h3 className="text-black text-3xl font-black tracking-tight">GLAER 30</h3>
                    <p className="text-zinc-500 text-sm mt-1">Complete Package</p>
                  </div>

                  {/* Ready to work badge */}
                  <div className="inline-flex items-center gap-2 bg-black text-white rounded-full px-5 py-2">
                    <Zap size={13} className="text-red-400" fill="currentColor" />
                    <span className="text-sm font-semibold">Ready to Work</span>
                  </div>
                </div>
              </div>

              {/* Decorative corners */}
              <div className="absolute -left-3 -bottom-3 w-16 h-16 border-l-2 border-b-2 border-red-600/30 rounded-bl-xl pointer-events-none" />
              <div className="absolute -right-3 -top-3 w-16 h-16 border-r-2 border-t-2 border-red-600/30 rounded-tr-xl pointer-events-none" />
            </div>
          </motion.div>

          {/* Right — specs + features */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Spec grid */}
            <div className="grid grid-cols-2 gap-3 mb-10">
              {specs.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="bg-white border border-zinc-200 rounded-2xl p-5 shadow-sm"
                >
                  <p className="text-red-600 text-2xl font-black mb-0.5">{s.value}</p>
                  <p className="text-black text-sm font-semibold">{s.label}</p>
                  <p className="text-zinc-400 text-xs mt-0.5">{s.sub}</p>
                </motion.div>
              ))}
            </div>

            {/* Feature list */}
            <ul className="space-y-3 mb-10">
              {features.map((feat, i) => (
                <motion.li
                  key={feat}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-red-600 flex items-center justify-center">
                    <Check size={11} className="text-white" strokeWidth={3} />
                  </div>
                  <span className="text-zinc-600 text-sm leading-relaxed">{feat}</span>
                </motion.li>
              ))}
            </ul>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
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

            <p className="text-zinc-400 text-xs mt-4">
              Pricing set at checkout · Custom configs available — <a href="#contact" className="text-red-600 hover:underline">just ask</a>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
