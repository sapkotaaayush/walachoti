import { Routes, Route } from 'react-router-dom'
import OrderHistory from '../components/profile/OrderHistory'
import SavedAddresses from '../components/profile/SavedAddresses'
import Favorites from '../components/profile/Favorites'
import AccountSettings from '../components/profile/AccountSettings'
import MobileNav from '../components/layout/MobileNav'
import { useCart } from '../context/CartContext'

export default function ProfilePage() {
  const { getTotalItems } = useCart()

  return (
    <>
      <div className="py-20 container mx-auto px-6">
        <Routes>
          <Route path="/" element={<OrderHistory />} />
          <Route path="addresses" element={<SavedAddresses />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="settings" element={<AccountSettings />} />
        </Routes>
      </div>
      <MobileNav cartCount={getTotalItems()} />
    </>
  )
}