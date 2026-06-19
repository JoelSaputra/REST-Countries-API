import React, { useState } from 'react'

const OptionBar = ({ countries, onSelectRegion, buttonOption, setButtonOption }) => {
  const [isOpen, setIsOpen] = useState(false)

  const nonDuplicatesArray = [...new Set(countries.map(c => c.region))]

  const handleClickDisplay = () => setIsOpen(!isOpen)

  const handleClick = (pRegion) => {
    setButtonOption(pRegion)
    setIsOpen(false)
    onSelectRegion(pRegion)
  }

  return (
    <div className="relative bg-card shadow-md h-12 rounded-lg w-50 transition-colors duration-300">
      <button 
        onClick={handleClickDisplay}
        className="w-full h-full flex items-center justify-between px-6 text-text font-medium"
      >
        <span>{buttonOption}</span>
        <span className="text-input">{isOpen ? '▲' : '▼'}</span>
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-full bg-card shadow-lg rounded-lg py-2 z-10 transition-colors duration-300">
          <button 
            onClick={() => {
              setButtonOption("Filter by Region")
              setIsOpen(false)
              onSelectRegion('')
            }}
            className="w-full text-left px-6 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-text transition-colors"
          >
            Filter by Region
          </button>
          
          {nonDuplicatesArray.map((region) => (
            <button 
              key={region}
              onClick={() => handleClick(region)}
              className="w-full text-left px-6 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-text transition-colors"
            >
              {region}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default OptionBar