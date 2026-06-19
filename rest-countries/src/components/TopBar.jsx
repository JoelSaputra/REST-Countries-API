import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-regular-svg-icons' 

const TopBar = ({resetClick}) => {
  return (
    <div className="bg-white h-20 flex flex-row items-center space-x-260">
        <h1 className="ml-14 font-nunito font-extrabold text-xl hover:cursor-pointer"
            onClick={resetClick}
        
        >Where in the world?</h1>

        <button 
        className="font-medium hover:cursor-pointer 
                 hover:text-mist-600 transition-colors duration-200">
            <FontAwesomeIcon icon={faMoon}/>
            Dark Mode</button>
    </div>
  )
}

export default TopBar