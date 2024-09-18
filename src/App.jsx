import { useState, createContext } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from "./pages/home/Home"
import ShoppingCart from './pages/shoppingCart/ShoppingCart'
import './App.css'
import NotFound from './pages/notFound/NotFound'

const defaultProduct = {
  products: [ 
  /*  {
      id: 1,
      price: 12000,
      title: 'NOTEBOOK G15',
      description: 'NOTEBOOK POWER',
      quantity: 2
    } */
  ]
}

const ContextShoppingCart = createContext(defaultProduct)

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/shopping-cart',
    element: <ShoppingCart />
  },
  {
    path: '*',
    element: <NotFound />
  }
])

function App() {
  const [shoppingCart, setShoppingCart] = useState(defaultProduct)

  return (
    <ContextShoppingCart.Provider value={{
      shoppingCart,
      setShoppingCart
    }}>
      <RouterProvider router={router} />
    </ContextShoppingCart.Provider>
  )
}

export {App, ContextShoppingCart}