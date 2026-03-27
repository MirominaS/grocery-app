import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import CheckoutPage from './pages/CheckoutPage/CheckoutPage'
import Admin from './pages/Admin/Admin'

function App() {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('spar_cart');
    return savedCart ? JSON.parse(savedCart):[]})

  useEffect(() => {
    localStorage.setItem('spar_cart', JSON.stringify(cartItems))
  },[cartItems])
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home cartItems={cartItems} setCartItems={setCartItems}/>}/>
        <Route path = "/cart" element = {<Cart cartItems={cartItems} setCartItems={setCartItems}/>}/>
        <Route path = "/checkout" element = {<CheckoutPage cartItems={cartItems} setCartItems={setCartItems}/>}/>
        <Route path = "/admin" element = {<Admin/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
