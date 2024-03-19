
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// redux integrations
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'

// pages & components
import Register from './pages/Register'
import Login from './pages/Login'
import ForgotPassword from './pages/ForgotPassword'
import CreateNewPassword from './pages/CreateNewPassword'
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
    path: 'create-new-password',
    element: <CreateNewPassword/>
  },
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/products',
    element: <Products />
  },
  {
    path: '/products/:id',
    element: <ProductDetails /> 
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
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  )
}

export default App
