export default function GuestCheckout({ onProceed }) {
  return (
    <div className="text-center p-8 border rounded-xl">
      <h3 className="font-bold mb-4">Continue as Guest</h3>
      <p className="mb-6">No account needed for quick checkout.</p>
      <button onClick={onProceed} className="btn-primary px-8 py-3">Checkout as Guest</button>
    </div>
  )
}