import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import routes from './routes.jsx'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import CartDrawer from './components/cart/CartDrawer'
import { useCart } from './context/CartContext'
import { Toaster } from './components/common/Toast'

function App() {
  const [cartOpen, setCartOpen] = useState(false)
  const { getTotalItems } = useCart()

  return (
    <div className="min-h-screen bg-light">
      <Navbar onCartClick={() => setCartOpen(true)} cartCount={getTotalItems()} />
      <main>
        <Routes>
          {routes}
        </Routes>
      </main>
      <Footer />
      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
      <Toaster />
    </div>
  )
}

export default App