export default function Select({ label, options, ...props }) {
  return (
    <div className="space-y-1">
      {label && <label className="block text-sm font-medium">{label}</label>}
      <select className="w-full p-3 border border-gray-300 rounded-lg focus:border-primary" {...props}>
        {options.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
      </select>
    </div>
  )
}