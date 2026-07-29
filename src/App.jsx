import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Features from './components/Features'
import Categories from './components/Categories'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'
import WelcomePopup from './components/WelcomePopup'
import ProductsPage from './pages/ProductsPage'

function HomePage() {
  return (
    <div className="bg-white text-zinc-900 font-sans overflow-x-hidden">
      <Navbar />
      <CartDrawer />
      <WelcomePopup />
      <main>
        <Hero />
        <Categories />
        <Stats />
        <Features />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <CartProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:section" element={<ProductsPage />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}
