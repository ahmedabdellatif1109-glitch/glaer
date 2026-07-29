import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white"
    >
      {/* Subtle grid */}
      <div className="absolute inset-0 grid-pattern" />
      {/* Subtle red radial at top */}
      <div className="absolute inset-0 red-radial" />

      {/* Floating orbs */}
      <motion.div
        animate={{ y: [0, -20, 0], opacity: [0.15, 0.35, 0.15] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-28 right-[15%] w-3 h-3 bg-red-500 rounded-full blur-sm"
      />
      <motion.div
        animate={{ y: [0, 15, 0], opacity: [0.1, 0.25, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-40 left-[12%] w-2 h-2 bg-red-400 rounded-full blur-sm"
      />

      {/* Hero bg photo — very subtle */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.04]"
        style={{ backgroundImage: "url('https://xeroproducts.com/cdn/shop/files/Water-Fed-Poles-Block-Home-Page-2025_1280x960.jpg')" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
        {/* For Pro Window Cleaners badge */}
        <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2.5 mb-8">
          <div className="inline-flex items-center gap-2.5 bg-black text-white rounded-full px-5 py-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
            </span>
            <span className="text-sm font-semibold tracking-wide">For Pro Window Cleaners</span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.1)}
          className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tight leading-none mb-6 text-black"
        >
          <span className="shimmer-text">Cheaper.</span>{' '}
          <span className="text-black">Lighter.</span>
          <br />
          <span className="text-black">Built for the Trade.</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          {...fadeUp(0.2)}
          className="text-zinc-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Professional water-fed pole packages that cut your equipment costs
          without cutting corners. Stop overpaying for gear with a bigger marketing
          budget than build quality.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp(0.3)}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#products"
            className="group inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-red-200 hover:-translate-y-0.5"
          >
            Shop Packages
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform duration-200"
            />
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 text-zinc-700 hover:text-black font-semibold px-7 py-3.5 rounded-xl border border-zinc-300 hover:border-zinc-900 hover:bg-zinc-50 transition-all duration-200"
          >
            Our Story
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-20 flex flex-col items-center gap-2 text-zinc-400"
        >
          <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown size={18} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
