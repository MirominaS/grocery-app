import React from 'react'
import './CheckoutPage.css'
import Header from '../../components/Header/Header';
import Checkout from '../../components/Checkout/Checkout';

const CheckoutPage = ({cartItems, setCartItems}) => {
  
  return (
    <div className='checkout-page'>
      <Header />

      <div className='checkout-container'>
        <Checkout cartItems={cartItems} setCartItems={setCartItems} />
      </div>
    </div>
  )
}

export default CheckoutPage