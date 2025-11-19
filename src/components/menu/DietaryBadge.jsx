export default function DietaryBadge({ veg }) {
  return veg ? (
    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">Veg</span>
  ) : null
}