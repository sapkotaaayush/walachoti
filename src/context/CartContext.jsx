import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useCart = create(
  persist(
    (set, get) => ({
      items: [],
      addItem: (item) => set((state) => {
        const existing = state.items.find(i => i.id === item.id && i.size === item.size);
        if (existing) {
          return {
            items: state.items.map(i =>
              i.id === item.id && i.size === item.size
                ? { ...i, qty: i.qty + 1 }
                : i
            )
          };
        }
        return { items: [...state.items, { ...item, qty: 1 }] };
      }),
      removeItem: (id, size) => set((state) => ({
        items: state.items.filter(i => !(i.id === id && i.size === size))
      })),
      updateQty: (id, size, qty) => set((state) => ({
        items: state.items.map(i =>
          i.id === id && i.size === size ? { ...i, qty } : i
        ).filter(i => i.qty > 0)
      })),
      clearCart: () => set({ items: [] }),
      getTotalItems: () => get().items.reduce((sum, i) => sum + i.qty, 0),
      getTotalPrice: () => get().items.reduce((sum, i) => sum + (i.price * i.qty), 0),
    }),
    {
      name: 'cart-storage',
    }
  )
);