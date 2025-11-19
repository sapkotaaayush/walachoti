import { useCart } from '../../context/CartContext';
import { XMarkIcon, PlusIcon, MinusIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

export default function CartDrawer({ isOpen, onClose }) {
  const { items, updateQty, removeItem, getTotalPrice } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl">
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b p-6">
            <h2 className="text-2xl font-bold text-primary">Your Cart ({items.length})</h2>
            <button onClick={onClose}><XMarkIcon className="h-8 w-8" /></button>
          </div>

          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <p className="text-center text-gray-500 mt-10">Your cart is empty</p>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={`${item.id}-${item.size}`} className="flex gap-4 bg-gray-50 p-4 rounded-xl">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-20 h-20" />
                    <div className="flex-1">
                      <h4 className="font-semibold">{item.name}</h4>
                      {item.size && <p className="text-sm text-gray-600">{item.size}</p>}
                      <p className="text-primary font-bold">${(item.price * item.qty).toFixed(2)}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button onClick={() => updateQty(item.id, item.size, item.qty - 1)} className="p-1"><MinusIcon className="h-5 w-5" /></button>
                      <span className="w-8 text-center">{item.qty}</span>
                      <button onClick={() => updateQty(item.id, item.size, item.qty + 1)} className="p-1"><PlusIcon className="h-5 w-5" /></button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {items.length > 0 && (
            <div className="border-t p-6">
              <div className="flex justify-between text-xl font-bold mb-4">
                <span>Total</span>
                <span className="text-primary">${getTotalPrice().toFixed(2)}</span>
              </div>
              <Link to="/checkout">
                <button onClick={onClose} className="w-full btn-primary text-lg py-4">
                  Proceed to Checkout
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}