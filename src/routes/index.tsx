import { createBrowserRouter } from 'react-router-dom'

import { ROUTES } from '@/configs/'
import Layout from '@/layout/Main'
import Login from '@/pages/Auth/Login'
import Register from '@/pages/Auth/Register'
import Home from '@/pages/Home'
import NotFound from '@/pages/Others/NotFound'

import { profileRoutes } from './profile'

const router = createBrowserRouter([
  {
    path: ROUTES.LOGIN,
    element: <Login />
  },
  {
    path: ROUTES.REGISTER,
    element: <Register />
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: ROUTES.HOME,
        element: <Home />
      },
      {
        path: ROUTES.NOT_FOUND,
        element: <NotFound />
      },
      ...profileRoutes
    ]
  }
])

export default router
