// Mock delay for API calls
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

// Mock menu fetch (in real app, fetch from backend)
export const fetchMenu = async () => {
  await delay(500)
  return import('../utils/menuData').then(module => module.menuCategories)
}

// Mock order submit
export const submitOrder = async (orderData) => {
  await delay(1000)
  return { success: true, orderId: 'ORD-' + Math.random().toString(36).substr(2, 9).toUpperCase() }
}

// Mock auth
export const login = async (credentials) => {
  await delay(800)
  return { token: 'mock-jwt', user: { id: 1, name: 'John Doe' } }
}