import AdminLayout from '../../components/admin/AdminLayout'
import Dashboard from '../../components/admin/Dashboard'
import Analytics from '../../components/admin/Analytics'

export default function AdminDashboard() {
  return (
    <AdminLayout>
      <Dashboard />
      <Analytics />
    </AdminLayout>
  )
}