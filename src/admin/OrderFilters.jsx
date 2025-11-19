export default function OrderFilters() {
  return (
    <div className="flex space-x-4 mb-6">
      <select className="border rounded p-2">
        <option>All Status</option>
        <option>Preparing</option>
        <option>Delivered</option>
      </select>
      <input type="date" className="border rounded p-2" />
    </div>
  )
}