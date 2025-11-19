import { useCart } from '../../context/CartContext'
import CartItem from './CartItem'
import CartSummary from './CartSummary'
import EmptyCart from './EmptyCart'
import { Link } from 'react-router-dom'

export default function Cart() {
  const { items } = useCart()

  if (items.length === 0) return <EmptyCart />

  return (
    <div className="py-20 container mx-auto px-6">
      <h1 className="text-4xl font-bold mb-8">Your Cart</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {items.map(item => <CartItem key={`${item.id}-${item.size}`} item={item} />)}
        </div>
        <CartSummary />
      </div>
      <div className="mt-8 text-center">
        <Link to="/checkout" className="btn-primary text-xl px-12 py-4">Proceed to Checkout</Link>
      </div>
    </div>
  )
}