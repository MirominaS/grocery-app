import React from 'react'
import './Cart.css'
import Header from '../../components/Header/Header';
import CartItem from '../../components/CartItem/CartItem';
import CartSummary from '../../components/CartSummary/CartSummary';

const Cart = ({cartItems, setCartItems}) => {
  const removeItem = (id) => {
    const updated = cartItems.filter(item => item.id !== id)
    setCartItems(updated)
  }
  
  console.log(cartItems);

  const updateQuantity = (id,qty) => {
    const updated = cartItems.map(item =>
      item.id === id ? {...item, quantity: qty} : item
    )
    setCartItems(updated)
  }

  const total = cartItems.reduce((sum, item) => {
    return sum + item.price * item.quantity
  },0)

  return (
    <div className='cart-page'>
      <Header />

      <div className='cart-container'>
        <div className='cart-items-section'>
          <h2 className='cart-title'>My Cart</h2>

          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <CartItem 
                key={item.id} 
                item={item}
                removeItem={removeItem}
                updateQuantity={updateQuantity}
              />
            ))
          ) : (
            <p className='empty-cart'>Your cart is empty</p>
          )}
        </div>

        <CartSummary total={total} />
      </div>
    </div>
  )
}

export default Cart