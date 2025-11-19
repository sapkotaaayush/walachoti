import { Dialog } from '@headlessui/react'

export default function ConfirmDialog({ isOpen, onClose, onConfirm, title = 'Confirm', message = 'Are you sure?' }) {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <div className="fixed inset-0 bg-black/30" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="glass p-6 max-w-md">
          <Dialog.Title className="text-xl font-bold mb-4">{title}</Dialog.Title>
          <p className="mb-6">{message}</p>
          <div className="flex justify-end space-x-3">
            <button onClick={onClose} className="px-4 py-2 border rounded">Cancel</button>
            <button onClick={onConfirm} className="px-4 py-2 btn-primary">Confirm</button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}