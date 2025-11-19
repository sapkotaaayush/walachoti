import MenuList from '../components/menu/menuList'
import MobileNav from '../components/layout/MobileNav'
import { useCart } from '../context/CartContext'

export default function MenuPage() {
  const { getTotalItems } = useCart()

  return (
    <>
      <MenuList />
      <MobileNav cartCount={getTotalItems()} />
    </>
  )
}