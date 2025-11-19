import { fetchMenu } from './mockApi'

export const menuService = {
  getMenu: () => fetchMenu(),
  getCategory: (id) => fetchMenu().then(menu => menu.find(cat => cat.id === id)),
}