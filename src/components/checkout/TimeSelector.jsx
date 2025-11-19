import { useState } from 'react'
import { motion } from 'framer-motion'

export default function TimeSelector({ time, onChange }) {
  const [selectedTime, setSelectedTime] = useState(time)

  const times = ['asap', '18:00', '18:30', '19:00', '19:30', '20:00']

  const handleSelect = (t) => {
    setSelectedTime(t)
    onChange(t)
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">When do you want it?</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() => handleSelect('asap')}
          className={`p-4 rounded-xl border ${selectedTime === 'asap' ? 'border-primary bg-primary/10' : 'border-gray-200'}`}
        >
          ASAP (~30 mins)
        </motion.button>
        {times.slice(1).map(t => (
          <motion.button
            key={t}
            whileHover={{ scale: 1.05 }}
            onClick={() => handleSelect(t)}
            className={`p-4 rounded-xl border ${selectedTime === t ? 'border-primary bg-primary/10' : 'border-gray-200'}`}
          >
            {t}
          </motion.button>
        ))}
      </div>
    </div>
  )
}