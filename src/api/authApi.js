import { login } from './mockApi'

export const authService = {
  login: (email, password) => login({ email, password }),
  logout: () => ({ success: true }),
}