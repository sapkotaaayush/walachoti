import { useCart } from '../../context/CartContext'
import CartItem from '../cart/CartItem'

export default function OrderReview({ data, items, total, onSubmit }) {
  const { getTotalPrice } = useCart()

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Review Your Order</h2>
      <div className="space-y-4 mb-8">
        <h3 className="font-semibold">Items</h3>
        {items.map(item => <CartItem key={`${item.id}-${item.size}`} item={item} />)}
        <div className="pt-4 border-t">
          <div className="flex justify-between text-lg font-bold">
            <span>Total: ${getTotalPrice().toFixed(2)}</span>
            {data.deliveryType === 'delivery' && <span>+ Delivery $3.99</span>}
          </div>
          <div className="flex justify-end text-xl font-bold text-primary mt-2">
            Grand Total: ${total.toFixed(2)}
          </div>
        </div>
      </div>
      <div className="space-y-2 text-sm">
        <p><strong>Name:</strong> {data.name}</p>
        <p><strong>Delivery:</strong> {data.deliveryType} {data.address ? `to ${data.address}` : ''}</p>
        <p><strong>Time:</strong> {data.time === 'asap' ? 'ASAP' : data.time}</p>
        <p><strong>Payment:</strong> {data.payment === 'cod' ? 'Cash on Delivery' : data.payment}</p>
        {data.notes && <p><strong>Notes:</strong> {data.notes}</p>}
      </div>
      <button onClick={onSubmit} className="w-full mt-8 btn-primary py-4 text-lg">
        Place Order
      </button>
    </div>
  )
}