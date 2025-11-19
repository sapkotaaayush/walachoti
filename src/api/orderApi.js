import { submitOrder } from './mockApi'

export const orderService = {
  createOrder: (orderData) => submitOrder(orderData),
  getOrder: (id) => Promise.resolve({ id, status: 'preparing' }),
  getHistory: () => Promise.resolve([{ id: 'ORD-123', date: '2025-11-19', total: 45.5 }]),
}