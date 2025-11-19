import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { menuCategories } from '../../utils/menuData'

export default function Categories() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-4xl font-bold text-center mb-12">Browse Categories</motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {menuCategories.map((cat, idx) => (
            <motion.div key={cat.id} initial={{ scale: 0.9 }} whileHover={{ scale: 1.05 }} className="card-hover text-center cursor-pointer">
              <div className="text-6xl mb-4 animate-float">{cat.icon}</div>
              <p className="font-semibold">{cat.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}