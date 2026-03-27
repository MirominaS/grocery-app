import React from 'react'
import './CategoryFilter.css'

const CategoryFilter = ({setCategory}) => {
  return (
 <div className='category-filter'>
      <select className='category-select' onChange={(e) => setCategory(e.target.value)}>
        <option value="">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
        <option value="Bakery">Bakery</option>
      </select>
    </div>
  )
}

export default CategoryFilter