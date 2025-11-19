export default function SizeSelector({ size, onChange }) {
  return (
    <div className="flex space-x-2 mb-3">
      {['small', 'large'].map(s => (
        <button
          key={s}
          onClick={() => onChange(s)}
          className={`px-3 py-1 rounded-full text-sm ${size === s ? 'bg-primary text-white' : 'bg-gray-100 text-dark'}`}
        >
          {s.charAt(0).toUpperCase() + s.slice(1)}
        </button>
      ))}
    </div>
  )
}