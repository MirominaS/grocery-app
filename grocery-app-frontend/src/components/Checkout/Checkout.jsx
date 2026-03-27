import React, { useState } from 'react'
import './Checkout.css'
import { useNavigate } from 'react-router-dom'
import { placeOrder } from '../../api/orderApi'

const Checkout = ({cartItems, setCartItems}) => {
  const navigate = useNavigate()
  const [customerData, setCustomerData] = useState({
    customer_name: '',
    phone_no: '',
    address: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (cartItems.length === 0) return alert("Cart is Empty")

    const orderData = {
      ...customerData,
      items: cartItems.map(item => ({
        product_id: item.id,
        quantity: item.quantity
      }))
    }

    const res  =  await placeOrder(orderData)
    if(res && res.success) {
      alert("Order successfull!")
      setCartItems([])
      navigate('/')
    } else {
      alert("Failed: " +(res?.message || "Unknown error"))
    }
  }
  
  return (
    <div className='checkout-form'>
      <h2 className='form-title'>Checkout</h2>

      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>Customer Name</label>
          <input required type="text" placeholder="Enter your name" onChange={(e) => setCustomerData({...customerData, customer_name:e.target.value})}/>
        </div>

        <div className='form-group'>
          <label>Phone Number</label>
          <input required type="text" placeholder="Enter your phone number" onChange={(e) => setCustomerData({...customerData, phone_no:e.target.value})}/>
        </div>

        <div className='form-group'>
          <label>Delivery Address</label>
          <textarea required placeholder="Enter your address" onChange={(e) => setCustomerData({...customerData, address:e.target.value})}></textarea>
        </div>

        <button type="submit" className='place-order-btn'>
          Place Order
        </button>
      </form>
    </div>
  )
}

export default Checkout