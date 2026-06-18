import React from 'react'
import { useState } from 'react';

const OptionBar = ({ countries, onSelectRegion }) => {

  const [buttonOption, setButtonOption] = useState("Filter by Region");
  const [isOpen, setIsOpen] = useState(false);

  const nonDuplicates = new Set(countries.map((country)=>{
    return country.region;
  }));
  const nonDuplicatesArray = [...nonDuplicates];


  const handleClickDisplay = () => {
    if(isOpen){
      setIsOpen(false);
    }
    else{
      setIsOpen(true);

    }
  }

  const handleClick = (region) => {
    setButtonOption(region);
    setIsOpen(false);
    onSelectRegion(region);
  }




  return (
    <div className="relative bg-white flex flex-col pl-10 pr-5
                      shadow-md max-w-md h-12 rounded w-50">

    <div className="pr-5 outline-none bg-white mb-3.5">
        <button onClick={handleClickDisplay} className="mt-3">{buttonOption}</button>
    </div>
    
    {isOpen &&  
    <div className="absolute flex flex-col top-full left-0 
                    mt-1 w-full bg-white shadow-lg 
                    rounded-lg py-2 z-10 space-y-1">
      {nonDuplicatesArray.map((region)=> {
        return <button onClick={() => {handleClick(region)}} className="flex pl-10 mt-2" key={region}>{region}</button>
      })}

    </div> }

    </div>
  )
}

export default OptionBar