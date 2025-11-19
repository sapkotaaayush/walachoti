import { useEffect, useState } from 'react'
import { menuService } from '../../api/menuApi'
import MenuItem from './MenuItem'
import CategoryTabs from './CategoryTabs'
import MenuFilters from './MenuFilters'

export default function MenuList() {
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('all')

  useEffect(() => {
    menuService.getMenu().then(setCategories)
  }, [])

  const filteredItems = selectedCategory === 'all' 
    ? categories.flatMap(cat => cat.items) 
    : categories.find(cat => cat.id === selectedCategory)?.items || []

  return (
    <div className="py-20 container mx-auto px-6">
      <h1 className="text-4xl font-bold mb-12">Our Menu</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/4">
          <MenuFilters />
        </div>
        <div className="lg:w-3/4">
          <CategoryTabs categories={categories} selected={selectedCategory} onSelect={setSelectedCategory} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {filteredItems.map((item, idx) => (
              <MenuItem key={idx} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}