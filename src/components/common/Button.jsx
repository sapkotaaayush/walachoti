export default function Button({ children, variant = 'primary', ...props }) {
  const base = 'px-6 py-3 rounded-full font-medium transition-all duration-300'
  const variants = {
    primary: 'bg-primary text-white hover:bg-red-700 hover:scale-105 shadow-lg',
    secondary: 'border border-gray-300 text-dark hover:bg-gray-50',
  }

  return (
    <button className={`${base} ${variants[variant]}`} {...props}>
      {children}
    </button>
  )
}