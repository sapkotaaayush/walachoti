import { useState } from 'react'
import { Switch } from '@headlessui/react'

export default function MenuFilters() {
  const [showVegOnly, setShowVegOnly] = useState(false)
  const [priceRange, setPriceRange] = useState(50)

  return (
    <div className="space-y-4">
      <h3 className="font-bold">Filters</h3>
      <div>
        <label className="flex items-center space-x-2">
          <Switch checked={showVegOnly} onChange={setShowVegOnly} className={`${showVegOnly ? 'bg-primary' : 'bg-gray-200'} relative inline-flex h-5 w-10 items-center rounded-full`}>
            <span className="sr-only">Veg only</span>
            <span className={`${showVegOnly ? 'translate-x-6' : 'translate-x-1'} inline-block h-3 w-3 transform rounded-full bg-white transition`} />
          </Switch>
          <span>Vegetarian Only</span>
        </label>
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Max Price: ${priceRange}</label>
        <input type="range" min="10" max="50" value={priceRange} onChange={(e) => setPriceRange(e.target.value)} className="w-full" />
      </div>
    </div>
  )
}