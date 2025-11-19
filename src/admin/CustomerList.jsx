
export default function CustomerList() {
  const customers = [{ id: 1, name: 'John Doe', orders: 5, lastOrder: '2025-11-19' }]

  return (
    <table className="w-full border-collapse">
      <thead>
        <tr className="bg-gray-100">
          <th>Name</th>
          <th>Orders</th>
          <th>Last Order</th>
        </tr>
      </thead>
      <tbody>
        {customers.map(c => (
          <tr key={c.id} className="border-t">
            <td>{c.name}</td>
            <td>{c.orders}</td>
            <td>{c.lastOrder}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}