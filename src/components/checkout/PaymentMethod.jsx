export default function PaymentMethod({ method, onChange }) {
  const payments = [
    { id: 'cod', label: 'Cash on Delivery', desc: 'Pay when food arrives' },
    // Add more like card, etc., for future
  ]

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Payment Method</h2>
      <div className="space-y-3">
        {payments.map(p => (
          <label key={p.id} className="flex items-center space-x-3 p-3 rounded-xl border cursor-pointer hover:bg-gray-50">
            <input 
              type="radio" 
              name="payment" 
              value={p.id} 
              checked={method === p.id}
              onChange={(e) => onChange('payment', e.target.value)}
              className="rounded"
            />
            <div>
              <h3 className="font-semibold">{p.label}</h3>
              <p className="text-sm text-gray-600">{p.desc}</p>
            </div>
          </label>
        ))}
      </div>
    </div>
  )
}