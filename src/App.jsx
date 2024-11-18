import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/Guest/Home'
import CoursePage from './pages/Guest/Course'
import RootLayout from './layout/RootLayout'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        { path: '', element: <HomePage /> },
        { path: '/course', element: <CoursePage /> }
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App
