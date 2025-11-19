import { useCart } from '../../context/CartContext'

export default function CartSummary() {
  const { getTotalPrice, getTotalItems } = useCart()

  return (
    <div className="glass sticky top-0 p-6 h-fit">
      <h3 className="font-bold mb-4">Order Summary</h3>
      <div className="space-y-2 mb-6">
        <div className="flex justify-between">
          <span>Items: {getTotalItems()}</span>
          <span>${getTotalPrice().toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Delivery Fee</span>
          <span>$3.99</span>
        </div>
        <div className="flex justify-between font-bold text-lg">
          <span>Total</span>
          <span>${(getTotalPrice() + 3.99).toFixed(2)}</span>
        </div>
      </div>
      <button className="w-full btn-primary">Checkout</button>
    </div>
  )
}