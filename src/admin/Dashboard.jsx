export default function Dashboard() {
  const stats = [
    { label: 'Total Orders', value: 124 },
    { label: 'Revenue Today', value: '$1,250' },
    { label: 'Active Users', value: 45 },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {stats.map((stat, idx) => (
        <div key={idx} className="glass p-6">
          <h3 className="text-gray-600">{stat.label}</h3>
          <p className="text-3xl font-bold text-primary">{stat.value}</p>
        </div>
      ))}
    </div>
  )
}