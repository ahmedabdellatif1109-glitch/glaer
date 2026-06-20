import { createContext, useContext, useState, useCallback } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [open, setOpen] = useState(false)

  const addToCart = useCallback((product) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === product.id)
      if (existing) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      }
      return [...prev, { ...product, quantity: 1 }]
    })
    setOpen(true)
    // TODO: When wiring Shopify, call:
    // await shopifyClient.checkout.addLineItems(checkoutId, [{ variantId, quantity: 1 }])
  }, [])

  const removeFromCart = useCallback((id) => {
    setItems((prev) => prev.filter((i) => i.id !== id))
    // TODO: Shopify → shopifyClient.checkout.removeLineItems(checkoutId, [lineItemId])
  }, [])

  const updateQuantity = useCallback((id, quantity) => {
    if (quantity < 1) return
    setItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, quantity } : i))
    )
    // TODO: Shopify → shopifyClient.checkout.updateLineItems(checkoutId, [{ id, quantity }])
  }, [])

  const clearCart = useCallback(() => {
    setItems([])
    // TODO: Shopify → create new checkout
  }, [])

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0)
  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0)

  return (
    <CartContext.Provider
      value={{ items, open, setOpen, addToCart, removeFromCart, updateQuantity, clearCart, totalItems, subtotal }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used inside CartProvider')
  return ctx
}
