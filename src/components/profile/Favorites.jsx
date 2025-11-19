import { menuCategories } from '../../utils/menuData'
import MenuItem from '../menu/menuItem'

export default function Favorites() {
  // Mock favorites from cart context or local
  const favorites = menuCategories[0].items.slice(0, 3)

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Favorites</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {favorites.map((item, idx) => <MenuItem key={idx} item={item} />)}
      </div>
    </div>
  )
}