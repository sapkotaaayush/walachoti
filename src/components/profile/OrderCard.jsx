import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function OrderCard({ order }) {
  return (
    <motion.div whileHover={{ y: -2 }} className="card-hover p-6">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-bold">Order #{order.id}</h3>
          <p className="text-gray-600">{order.date}</p>
          <p className="text-primary font-bold">${order.total}</p>
        </div>
        <div className="text-right">
          <p className="text-sm">Delivered</p>
          <Link to={`/track/${order.id}`} className="text-primary hover:underline text-sm">Reorder</Link>
        </div>
      </div>
    </motion.div>
  )
}