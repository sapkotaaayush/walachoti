import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ShoppingBagIcon from '@heroicons/react/24/outline/ShoppingBagIcon'

export default function EmptyCart() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
      <ShoppingBagIcon className="h-24 w-24 text-gray-300 mx-auto mb-4" />
      <h2 className="text-2xl font-bold mb-2">Your Cart is Empty</h2>
      <p className="text-gray-600 mb-8">Add some delicious items to get started!</p>
      <Link to="/menu" className="btn-primary px-8 py-3">Browse Menu</Link>
    </motion.div>
  )
}