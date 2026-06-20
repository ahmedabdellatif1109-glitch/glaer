import { motion } from 'framer-motion'
import { Feather, Banknote, ShieldCheck, Wrench } from 'lucide-react'

const features = [
  {
    icon: Feather,
    title: 'Noticeably Lighter',
    description:
      'Every extra gram on the end of a pole becomes ten by the end of the day. Our carbon fibre poles are engineered to be as light as the job allows — less fatigue, more hours, better results.',
    iconColor: 'text-red-600',
    iconBg: 'bg-red-50',
  },
  {
    icon: Banknote,
    title: 'Priced to Profit',
    description:
      'Other companies charge a premium because they can. We price fairly because we know what it actually costs to produce quality kit. More money stays in your pocket where it belongs.',
    iconColor: 'text-black',
    iconBg: 'bg-zinc-100',
  },
  {
    icon: ShieldCheck,
    title: 'No Corners Cut',
    description:
      "Cheaper price never means cheaper quality. Every component — brushes, hose fittings, water treatment systems — is selected because we'd stake our own work on it.",
    iconColor: 'text-red-600',
    iconBg: 'bg-red-50',
  },
  {
    icon: Wrench,
    title: 'Designed for the Trade',
    description:
      'Not designed in a boardroom. Built around real-world window cleaning — tight residential driveways, demanding commercial sites, and everything in between.',
    iconColor: 'text-black',
    iconBg: 'bg-zinc-100',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-28 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-red-600 text-sm font-semibold tracking-widest uppercase mb-4">
            Why GLAER
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight mb-5">
            The difference you'll{' '}
            <span className="shimmer-text">actually feel</span>
          </h2>
          <p className="text-zinc-500 text-lg max-w-2xl mx-auto">
            We didn't set out to make another WFP company. We set out to make the one we
            wished existed when we were buying our first setups.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative rounded-2xl border border-zinc-200 bg-white p-8 card-hover cursor-default shadow-sm hover:shadow-md"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${f.iconBg} mb-5 ${f.iconColor}`}>
                <f.icon size={22} strokeWidth={1.8} />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">{f.title}</h3>
              <p className="text-zinc-500 leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
