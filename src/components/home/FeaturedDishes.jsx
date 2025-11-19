import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { menuCategories } from '../../utils/menuData'

export default function FeaturedDishes() {
  const featured = menuCategories.flatMap(cat => cat.items.filter(item => item.popular || item.bestseller).slice(0, 4))

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-4xl font-bold text-center mb-12">Featured Dishes</motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((item, idx) => (
            <motion.div key={idx} initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: idx * 0.1 }} className="card-hover text-center">
              <div className="bg-gray-200 rounded-xl w-full h-48 mb-4" style={{backgroundImage: `url('/images/food-placeholder.jpg')`, backgroundSize: 'cover'}} />
              <h3 className="font-semibold mb-2">{item.name}</h3>
              <p className="text-primary font-bold">${item.price}</p>
              <Link to="/menu" className="mt-4 inline-block text-primary hover:underline">Add to Cart</Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}