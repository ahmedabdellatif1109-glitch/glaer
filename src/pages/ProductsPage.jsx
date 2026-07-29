import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Products from '../components/Products'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CartDrawer from '../components/CartDrawer'

export default function ProductsPage() {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    // Wait for the page to render then scroll to the section
    const id = hash.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    } else {
      // Retry once after a short delay in case the component hasn't mounted yet
      const timer = setTimeout(() => {
        const el2 = document.getElementById(id)
        if (el2) el2.scrollIntoView({ behavior: 'smooth' })
      }, 150)
      return () => clearTimeout(timer)
    }
  }, [hash])

  return (
    <div className="bg-white text-zinc-900 font-sans overflow-x-hidden min-h-screen flex flex-col">
      <Navbar />
      <CartDrawer />
      <main className="flex-1 pt-16">
        <Products />
      </main>
      <Footer />
    </div>
  )
}
