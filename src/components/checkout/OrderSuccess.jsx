import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

export default function OrderSuccess({ orderId }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }} 
      animate={{ opacity: 1, scale: 1 }} 
      className="text-center py-20"
    >
      <CheckCircleIcon className="h-24 w-24 text-green-500 mx-auto mb-6" />
      <h1 className="text-4xl font-bold text-green-600 mb-4">Order Placed Successfully!</h1>
      <p className="text-xl mb-2">Your order #{orderId} has been received.</p>
      <p className="text-gray-600 mb-8">We'll notify you when it's on the way.</p>
      <div className="space-x-4">
        <Link to="/menu" className="btn-primary px-8 py-3">Order More</Link>
        <Link to="/track/{orderId}" className="border border-primary text-primary px-8 py-3 rounded-full hover:bg-primary hover:text-white">
          Track Order
        </Link>
      </div>
    </motion.div>
  )
}