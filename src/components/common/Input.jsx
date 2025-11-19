export default function Input({ label, type = 'text', ...props }) {
  return (
    <div className="space-y-1">
      {label && <label className="block text-sm font-medium">{label}</label>}
      <input 
        type={type === 'textarea' ? undefined : type} 
        as={type === 'textarea' ? 'textarea' : 'input'}
        className="w-full p-3 border border-gray-300 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
        {...props}
      />
    </div>
  )
}