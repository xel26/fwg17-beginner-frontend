
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import ForgotPassword from './pages/ForgotPassword'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import Checkout from './pages/Checkout'
import HistoryOrder from './pages/HistoryOrder'
import OrderDetails from './pages/OrderDetails'
import Profile from './pages/Profile'

const router = createBrowserRouter([
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/forgot-password',
    element: <ForgotPassword />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/products',
    element: <Products />
  },
  {
    path: '/product-details',
    element: <ProductDetails />
  },
  {
    path: '/checkout',
    element: <Checkout />
  },
  {
    path: '/history-order',
    element: <HistoryOrder />
  },
  {
    path: '/order-details',
    element: <OrderDetails />
  },
  {
    path: '/profile',
    element: <Profile/>
  }
])

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
