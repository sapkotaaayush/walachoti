import Input from '../common/Input'
import { useState } from 'react'

export default function AddressForm({ data, onChange }) {
  const [isSaved, setIsSaved] = useState(false)

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Delivery Address</h2>
      <div className="space-y-4">
        <Input 
          label="Street Address" 
          value={data.address} 
          onChange={(e) => onChange('address', e.target.value)} 
          placeholder="123 Beach St" 
          required 
        />
        <div className="grid grid-cols-2 gap-4">
          <Input label="Suburb" placeholder="Maroubra" />
          <Input label="Postcode" placeholder="2035" />
        </div>
        <label className="flex items-center space-x-2">
          <input type="checkbox" checked={isSaved} onChange={(e) => setIsSaved(e.target.checked)} />
          <span>Save this address</span>
        </label>
      </div>
    </div>
  )
}