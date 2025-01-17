import Dashboard from '@components/Dashboard'

const DashboardLayout = ({ children }) => <Dashboard>{children}</Dashboard>

export const getLayout = page => <DashboardLayout>{page}</DashboardLayout>

export default DashboardLayout
