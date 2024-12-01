import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/Guest/Home'
import CoursePage from './pages/Guest/Course'
import RootLayout from './layout/RootLayout'
import OurCompany from '~/pages/Guest/About/OurCompany'
import FeaturedNews from './pages/Guest/News/FearturedNews'
import EventsPage from './pages/Guest/News/EventsPage'
import PrivateLayout from '~/layout/PrivateLayout'
import Course from '~/pages/Admin/Course'
import Contact from '~/pages/Admin/Contact'
import News from '~/pages/Guest/News'
import AddNews from '~/pages/Admin/AddNews'
import UpdateNews from '~/pages/Admin/UpdateNews'
import AdminNews from '~/pages/Admin/News'
import DetailNews from '~/pages/Guest/News/Detail/_id'

function App() {
  const router = createBrowserRouter([
    {
      path: '',
      element: <RootLayout />,
      children: [
        { path: '/', element: <HomePage /> },
        { path: '/course/:_id', element: <CoursePage /> },
        { path: '/our-company', element: <OurCompany /> },
        { path: '/feartured-news', element: <FeaturedNews /> },
        { path: '/events', element: <EventsPage /> },
        { path: '/news', element: <News /> },
        { path: '/news/:_id', element: <DetailNews /> }
      ]
    },
    {
      path: '',
      element: <PrivateLayout />,
      children: [
        { path: '/admin', element: <Course /> },
        { path: '/admin/course', element: <Course /> },
        { path: '/admin/contact', element: <Contact /> },
        { path: '/admin/news', element: <AdminNews /> },
        { path: '/admin/add-news', element: <AddNews /> },
        { path: '/admin/update-news/:_id', element: <UpdateNews /> }
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App
