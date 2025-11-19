import Input from '../common/Input'

export default function ContactForm({ data, onChange }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Your Contact Details</h2>
      <div className="space-y-4">
        <Input 
          label="Full Name" 
          value={data.name} 
          onChange={(e) => onChange('name', e.target.value)} 
          required 
        />
        <Input 
          label="Email" 
          type="email" 
          value={data.email} 
          onChange={(e) => onChange('email', e.target.value)} 
          required 
        />
        <Input 
          label="Phone" 
          type="tel" 
          value={data.phone} 
          onChange={(e) => onChange('phone', e.target.value)} 
          required 
        />
      </div>
    </div>
  )
}