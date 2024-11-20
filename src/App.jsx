import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/Guest/Home'
import CoursePage from './pages/Guest/Course'
import RootLayout from './layout/RootLayout'
import OurCompany from '~/pages/Guest/About/OurCompany'
import OurTeam from '~/pages/Guest/About/OurTeam'
import FeaturedNews from './pages/Guest/News/FearturedNews'
import EventsPage from './pages/Guest/News/EventsPage'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        { path: '/', element: <HomePage /> },
        { path: '/course', element: <CoursePage /> },
        { path: '/our-company', element: <OurCompany /> },
        { path: '/our-team', element: <OurTeam /> },
        { path: '/feartured-news', element: <FeaturedNews /> },
        { path: '/events', element: <EventsPage /> },
      ],
    },
  ])

  return <RouterProvider router={router} />
}

export default App
