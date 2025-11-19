export default function SavedAddresses() {
  const addresses = [
    { id: 1, label: 'Home', address: '123 Beach St, Maroubra' },
  ]

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Saved Addresses</h2>
      <div className="space-y-4">
        {addresses.map(addr => (
          <div key={addr.id} className="card-hover p-4">
            <h3 className="font-semibold">{addr.label}</h3>
            <p>{addr.address}</p>
            <button className="mt-2 text-primary hover:underline">Edit</button>
          </div>
        ))}
      </div>
      <button className="mt-6 btn-primary">Add New Address</button>
    </div>
  )
}