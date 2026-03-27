import React from 'react'
import './ProductCard.css'

const ProductCard = ({product, addToCart}) => {
  return (
    <div className= 'product-card' >
      <img
        src={product.image_url|| "/image.png "}
        alt={ product.name }
        className= 'product-image'
      />
      <div className= 'product-info' >
        <h3 className= 'product-name' >{ product.name }</h3>
        <p className= 'product-category' >{ product.category }</p>
        <p className= 'product-price'>${ product.price }</p>
      </div>
      <button className= 'add-to-cart-btn' onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  )
}

export default ProductCard