import { motion } from 'framer-motion'

export default function DeliveryPickup({ type, onChange }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">
      <h2 className="text-2xl font-bold mb-6">Delivery or Pickup?</h2>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() => onChange('pickup')}
          className={`flex-1 p-6 rounded-xl border-2 ${type === 'pickup' ? 'border-primary bg-primary/10' : 'border-gray-200'}`}
        >
          <div className="text-3xl mb-2">🏠</div>
          <h3 className="font-semibold">Pickup</h3>
          <p className="text-sm text-gray-600">Ready in 15 mins</p>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() => onChange('delivery')}
          className={`flex-1 p-6 rounded-xl border-2 ${type === 'delivery' ? 'border-primary bg-primary/10' : 'border-gray-200'}`}
        >
          <div className="text-3xl mb-2">🚚</div>
          <h3 className="font-semibold">Delivery</h3>
          <p className="text-sm text-gray-600">$3.99 fee • 30-45 mins</p>
        </motion.button>
      </div>
    </motion.div>
  )
}