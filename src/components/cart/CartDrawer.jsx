import { useCart } from '../../context/CartContext'
import { XMarkIcon, PlusIcon, MinusIcon, TrashIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

export default function CartDrawer({ isOpen, onClose }) {
  const { items, updateQty, removeItem, getTotalPrice, getTotalItems } = useCart()

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ x: '100%' }} 
          animate={{ x: 0 }} 
          exit={{ x: '100%' }} 
          className="fixed inset-0 z-50 overflow-hidden"
        >
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 bg-black/50" onClick={onClose} />
          <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl">
            <div className="flex h-full flex-col overflow-hidden">
              <div className="flex items-center justify-between border-b p-6">
                <h2 className="text-2xl font-bold text-primary">Cart ({getTotalItems()})</h2>
                <button onClick={onClose} aria-label="Close cart">
                  <XMarkIcon className="h-8 w-8" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-6">
                {items.length === 0 ? (
                  <p className="text-center text-gray-500 mt-10">Your cart is empty</p>
                ) : (
                  <div className="space-y-4">
                    {items.map((item) => (
                      <div key={`${item.id}-${item.size}`} className="flex gap-4 bg-gray-50 p-4 rounded-xl">
                        <div className="bg-gray-200 rounded-xl w-20 h-20 flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold truncate">{item.name}</h4>
                          {item.size && <p className="text-sm text-gray-600 capitalize">{item.size}</p>}
                          <p className="text-primary font-bold">${(item.price * item.qty).toFixed(2)}</p>
                        </div>
                        <div className="flex items-center gap-2 flex-shrink-0">
                          <button onClick={() => updateQty(item.id, item.size || 'default', item.qty - 1)} className="p-1 rounded-full hover:bg-gray-200">
                            <MinusIcon className="h-5 w-5" />
                          </button>
                          <span className="w-8 text-center font-medium">{item.qty}</span>
                          <button onClick={() => updateQty(item.id, item.size || 'default', item.qty + 1)} className="p-1 rounded-full hover:bg-gray-200">
                            <PlusIcon className="h-5 w-5" />
                          </button>
                          <button onClick={() => removeItem(item.id, item.size || 'default')} className="p-1 ml-2 text-red-500 hover:bg-red-100 rounded-full">
                            <TrashIcon className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              {items.length > 0 && (
                <motion.div initial={{ y: 50 }} animate={{ y: 0 }} className="border-t p-6">
                  <div className="flex justify-between text-xl font-bold mb-4">
                    <span>Total</span>
                    <span className="text-primary">${getTotalPrice().toFixed(2)}</span>
                  </div>
                  <Link to="/checkout" className="block w-full btn-primary text-lg py-4 text-center" onClick={onClose}>
                    Proceed to Checkout
                  </Link>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}