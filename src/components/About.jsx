import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="relative py-28 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-zinc-100 border border-zinc-200">
              <img
                src="https://xeroproducts.com/cdn/shop/files/Water-Fed-Poles-Block-Home-Page-2025_1280x960.jpg"
                alt="Water-fed pole in use"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-6">
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: 'Lighter Kit', val: '✓' },
                    { label: 'Better Price', val: '✓' },
                    { label: 'Pro Quality', val: '✓' },
                    { label: 'Trade-Built', val: '✓' },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 flex items-center justify-between gap-2 backdrop-blur-sm"
                    >
                      <span className="text-white/80 text-xs">{item.label}</span>
                      <span className="text-red-400 text-xs font-bold">{item.val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute -left-4 -bottom-4 w-24 h-24 border-l-2 border-b-2 border-red-600/30 rounded-bl-xl pointer-events-none" />
            <div className="absolute -right-4 -top-4 w-24 h-24 border-r-2 border-t-2 border-red-600/30 rounded-tr-xl pointer-events-none" />
          </motion.div>

          {/* Right — story */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2"
          >
            <p className="text-red-600 text-sm font-semibold tracking-widest uppercase mb-5">
              Our Story
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight leading-tight mb-8">
              Tired of paying too much for{' '}
              <span className="shimmer-text">not enough</span>
            </h2>

            <div className="relative mb-8">
              <Quote
                size={32}
                className="text-red-600/30 absolute -top-2 -left-1 rotate-180"
                fill="currentColor"
              />
              <div className="space-y-5 text-zinc-500 leading-relaxed pl-6 border-l-2 border-zinc-200">
                <p>
                  I started out just like you — hauling equipment, fighting with tangled
                  hoses, and wincing every time a component gave out after just a few months.
                  I'd spent years cleaning windows the hard way, and when I finally made the
                  switch to water-fed poles, I was genuinely shocked by what the market looked like.
                </p>
                <p>
                  The quality gear cost a small fortune. The affordable stuff let you down
                  when it mattered most. There was no middle ground, and I was tired of handing
                  over serious money to companies that seemed more invested in their branding than
                  what was actually at the end of the pole.
                </p>
                <p>
                  After one too many seasons patching things together and watching my margins
                  get eaten by equipment costs, I decided enough was enough.{' '}
                  <span className="text-black font-semibold">GLAER was built from that frustration</span>{' '}
                  — a company designed from the ground up to give window cleaners
                  professional-grade water-fed pole systems without the inflated price tag.
                </p>
                <p>
                  Every package we put together, we build thinking about the person at the
                  other end of that pole. Because we've been there. We still are.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white font-bold text-sm">
                GL
              </div>
              <div>
                <p className="text-black font-semibold text-sm">Founder, GLAER</p>
                <p className="text-zinc-400 text-xs">Window cleaner turned equipment builder</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
