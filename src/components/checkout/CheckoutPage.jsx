import { useState } from 'react'
import { useCart } from '../../context/CartContext'
import { orderService } from '../../api/orderApi'
import StepIndicator from './StepIndicator'
import DeliveryPickup from './DeliveryPickup'
import ContactForm from './ContactForm'
import AddressForm from './AddressForm'
import TimeSelector from './TimeSelector'
import SpecialInstructions from './SpecialInstructions'
import PaymentMethod from './PaymentMethod'
import OrderReview from './OrderReview'
import OrderSuccess from './OrderSuccess'
import { motion } from 'framer-motion'

const steps = ['Delivery', 'Contact', 'Address', 'Time', 'Notes', 'Payment', 'Review']

export default function CheckoutPage() {
  const { items, getTotalPrice, clearCart } = useCart()
  const [currentStep, setCurrentStep] = useState(0)
  const [orderData, setOrderData] = useState({
    deliveryType: 'delivery',
    name: '',
    email: '',
    phone: '',
    address: '',
    time: 'asap',
    notes: '',
    payment: 'cod',
  })
  const [success, setSuccess] = useState(false)
  const total = getTotalPrice() + (orderData.deliveryType === 'delivery' ? 3.99 : 0)

  const updateOrderData = (key, value) => setOrderData(prev => ({ ...prev, [key]: value }))

  const nextStep = () => setCurrentStep(prev => prev + 1)
  const prevStep = () => setCurrentStep(prev => prev - 1)

  const submitOrder = async () => {
    const fullOrder = { ...orderData, items, total }
    const result = await orderService.createOrder(fullOrder)
    if (result.success) {
      clearCart()
      setSuccess(true)
    }
  }

  if (success) return <OrderSuccess orderId={Date.now()} />

  const StepComponent = [
    <DeliveryPickup key="delivery" type={orderData.deliveryType} onChange={(type) => updateOrderData('deliveryType', type)} />,
    <ContactForm key="contact" data={orderData} onChange={updateOrderData} />,
    <AddressForm key="address" data={orderData} onChange={updateOrderData} />,
    <TimeSelector key="time" time={orderData.time} onChange={(time) => updateOrderData('time', time)} />,
    <SpecialInstructions key="notes" notes={orderData.notes} onChange={(notes) => updateOrderData('notes', notes)} />,
    <PaymentMethod key="payment" method={orderData.payment} onChange={(method) => updateOrderData('payment', method)} />,
    <OrderReview key="review" data={orderData} items={items} total={total} onSubmit={submitOrder} />,
  ][currentStep]

  return (
    <div className="py-20 container mx-auto px-6">
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-4xl font-bold mb-8 text-center">Checkout</motion.h1>
      <StepIndicator steps={steps} current={currentStep} />
      <div className="max-w-2xl mx-auto mt-12">
        {StepComponent}
        <div className="flex justify-between mt-8">
          {currentStep > 0 && (
            <button onClick={prevStep} className="px-6 py-3 border border-gray-300 rounded-full hover:bg-gray-50">
              Back
            </button>
          )}
          {currentStep < steps.length - 1 ? (
            <button onClick={nextStep} className="ml-auto btn-primary px-6 py-3">
              Next
            </button>
          ) : null}
        </div>
      </div>
    </div>
  )
}