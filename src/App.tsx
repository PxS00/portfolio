import { Outlet } from 'react-router-dom'
import Footer from './shared/components/Footer/Footer'
import Navbar from './shared/components/Navbar/Navbar'

export default function App() {
  return (
    <div className="relative flex min-h-screen flex-col bg-transparent">
      <Navbar />
      <main className="w-full flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
