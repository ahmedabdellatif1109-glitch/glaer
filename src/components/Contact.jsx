import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle2, Mail, Phone, MapPin } from 'lucide-react'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', package: '', message: '' })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', company: '', package: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'w-full bg-white border border-zinc-300 rounded-xl px-4 py-3 text-black placeholder-zinc-400 text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500/40 transition-all duration-200'

  return (
    <section id="contact" className="relative py-28 border-t border-zinc-200 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2"
          >
            <p className="text-red-600 text-sm font-semibold tracking-widest uppercase mb-4">Get in Touch</p>
            <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight leading-tight mb-5">
              Let's talk <span className="shimmer-text">kit</span>
            </h2>
            <p className="text-zinc-500 leading-relaxed mb-10">
              Whether you're just getting into WFP or looking to upgrade a full crew,
              we'll build a package around what you actually need. No pushy upsells —
              just honest advice and the right kit.
            </p>
            <div className="space-y-5">
              {[
                { icon: Mail, label: 'Email', value: 'hello@glaer.com' },
                { icon: Phone, label: 'Phone', value: '+1 (800) GLAER-WFP' },
                { icon: MapPin, label: 'Location', value: 'Shipping nationwide' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-red-600 flex-shrink-0 shadow-sm">
                    <item.icon size={18} strokeWidth={1.8} />
                  </div>
                  <div>
                    <p className="text-zinc-400 text-xs">{item.label}</p>
                    <p className="text-black text-sm font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            <div className="bg-white border border-zinc-200 rounded-2xl p-8 shadow-sm">
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center py-10 gap-4"
                >
                  <CheckCircle2 size={52} className="text-red-600" strokeWidth={1.5} />
                  <h3 className="text-2xl font-bold text-black">We'll be in touch</h3>
                  <p className="text-zinc-500 max-w-sm">Thanks for reaching out. We typically respond within one business day.</p>
                  <button onClick={() => setStatus('idle')} className="mt-4 text-red-600 hover:text-red-700 text-sm font-medium transition-colors">
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-zinc-500 text-xs font-medium block mb-1.5">Your name *</label>
                      <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="John Smith" className={inputClass} />
                    </div>
                    <div>
                      <label className="text-zinc-500 text-xs font-medium block mb-1.5">Email address *</label>
                      <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="john@yourcompany.com" className={inputClass} />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-zinc-500 text-xs font-medium block mb-1.5">Company name</label>
                      <input type="text" name="company" value={form.company} onChange={handleChange} placeholder="Smith Window Services" className={inputClass} />
                    </div>
                    <div>
                      <label className="text-zinc-500 text-xs font-medium block mb-1.5">Package interest</label>
                      <select name="package" value={form.package} onChange={handleChange} className={inputClass + ' appearance-none'}>
                        <option value="" disabled>Select a package…</option>
                        <option value="glaer-30">GLAER 30 — Complete Package</option>
                        <option value="custom">Custom / Not sure yet</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="text-zinc-500 text-xs font-medium block mb-1.5">Tell us about your setup / questions</label>
                    <textarea name="message" value={form.message} onChange={handleChange} rows={5} placeholder="What kind of work do you do? Any specific requirements?" className={inputClass + ' resize-none'} />
                  </div>
                  {status === 'error' && (
                    <p className="text-red-600 text-sm">Something went wrong. Please email us directly at hello@glaer.com</p>
                  )}
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full group inline-flex items-center justify-center gap-2.5 bg-red-600 hover:bg-red-700 disabled:opacity-60 text-white font-semibold py-3.5 px-6 rounded-xl transition-all duration-200 shadow-lg shadow-red-200"
                  >
                    {status === 'loading' ? (
                      <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Sending…</>
                    ) : (
                      <>Send Message<Send size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" /></>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
