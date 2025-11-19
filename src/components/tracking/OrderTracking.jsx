import { useParams } from 'react-router-dom'
import StatusTimeline from './StatusTimeline'
import TrackingMap from './TrackingMap'

export default function OrderTracking() {
  const { orderId } = useParams()
  // Fetch order status from API

  return (
    <div className="py-20 container mx-auto px-6">
      <h1 className="text-4xl font-bold mb-8">Track Order #{orderId}</h1>
      <StatusTimeline />
      <TrackingMap />
    </div>
  )
}