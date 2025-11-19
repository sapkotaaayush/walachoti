import { Outlet } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function ProfilePage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-20 container mx-auto px-6">
      <h1 className="text-4xl font-bold mb-8">Your Profile</h1>
      <Outlet />
    </motion.div>
  )
}