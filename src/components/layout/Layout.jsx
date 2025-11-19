// Wrapper for pages that need layout (e.g., admin)
export default function Layout({ children }) {
  return (
    <div className="glass p-6 min-h-screen">
      {children}
    </div>
  )
}