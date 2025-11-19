import { Route } from 'react-router-dom'
import Home from './pages/Home'
import MenuPage from './pages/MenuPage'
import CartPage from './pages/CartPage'
import CheckoutPage from './pages/CheckoutPage'
import ProfilePage from './pages/ProfilePage'
import OrderTrackingPage from './pages/OrderTrackingPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import PrivacyPage from './pages/PrivacyPage'
import TermsPage from './pages/TermsPage'
import NotFound from './pages/NotFound'
import AdminDashboard from './pages/admin/AdminDashboard'
import AdminOrders from './pages/admin/AdminOrders'
import AdminMenu from './pages/admin/AdminMenu'
import AdminSettings from './pages/admin/AdminSettings'

const routes = [
  <Route path="/" element={<Home />} key="home" />,
  <Route path="/menu" element={<MenuPage />} key="menu" />,
  <Route path="/cart" element={<CartPage />} key="cart" />,
  <Route path="/checkout" element={<CheckoutPage />} key="checkout" />,
  <Route path="/profile" element={<ProfilePage />} key="profile" />,
  <Route path="/track/:orderId" element={<OrderTrackingPage />} key="track" />,
  <Route path="/about" element={<AboutPage />} key="about" />,
  <Route path="/contact" element={<ContactPage />} key="contact" />,
  <Route path="/privacy" element={<PrivacyPage />} key="privacy" />,
  <Route path="/terms" element={<TermsPage />} key="terms" />,
  <Route path="/admin" element={<AdminDashboard />} key="admin" />,
  <Route path="/admin/orders" element={<AdminOrders />} key="admin-orders" />,
  <Route path="/admin/menu" element={<AdminMenu />} key="admin-menu" />,
  <Route path="/admin/settings" element={<AdminSettings />} key="admin-settings" />,
  <Route path="*" element={<NotFound />} key="notfound" />,
]

export default routes.map(route => <Route {...route.props} />)