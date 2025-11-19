export default function Card({ children, className = '' }) {
  return <div className={`card-hover ${className}`}>{children}</div>
}