import React, { useEffect, useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ProductList from '../../components/ProductList/ProductList'
import { getProducts } from '../../api/productApi'

const Home = ({cartItems, setCartItems}) => {

  const [products, setProducts] = useState([])
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("")

  useEffect(() => {
    fetchProducts()
  },[search,category])

  const fetchProducts = async () => {
    const res = await getProducts(search,category)
    if (res && res.success) {
      setProducts(res.data)
    }
  }

const addToCart = (product) => {
  setCartItems((prevItems) => {
    const exists = prevItems.find(item => item.id === product.id)

    if (exists) {
      return prevItems.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    } else {
      return [...prevItems, { ...product, quantity: 1 }]
    }
    
  })
  console.log("Cart updating...");
}
  
  return (
    <div className='home'>
        <Header setSearch={setSearch} setCategory={setCategory}/>

        <div className='home-content'>
            <h2 className='home-title'>Products</h2>
            <ProductList products={products} addToCart={addToCart}/>
        </div>
    </div>
  )
}

export default Home