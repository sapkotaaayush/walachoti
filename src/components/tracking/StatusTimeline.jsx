import { motion } from 'framer-motion'

const statuses = [
  { step: 'Order Received', completed: true },
  { step: 'Preparing', completed: true },
  { step: 'Out for Delivery', completed: false },
  { step: 'Delivered', completed: false },
]

export default function StatusTimeline() {
  return (
    <div className="max-w-md mx-auto mb-8">
      <div className="relative">
        {statuses.map((status, idx) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ delay: idx * 0.2 }}
            className="mb-6 flex items-center"
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${status.completed ? 'bg-primary text-white' : 'bg-gray-200'}`}>
              {status.completed ? '✓' : idx + 1}
            </div>
            <div className="ml-4 flex-1">
              <h3 className="font-semibold">{status.step}</h3>
              {status.completed && <p className="text-sm text-gray-500">10:30 AM</p>}
            </div>
            {idx < statuses.length - 1 && <div className="w-px h-12 bg-gray-200 ml-4" />}
          </motion.div>
        ))}
      </div>
    </div>
  )
}