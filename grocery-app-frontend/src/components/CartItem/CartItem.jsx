import React from 'react'
import './CartItem.css'

const CartItem = ({item, removeItem, updateQuantity}) => {
  return (
    <div className='cart-item'>
      <img
        src={item.image_url || "/image.png"}
        alt={item.name}
        className='cart-item-image'
      />

      <div className='cart-item-details'>
        <h3 className='cart-item-name'>{item.name}</h3>
        <p className='cart-item-price'>Price: $ {item.price}</p>
      </div>

      <div className='cart-item-quantity'>
        <button className='qty-btn' onClick={() => {
          if(item.quantity > 1){
            updateQuantity(item.id,item.quantity - 1)
          }
        }}>-</button>
        <span className='qty-value'>{item.quantity}</span>
        <button className='qty-btn' onClick={() =>updateQuantity(item.id, item.quantity + 1)}>+</button>
      </div>

      <button className='remove-btn' onClick={() => removeItem(item.id)}>Remove</button>
    </div>
  )
}

export default CartItem