import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function NotFound() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
      <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
      <p className="text-xl mb-8">Page not found</p>
      <Link to="/" className="btn-primary px-8 py-3">Go Home</Link>
    </motion.div>
  )
}