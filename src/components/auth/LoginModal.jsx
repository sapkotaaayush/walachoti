import { Dialog } from '@headlessui/react'
import { useState } from 'react'
import Input from '../common/Input'
import { authService } from '../../api/authApi'
import { useAuth } from '../../context/AuthContext'

export default function LoginModal({ isOpen, onClose }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const { login } = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const result = await authService.login(email, password)
      login(result.token, result.user)
      onClose()
    } catch (error) {
      alert('Login failed')
    }
    setLoading(false)
  }

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="glass w-full max-w-md p-6">
          <Dialog.Title className="text-2xl font-bold mb-6">Login</Dialog.Title>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <Input label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit" disabled={loading} className="w-full btn-primary">
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>
          <div className="mt-4 text-center">
            <button onClick={() => { /* Open register */ }} className="text-primary hover:underline">
              Create Account
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}