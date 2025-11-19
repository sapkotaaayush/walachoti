export const menuCategories = [
  {
    id: "entrees",
    name: "Entrées",
    icon: "🍤",
    items: [
      { name: "Vegetable Samosa (2 pcs)", price: 8.5, veg: true, desc: "Crispy pyramid-shaped pastry filled with spiced potatoes and green peas" },
      { name: "Aloo Tikki (2 pcs)", price: 8.5, veg: true },
      { name: "Onion Bhaji (2pcs)", price: 7.5, veg: true },
      { name: "Samosa Chaat", price: 11.9, veg: true, popular: true },
      { name: "Lamb Samosa (2 pcs)", price: 10.5 },
      { name: "Chicken Tikka (4pcs)", price: 15.9, popular: true },
    ]
  },
  {
    id: "chicken",
    name: "Chicken Curries",
    icon: "🍗",
    items: [
      { name: "Butter Chicken", price: 18.9, sizes: { small: 18.9, large: 22.9 }, bestseller: true },
      { name: "Chicken Tikka Masala", price: 18.9, sizes: { small: 18.9, large: 22.9 } },
      { name: "Mango Chicken", price: 18.9, sizes: { small: 18.9, large: 22.9 } },
      { name: "Chicken Vindaloo", price: 18.9, sizes: { small: 18.9, large: 22.9 }, spicy: 3 },
      { name: "Chicken Korma", price: 18.9, sizes: { small: 18.9, large: 22.9 } },
    ]
  },
  {
    id: "lamb",
    name: "Lamb Curries",
    icon: "🐑",
    items: [
      { name: "Lamb Rogan Josh", price: 19.9, sizes: { small: 19.9, large: 23.9 }, bestseller: true },
      { name: "Lamb Saag", price: 19.9, sizes: { small: 19.9, large: 23.9 } },
      { name: "Lamb Vindaloo", price: 19.9, sizes: { small: 19.9, large: 23.9 }, spicy: 3 },
    ]
  },
  {
    id: "vegetarian",
    name: "Vegetarian",
    icon: "🥗",
    items: [
      { name: "Dal Makhani", price: 15.9, sizes: { small: 15.9, large: 18.9 }, veg: true },
      { name: "Paneer Makhani", price: 17.5, sizes: { small: 17.5, large: 20.5 }, veg: true, popular: true },
      { name: "Saag Paneer", price: 17.5, sizes: { small: 17.5, large: 20.5 }, veg: true },
      { name: "Chana Masala", price: 15.9, sizes: { small: 15.9, large: 18.9 }, veg: true },
    ]
  },
  {
    id: "rice-bread",
    name: "Rice & Bread",
    icon: "🍚",
    items: [
      { name: "Plain Basmati Rice", price: 3 },
      { name: "Chicken Biryani", price: 18.9 },
      { name: "Garlic Naan", price: 4 },
      { name: "Butter Naan", price: 4 },
      { name: "Cheese & Garlic Naan", price: 6 },
    ]
  },
  {
    id: "drinks-desserts",
    name: "Drinks & Desserts",
    icon: "🥤",
    items: [
      { name: "Mango Lassi", price: 5.5 },
      { name: "Gulab Jamun", price: 5.5 },
      { name: "Rasmalai", price: 5.5 },
    ]
  }
];