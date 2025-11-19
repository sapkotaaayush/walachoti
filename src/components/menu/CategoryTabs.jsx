import { motion } from 'framer-motion'

export default function CategoryTabs({ categories, selected, onSelect }) {
  return (
    <div className="sticky top-0 bg-white/80 backdrop-blur-md z-10 py-4 border-b">
      <div className="flex overflow-x-auto space-x-2 pb-2">
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => onSelect('all')}
          className={`px-4 py-2 rounded-full font-medium ${selected === 'all' ? 'bg-primary text-white' : 'text-dark hover:bg-gray-100'}`}
        >
          All
        </motion.button>
        {categories.map(cat => (
          <motion.button
            key={cat.id}
            whileTap={{ scale: 0.95 }}
            onClick={() => onSelect(cat.id)}
            className={`px-4 py-2 rounded-full font-medium ${selected === cat.id ? 'bg-primary text-white' : 'text-dark hover:bg-gray-100'}`}
          >
            {cat.icon} {cat.name}
          </motion.button>
        ))}
      </div>
    </div>
  )
}