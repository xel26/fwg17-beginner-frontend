
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
import PrivateRoute from './components/privateRoute'

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
    path: '/',
    element: <Home />
  },
  {
    path: '/products',
    element: <PrivateRoute> <Products /> </PrivateRoute>
  },
  {
    path: '/products/:id',
    element: <PrivateRoute> <ProductDetails /> </PrivateRoute>
  },
  {
    path: '/checkout',
    element: <PrivateRoute> <Checkout /> </PrivateRoute>
  },
  {
    path: '/history-order',
    element: <PrivateRoute> <HistoryOrder /> </PrivateRoute>
  },
  {
    path: '/order-details/:id',
    element: <PrivateRoute> <OrderDetails /> </PrivateRoute>
  },
  {
    path: '/profile',
    element: <PrivateRoute> <Profile/> </PrivateRoute>
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
