import { motion } from 'framer-motion'

const testimonials = [
  { text: "Best butter chicken in Sydney!", name: "Sarah K." },
  { text: "Fast delivery and amazing flavors.", name: "Raj P." },
  { text: "Love the veg options—highly recommend!", name: "Emma L." },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div key={idx} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="card-hover p-6">
              <p className="mb-4 italic">"{t.text}"</p>
              <p className="font-semibold">- {t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}