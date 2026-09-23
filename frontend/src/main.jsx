import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Order from './Pages/Order/Order.jsx'
import Register from './Pages/Register/Register.jsx'
import Cart from './Pages/Cart/Cart.jsx'
import Login from './Pages/Login/Login.jsx'

const router=createBrowserRouter([
  {
path:'/',
element:<App/>
  },
    {
path:'/register',
element:<Register/>
  },
    {
path:'/cart',
element:<Cart/>
  },
  {
path:'/orders',
element:<Order/>
  },
  {path:'/login',element:<Login/>}
])

createRoot(document.getElementById('root')).render(
 <RouterProvider router={router}/>
)
