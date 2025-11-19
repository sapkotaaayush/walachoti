export default function Tabs({ tabs, selected, onSelect }) {
  return (
    <div className="border-b">
      <div className="flex space-x-1">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => onSelect(tab.id)}
            className={`px-4 py-2 -mb-px font-medium ${selected === tab.id ? 'border-primary border-b-2 text-primary' : 'text-gray-500 hover:text-dark'}`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  )
}