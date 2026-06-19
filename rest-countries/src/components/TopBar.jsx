import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons'

const TopBar = ({ resetClick }) => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved === 'dark') {
      setIsDark(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleDarkMode = () => {
    const newDark = !isDark
    setIsDark(newDark)
    
    if (newDark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <div className="bg-card shadow-md h-20 flex items-center px-6 transition-colors duration-300">
      <h1 
        className="font-nunito font-extrabold text-xl text-text ml-10 hover:cursor-pointer transition-colors"
        onClick={resetClick}
      >
        Where in the world?
      </h1>
      
      <button 
        onClick={toggleDarkMode}
        className="ml-auto flex items-center gap-2 font-medium text-text mr-12 hover:text-gray-600 dark:hover:text-gray-300 transition-colors cursor-pointer"
      >
        <FontAwesomeIcon icon={isDark ? faSun : faMoon} />
        <span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>
      </button>
    </div>
  )
}

export default TopBar