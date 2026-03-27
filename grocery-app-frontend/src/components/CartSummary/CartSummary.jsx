import React from 'react'
import './CartSummary.css'
import { useNavigate } from 'react-router-dom'

const CartSummary = ({total}) => {
  const navigate = useNavigate();

  return (
     <div className='cart-summary'>
      <h2 className='summary-title'>Order Summary</h2>

      <div className='summary-row'>
        <span>Total</span>
        <span className='summary-total'>${total}</span>
      </div>

      <button className='checkout-btn' onClick={() => navigate('/checkout')}>Proceed to Checkout</button>
    </div>
  )
}

export default CartSummary