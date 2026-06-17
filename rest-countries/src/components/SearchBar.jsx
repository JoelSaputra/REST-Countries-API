import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const SearchBar = ({onSearch}) => {

  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  }



  return (
    <form onSubmit={handleSubmit} className="bg-white flex align-text pl-10 pr-5
                      shadow-md max-w-md h-12 rounded">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="text-gray-400 mt-4 mr-5"/>
        <input className="w-lg outline-none"
        type="search" 
        placeholder="Search for a country..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        />
    </form>
  )
}

export default SearchBar