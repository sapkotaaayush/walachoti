import { Link, useLocation } from 'react-router-dom'
import { Bars3Icon } from '@heroicons/react/24/outline'

const navItems = [
  { to: '/admin', label: 'Dashboard' },
  { to: '/admin/orders', label: 'Orders' },
  { to: '/admin/menu', label: 'Menu' },
  { to: '/admin/settings', label: 'Settings' },
]

export default function AdminSidebar() {
  const location = useLocation()

  return (
    <div className="w-64 bg-white border-r shadow-lg">
      <div className="p-6 border-b">
        <h1 className="text-2xl font-bold text-primary">Admin Panel</h1>
      </div>
      <nav className="p-4">
        <ul className="space-y-2">
          {navItems.map(item => (
            <li key={item.to}>
              <Link to={item.to} className={`block p-3 rounded ${location.pathname === item.to ? 'bg-primary text-white' : 'hover:bg-gray-100'}`}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}