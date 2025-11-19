import Input from '../common/Input'
import { useState } from 'react'

export default function AccountSettings() {
  const [name, setName] = useState('John Doe')
  const [email, setEmail] = useState('john@example.com')

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-6">Account Settings</h2>
      <div className="card-hover p-6">
        <Input label="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <Input label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <button className="mt-4 btn-primary">Save Changes</button>
      </div>
    </div>
  )
}