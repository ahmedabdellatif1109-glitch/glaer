import { motion } from 'framer-motion'
import { Facebook, Instagram, Linkedin } from 'lucide-react'

const footerLinks = {
  Company: [
    { label: 'About', href: '#about' },
    { label: 'Products', href: '#products' },
    { label: 'Why Us', href: '#features' },
    { label: 'Contact', href: '#contact' },
  ],
  Products: [
    { label: 'GLAER 30 — Complete', href: '#products' },
    { label: 'Custom Packages', href: '#contact' },
  ],
  Support: [
    { label: 'Get a Quote', href: '#contact' },
    { label: 'Setup Guides', href: '#contact' },
    { label: 'FAQ', href: '#contact' },
  ],
}

export default function Footer() {
  return (
    <footer className="relative border-t border-zinc-800 pt-16 pb-8 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-2 md:col-span-1"
          >
            <a href="#home" className="flex items-center mb-5">
              {/* Logo inverted on dark footer */}
              <img
                src="/glaer-logo.webp"
                alt="GLAER"
                className="h-7 w-auto object-contain"
                style={{ filter: 'invert(1) hue-rotate(180deg)', mixBlendMode: 'screen' }}
              />
            </a>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-[200px]">
              Water-fed pole packages built by window cleaners. Lighter. Cheaper. Built for the trade.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {[
                { icon: Facebook, href: '#' },
                { icon: Instagram, href: '#' },
                { icon: Linkedin, href: '#' },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-8 h-8 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </motion.div>

          {Object.entries(footerLinks).map(([category, links], ci) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (ci + 1) * 0.08 }}
            >
              <p className="text-white font-semibold text-sm mb-4">{category}</p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors duration-200">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="border-t border-zinc-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-zinc-600 text-xs">
            &copy; {new Date().getFullYear()} GLAER. All rights reserved.
          </p>
          <p className="text-zinc-700 text-xs">
            Built by window cleaners &mdash; for window cleaners.
          </p>
        </div>
      </div>
    </footer>
  )
}
