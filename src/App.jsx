import { CartProvider } from './context/CartContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Features from './components/Features'
import Products from './components/Products'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'
import WelcomePopup from './components/WelcomePopup'

export default function App() {
  return (
    <CartProvider>
      <div className="bg-white text-zinc-900 font-sans overflow-x-hidden">
        <Navbar />
        <CartDrawer />
        <WelcomePopup />
        <main>
          <Hero />
          <Stats />
          <Features />
          <Products />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </CartProvider>
  )
}
