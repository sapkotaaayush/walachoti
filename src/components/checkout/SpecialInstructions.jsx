import Input from '../common/Input'

export default function SpecialInstructions({ notes, onChange }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Special Instructions</h2>
      <Input 
        type="textarea"
        label="Any notes for the kitchen?"
        value={notes}
        onChange={(e) => onChange('notes', e.target.value)}
        placeholder="E.g., Extra spicy, no onions..."
        rows={4}
      />
      <p className="text-sm text-gray-500 mt-2">This won't affect preparation time.</p>
    </div>
  )
}