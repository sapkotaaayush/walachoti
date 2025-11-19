import { useCart } from '../../context/CartContext'
import { MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/solid'

export default function CartItem({ item }) {
  const { updateQty, removeItem } = useCart()

  return (
    <div className="card-hover flex gap-4 p-4">
      <div className="w-20 h-20 bg-gray-200 rounded-xl" />
      <div className="flex-1">
        <h3 className="font-semibold">{item.name}</h3>
        <p className="text-sm text-gray-600">{item.size && `Size: ${item.size}`}</p>
        <p className="text-primary font-bold">${(item.price * item.qty).toFixed(2)}</p>
      </div>
      <div className="flex items-center gap-2">
        <button onClick={() => updateQty(item.id, item.size, item.qty - 1)} className="p-2 hover:bg-gray-100 rounded">
          <MinusIcon className="h-4 w-4" />
        </button>
        <span className="w-8 text-center">{item.qty}</span>
        <button onClick={() => updateQty(item.id, item.size, item.qty + 1)} className="p-2 hover:bg-gray-100 rounded">
          <PlusIcon className="h-4 w-4" />
        </button>
        <button onClick={() => removeItem(item.id, item.size)} className="p-2 text-red-500 hover:bg-red-100 rounded">
          <TrashIcon className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}