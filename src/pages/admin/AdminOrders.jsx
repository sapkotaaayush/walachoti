import AdminLayout from '../../components/admin/AdminLayout'
import OrdersPanel from '../../components/admin/OrdersPanel'
import OrderFilters from '../../components/admin/OrderFilters'

export default function AdminOrders() {
  return (
    <AdminLayout>
      <OrderFilters />
      <OrdersPanel />
    </AdminLayout>
  )
}