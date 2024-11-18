import { Outlet } from 'react-router-dom'
import Footer from '~/components/Footer/inex'
import Navbar from '~/components/Navbar'

function RootLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default RootLayout
