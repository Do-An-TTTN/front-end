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
import AdminNews from '~/pages/Admin/News'
import DetailNews from '~/pages/Guest/News/Detail/_id'
import Linguaskill from './pages/Guest/Linguaskill'
import UpdateNews from '~/pages/Admin/News/UpdateNews'
import AddNews from '~/pages/Admin/News/AddNews'
import Banner from '~/pages/Admin/Banner'
import Infor from '~/pages/Admin/Infor'
import InforAdmin from '~/pages/Admin/Infor/InforAdmin/InforAdmin'
import Page from '~/pages/Admin/Page'
import AddPage from '~/pages/Admin/Page/AddPage'
import UpdatePage from '~/pages/Admin/Page/UpdatePage'
import Category from '~/pages/Admin/Category'

function App() {
  const router = createBrowserRouter([
    {
      path: '',
      element: <RootLayout />,
      children: [
        { path: '/', element: <HomePage /> },
        { path: '/course/:id', element: <CoursePage /> },
        { path: '/linguaskill', element: <Linguaskill /> },
        { path: '/our-company', element: <OurCompany /> },
        { path: '/feartured-news', element: <FeaturedNews /> },
        { path: '/events', element: <EventsPage /> },
        { path: '/news', element: <News /> },
        { path: '/news/:id', element: <DetailNews /> }
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
        { path: '/admin/update-news/:id', element: <UpdateNews /> },
        { path: '/admin/banner', element: <Banner /> },
        { path: '/admin/infor', element: <Infor /> },
        { path: '/admin/infor-admin', element: <InforAdmin /> },
        { path: '/admin/page', element: <Page /> },
        { path: '/admin/update-page/:id', element: <UpdatePage /> },
        { path: '/admin/add-page', element: <AddPage /> },
        { path: '/admin/category', element: <Category /> }
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App
