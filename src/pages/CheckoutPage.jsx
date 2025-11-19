import Checkout from '../components/checkout/CheckoutPage'
import MobileNav from '../components/layout/MobileNav'
import { useCart } from '../context/CartContext'

export default function CheckoutPage() {
  const { getTotalItems } = useCart()

  return (
    <>
      <Checkout />
      <MobileNav cartCount={getTotalItems()} />
    </>
  )
}