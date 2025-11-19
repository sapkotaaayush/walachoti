import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import CartButton from '../cart/CartButton'

export default function Navbar({ onCartClick, cartCount }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/menu', label: 'Menu' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="glass fixed top-0 z-40 w-full px-6 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-heading font-bold text-primary">Chotiwala Maroubra</Link>
        <ul className="hidden md:flex space-x-8">
          {navLinks.map(link => (
            <li key={link.to}>
              <Link to={link.to} className={`font-medium ${location.pathname === link.to ? 'text-primary' : 'text-dark hover:text-primary'}`}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center space-x-4">
          <CartButton onClick={onCartClick} count={cartCount} />
          <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {mobileOpen && (
        <ul className="md:hidden mt-4 space-y-2">
          {navLinks.map(link => (
            <li key={link.to}>
              <Link to={link.to} className="block py-2" onClick={() => setMobileOpen(false)}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}