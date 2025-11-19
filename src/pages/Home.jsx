import Hero from '../components/home/Hero'
import FeaturedDishes from '../components/home/FeaturedDishes'
import Categories from '../components/home/Categories'
import DeliveryInfo from '../components/home/DeliveryInfo'
import Testimonials from '../components/home/Testimonials'
import LunchSpecial from '../components/home/LunchSpecial'
import MobileNav from '../components/layout/MobileNav'
import { useCart } from '../context/CartContext'

export default function Home() {
  const { getTotalItems } = useCart()

  return (
    <>
      <Hero />
      <FeaturedDishes />
      <Categories />
      <DeliveryInfo />
      <Testimonials />
      <LunchSpecial />
      <MobileNav cartCount={getTotalItems()} />
    </>
  )
}