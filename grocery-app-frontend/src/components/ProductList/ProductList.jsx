import React from 'react'
import './ProductList.css'
import ProductCard from '../ProductCard/ProductCard'

const ProductList = ({products, addToCart}) => {
  return (
    <div className='product-list'>
      {products && products.length > 0 ? (
        products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))
      ) : (
        <p className='no-products'>No products available</p>
      )}
    </div>
  )
}

export default ProductList