import { Link } from 'react-router-dom'
import { HomeIcon, MenuIcon, ShoppingBagIcon, UserIcon } from '@heroicons/react/24/outline'

export default function MobileNav({ cartCount }) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden">
      <div className="flex justify-around py-2">
        <Link to="/" className="flex flex-col items-center">
          <HomeIcon className="h-6 w-6" />
          <span className="text-xs">Home</span>
        </Link>
        <Link to="/menu" className="flex flex-col items-center">
          <MenuIcon className="h-6 w-6" />
          <span className="text-xs">Menu</span>
        </Link>
        <Link to="/cart" className="relative flex flex-col items-center">
          <ShoppingBagIcon className="h-6 w-6" />
          {cartCount > 0 && <span className="absolute -top-2 -right-2 bg-primary text-white rounded-full h-5 w-5 text-xs flex items-center justify-center">{cartCount}</span>}
          <span className="text-xs">Cart</span>
        </Link>
        <Link to="/profile" className="flex flex-col items-center">
          <UserIcon className="h-6 w-6" />
          <span className="text-xs">Profile</span>
        </Link>
      </div>
    </nav>
  )
}