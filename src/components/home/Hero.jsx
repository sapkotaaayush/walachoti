import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <motion.section 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="relative h-screen bg-cover bg-center" 
      style={{backgroundImage: "url('/images/hero-bg.jpg')"}}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40" />
      <div className="relative container mx-auto px-6 h-full flex items-center">
        <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="max-w-2xl text-white">
          <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6">
            Chotiwala<br />Maroubra
          </h1>
          <p className="text-xl md:text-2xl mb-8">Authentic Indian Flavours Delivered Fresh</p>
          <div className="flex flex-wrap gap-4">
            <Link to="/menu" className="btn-primary text-lg px-10 py-4">Order Now</Link>
            <a href="tel:0291234567" className="bg-white text-primary px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition">Call 02 9123 4567</a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}