import { motion } from 'framer-motion'
import { ShoppingBagIcon } from '@heroicons/react/24/outline'

export default function CartButton({ onClick, count }) {
  return (
    <motion.button 
      whileTap={{ scale: 0.95 }} 
      onClick={onClick} 
      className="relative p-2 rounded-full bg-primary text-white hover:bg-red-700"
      aria-label="View cart"
    >
      <ShoppingBagIcon className="h-6 w-6" />
      {count > 0 && (
        <span className="absolute -top-1 -right-1 bg-accent text-dark rounded-full h-5 w-5 text-xs flex items-center justify-center font-bold">
          {count}
        </span>
      )}
    </motion.button>
  )
}