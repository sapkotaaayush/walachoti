import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function Toaster() {
  const [toasts, setToasts] = useState([])

  const addToast = (message, type = 'success') => {
    const id = Date.now()
    setToasts(prev => [...prev, { id, message, type }])
    setTimeout(() => removeToast(id), 3000)
  }

  const removeToast = (id) => setToasts(prev => prev.filter(t => t.id !== id))

  // Global toast provider - use addToast from context in future
  return (
    <AnimatePresence>
      {toasts.map(toast => (
        <motion.div
          key={toast.id}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className={`fixed top-20 right-4 z-50 glass p-4 rounded-xl shadow-2xl max-w-sm ${toast.type === 'error' ? 'border-red-200' : 'border-green-200'}`}
        >
          {toast.message}
        </motion.div>
      ))}
    </AnimatePresence>
  )
}