import Cart from '../components/cart/Cart'
import MobileNav from '../components/layout/MobileNav'
import { useCart } from '../context/CartContext'

export default function CartPage() {
  const { getTotalItems } = useCart()

  return (
    <>
      <Cart />
      <MobileNav cartCount={getTotalItems()} />
    </>
  )
}