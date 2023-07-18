import { createBrowserRouter } from 'react-router-dom'
import { App } from './App'
import { Dashboard } from './features/dashboard/Dashboard'
import { Home } from './pages/Home'
import { PropertyBrowser } from './features/browser/PropertyBrowser'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/browse',
        element: <PropertyBrowser />,
      },
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
])
