import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("")

  const handleChange = (e) => {
    const value = e.target.value
    setQuery(value)
    onSearch(value)
  }

  return (
    <div className="bg-card flex items-center px-6 shadow-md h-12 rounded-lg ml-5transition-colors duration-300">
      <FontAwesomeIcon 
        icon={faMagnifyingGlass} 
        className="text-input mr-4" 
      />
      <input 
        className="w-full outline-none bg-transparent text-text placeholder-text/50"
        type="search" 
        placeholder="Search for a country..."
        value={query}
        onChange={handleChange}
      />
    </div>
  )
}

export default SearchBar