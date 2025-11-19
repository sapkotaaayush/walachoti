import { useCart } from '../../context/CartContext'
import SizeSelector from './SizeSelector'
import DietaryBadge from './DietaryBadge'
import { motion } from 'framer-motion'
import { PlusIcon } from '@heroicons/react/24/solid'

export default function MenuItem({ item }) {
  const { addItem } = useCart()
  const [selectedSize, setSelectedSize] = useState('small')
  const price = item.sizes ? item.sizes[selectedSize] : item.price

  const handleAdd = () => {
    addItem({ ...item, id: item.name, price, size: selectedSize })
  }

  return (
    <motion.div whileHover={{ y: -5 }} className="card-hover flex gap-4">
      <div className="w-24 h-24 bg-gray-200 rounded-xl" style={{backgroundImage: `url('/images/food-placeholder.jpg')`, backgroundSize: 'cover'}} />
      <div className="flex-1">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold">{item.name}</h3>
          <DietaryBadge veg={item.veg} />
        </div>
        <p className="text-gray-600 mb-3">{item.desc}</p>
        {item.sizes && <SizeSelector size={selectedSize} onChange={setSelectedSize} />}
        <p className="text-primary font-bold text-lg">${price.toFixed(2)}</p>
      </div>
      <button onClick={handleAdd} className="btn-primary ml-auto p-4 flex items-center justify-center">
        <PlusIcon className="h-5 w-5" />
      </button>
    </motion.div>
  )
}