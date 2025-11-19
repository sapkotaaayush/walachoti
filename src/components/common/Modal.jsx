import { Dialog } from '@headlessui/react'

export default function Modal({ isOpen, onClose, children, title }) {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="glass max-w-md w-full p-6">
          {title && <Dialog.Title className="text-xl font-bold mb-4">{title}</Dialog.Title>}
          {children}
          <button onClick={onClose} className="mt-4 text-gray-500 hover:text-gray-700">Close</button>
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}