import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

function CountUp({ end, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  useEffect(() => {
    if (!inView) return
    let startTime

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * end))
      if (progress < 1) requestAnimationFrame(step)
    }

    requestAnimationFrame(step)
  }, [inView, end, duration])

  return <span ref={ref}>{count}{suffix}</span>
}

const stats = [
  {
    value: 30,
    suffix: "'",
    label: 'Reach',
    detail: 'Full extension — handles residential to light commercial',
  },
  {
    value: 2,
    suffix: '.4 lbs',
    label: 'Bare Weight',
    detail: 'Pole only — one of the lightest in its class',
    noCount: true,
  },
  {
    value: 100,
    suffix: "'",
    label: 'Hose Included',
    detail: 'Supply hose in every package, ready to connect',
  },
]

export default function Stats() {
  return (
    <section className="relative py-16 border-y border-zinc-200 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 md:divide-x divide-zinc-200">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col items-center text-center px-8 py-4"
            >
              <div className="text-5xl font-black text-red-600 mb-1">
                {stat.noCount ? (
                  <span>2.4 lbs</span>
                ) : (
                  <CountUp end={stat.value} suffix={stat.suffix} />
                )}
              </div>
              <div className="text-lg font-bold text-black mb-1">{stat.label}</div>
              <div className="text-sm text-zinc-500 max-w-[200px]">{stat.detail}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
