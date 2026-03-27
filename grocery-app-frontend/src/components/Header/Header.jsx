import React from 'react'
import './Header.css'
import SearchBar from '../SearchBar/SearchBar'
import CategoryFilter from '../CategoryFilter/CategoryFilter'
import {Link} from 'react-router-dom'

const Header = ({setSearch ,setCategory}) => {
  return (
      <header className='header'>
      <div className='logo'>
        <h1>SPAR Grocery</h1>
      </div>
      <div className='header-center'>
        <SearchBar setSearch={setSearch}/>
        <CategoryFilter setCategory={setCategory}/>
      </div>
      
      <nav className='nav-links'>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/checkout">Checkout</Link></li>
          <li><Link to="/admin">Admin</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header