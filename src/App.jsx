import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/Guest/Home'
import CoursePage from './pages/Guest/Course'
import RootLayout from './layout/RootLayout'
import OurCompany from './pages/Guest/About/OurCompany'
import OurTeam from './pages/Guest/About/OurTeam'
import Navbar from './components/Navbar'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        { path: '/', element: <HomePage /> },
        { path: '/course', element: <CoursePage /> },
        { path: '/About/OurCompany', element: <OurCompany /> },
        { path: '/About/OurTeam', element: <OurTeam /> },
      ],
    },
  ])

  return <RouterProvider router={router} />
}

export default App
