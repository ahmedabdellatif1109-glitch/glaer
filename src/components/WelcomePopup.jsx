import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Tag, Copy, Check } from 'lucide-react'

const DISCOUNT_CODE = 'GLAER10'
const STORAGE_KEY = 'glaer_popup_seen'
// TODO: Replace with your Formspree/Klaviyo/Mailchimp endpoint
const EMAIL_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'

export default function WelcomePopup() {
  const [visible, setVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY)) return
    const timer = setTimeout(() => setVisible(true), 2500)
    return () => clearTimeout(timer)
  }, [])

  const dismiss = () => {
    setVisible(false)
    localStorage.setItem(STORAGE_KEY, '1')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email) return
    setStatus('loading')
    try {
      const res = await fetch(EMAIL_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ email, source: 'welcome_popup', discount: DISCOUNT_CODE }),
      })
      if (res.ok) {
        setStatus('success')
        localStorage.setItem(STORAGE_KEY, '1')
      } else {
        setStatus('error')
      }
    } catch {
      // If no endpoint configured yet, still show the code
      setStatus('success')
      localStorage.setItem(STORAGE_KEY, '1')
    }
  }

  const copyCode = () => {
    navigator.clipboard.writeText(DISCOUNT_CODE)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={dismiss}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4 pointer-events-none"
          >
            <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden pointer-events-auto">
              {/* Red top stripe */}
              <div className="h-1.5 w-full bg-red-600" />

              {/* Close */}
              <button
                onClick={dismiss}
                className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-zinc-100 text-zinc-400 hover:text-black transition-colors"
                aria-label="Close"
              >
                <X size={18} />
              </button>

              <div className="px-8 pb-8 pt-6">
                {status !== 'success' ? (
                  <>
                    {/* Icon */}
                    <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center mb-5">
                      <Tag size={22} className="text-red-600" />
                    </div>

                    {/* Copy */}
                    <p className="text-red-600 text-xs font-semibold tracking-widest uppercase mb-2">
                      Welcome to GLAER
                    </p>
                    <h2 className="text-2xl font-black text-black leading-tight mb-2">
                      Get 10% off your first order
                    </h2>
                    <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                      Drop your email and we'll send you a discount code — plus the occasional
                      gear update. No spam, ever.
                    </p>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-3">
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        className="w-full border border-zinc-300 rounded-xl px-4 py-3 text-black placeholder-zinc-400 text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500/40 transition-all"
                      />
                      <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="w-full bg-red-600 hover:bg-red-700 disabled:opacity-60 text-white font-semibold py-3 rounded-xl transition-all duration-200 shadow-lg shadow-red-200 text-sm"
                      >
                        {status === 'loading' ? (
                          <span className="inline-flex items-center gap-2">
                            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Sending…
                          </span>
                        ) : (
                          'Claim My 10% Off'
                        )}
                      </button>
                    </form>

                    {status === 'error' && (
                      <p className="text-red-500 text-xs mt-2 text-center">
                        Something went wrong — try again or email us directly.
                      </p>
                    )}

                    <button
                      onClick={dismiss}
                      className="w-full mt-3 text-zinc-400 hover:text-zinc-600 text-xs transition-colors text-center"
                    >
                      No thanks, I'll pay full price
                    </button>
                  </>
                ) : (
                  /* Success state */
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-4"
                  >
                    <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-5">
                      <Tag size={26} className="text-red-600" />
                    </div>
                    <h2 className="text-2xl font-black text-black mb-2">You're in!</h2>
                    <p className="text-zinc-500 text-sm mb-6">
                      Use this code at checkout for 10% off:
                    </p>

                    {/* Discount code */}
                    <button
                      onClick={copyCode}
                      className="group inline-flex items-center gap-3 bg-black text-white font-black text-xl tracking-widest px-6 py-4 rounded-2xl hover:bg-zinc-800 transition-all duration-200 mx-auto"
                    >
                      {DISCOUNT_CODE}
                      <span className="text-red-400">
                        {copied ? <Check size={18} /> : <Copy size={18} />}
                      </span>
                    </button>

                    <p className="text-zinc-400 text-xs mt-3">
                      {copied ? 'Copied!' : 'Tap to copy'}
                    </p>

                    <button
                      onClick={dismiss}
                      className="mt-6 text-sm text-red-600 hover:text-red-700 font-semibold transition-colors"
                    >
                      Start shopping →
                    </button>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
