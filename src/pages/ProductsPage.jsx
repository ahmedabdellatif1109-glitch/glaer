import Products from '../components/Products'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CartDrawer from '../components/CartDrawer'

export default function ProductsPage() {
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
