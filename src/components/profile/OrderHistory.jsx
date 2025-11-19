import { useEffect, useState } from 'react'
import { orderService } from '../../api/orderApi'
import OrderCard from './OrderCard'

export default function OrderHistory() {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    orderService.getHistory().then(setOrders)
  }, [])

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Order History</h2>
      <div className="space-y-4">
        {orders.map(order => <OrderCard key={order.id} order={order} />)}
      </div>
    </div>
  )
}