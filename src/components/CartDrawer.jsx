import { motion, AnimatePresence } from 'framer-motion'
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react'
import { useCart } from '../context/CartContext'

export default function CartDrawer() {
  const { items, open, setOpen, removeFromCart, updateQuantity, subtotal, clearCart } = useCart()

  const handleCheckout = () => {
    // TODO: Replace with Shopify checkout URL
    // window.location.href = shopifyCheckoutUrl
    alert('Shopify checkout will be wired here.')
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-zinc-200">
              <div className="flex items-center gap-3">
                <ShoppingBag size={20} className="text-red-600" />
                <h2 className="text-lg font-bold text-black">Your Cart</h2>
                {items.length > 0 && (
                  <span className="text-xs font-semibold bg-red-600 text-white rounded-full px-2 py-0.5">
                    {items.reduce((s, i) => s + i.quantity, 0)}
                  </span>
                )}
              </div>
              <button
                onClick={() => setOpen(false)}
                className="p-2 rounded-lg hover:bg-zinc-100 text-zinc-500 hover:text-black transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
                  <ShoppingBag size={48} className="text-zinc-200" />
                  <p className="text-zinc-400 font-medium">Your cart is empty</p>
                  <button
                    onClick={() => setOpen(false)}
                    className="text-red-600 hover:text-red-700 text-sm font-semibold transition-colors"
                  >
                    Continue shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <AnimatePresence>
                    {items.map((item) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20, height: 0, marginBottom: 0 }}
                        transition={{ duration: 0.2 }}
                        className="flex gap-4 p-4 bg-zinc-50 rounded-2xl border border-zinc-200"
                      >
                        {/* Product image */}
                        <div className="w-20 h-20 rounded-xl overflow-hidden bg-zinc-200 flex-shrink-0">
                          {item.image ? (
                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-zinc-400 text-xs font-medium">
                              GLAER
                            </div>
                          )}
                        </div>

                        {/* Details */}
                        <div className="flex-1 min-w-0">
                          <p className="text-black font-semibold text-sm truncate">{item.name}</p>
                          <p className="text-zinc-500 text-xs mt-0.5">{item.variant}</p>
                          <p className="text-red-600 font-bold text-sm mt-1">
                            {item.price === 0 ? 'Price TBD' : `$${(item.price * item.quantity).toFixed(2)}`}
                          </p>

                          {/* Quantity + Remove */}
                          <div className="flex items-center justify-between mt-3">
                            <div className="flex items-center gap-1 bg-white border border-zinc-200 rounded-lg overflow-hidden">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="p-1.5 hover:bg-zinc-100 text-zinc-600 transition-colors"
                              >
                                <Minus size={13} />
                              </button>
                              <span className="px-3 text-sm font-semibold text-black">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="p-1.5 hover:bg-zinc-100 text-zinc-600 transition-colors"
                              >
                                <Plus size={13} />
                              </button>
                            </div>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="p-1.5 text-zinc-400 hover:text-red-600 transition-colors"
                            >
                              <Trash2 size={15} />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              )}
            </div>

            {/* Footer — only shows with items */}
            {items.length > 0 && (
              <div className="border-t border-zinc-200 px-6 py-5 space-y-4">
                {/* Subtotal */}
                <div className="flex items-center justify-between">
                  <span className="text-zinc-500 text-sm">Subtotal</span>
                  <span className="text-black font-bold text-lg">
                    {subtotal === 0 ? 'Quote required' : `$${subtotal.toFixed(2)}`}
                  </span>
                </div>
                <p className="text-zinc-400 text-xs">Shipping & taxes calculated at checkout</p>

                {/* Checkout */}
                <button
                  onClick={handleCheckout}
                  className="group w-full inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold py-4 rounded-xl transition-all duration-200 shadow-lg shadow-red-200"
                >
                  Checkout
                  <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={clearCart}
                  className="w-full text-zinc-400 hover:text-zinc-600 text-sm transition-colors text-center"
                >
                  Clear cart
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
