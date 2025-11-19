export default function Settings() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Restaurant Settings</h2>
      <div className="card-hover p-6">
        <Input label="Delivery Area" placeholder="Maroubra, NSW" />
        <Input label="Min Order Value" type="number" placeholder="$20" />
        <button className="mt-4 btn-primary">Save Settings</button>
      </div>
    </div>
  )
}