import React from 'react'
import "./SearchBar.css"

const SearchBar = ({setSearch}) => {
  return (
    <div className='search-bar'>
        <input type="text"
            placeholder='Search'
            className='search-input'
            onChange={(e) => setSearch(e.target.value)}
        />
        <button className='search-btn'>Search</button>

    </div>
  )
}

export default SearchBar