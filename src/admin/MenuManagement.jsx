import { menuCategories } from '../../utils/menuData'

export default function MenuManagement() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Manage Menu</h2>
      <div className="space-y-4">
        {menuCategories.map(cat => (
          <div key={cat.id} className="border p-4 rounded">
            <h3 className="font-bold">{cat.name}</h3>
            <ul>
              {cat.items.map((item, idx) => (
                <li key={idx} className="ml-4">{item.name} - ${item.price}</li>
              ))}
            </ul>
            <button className="mt-2 text-primary hover:underline">Edit Category</button>
          </div>
        ))}
      </div>
    </div>
  )
}