import React from 'react'

const OptionBar = ({ countries }) => {

  const nonDuplicates = new Set(countries.map((country)=>{
    return country.region;
  }));
  const nonDuplicatesArray = [...nonDuplicates];


  return (
    <div className="bg-white flex align-text pl-10 pr-5
                      shadow-md max-w-md h-12 rounded">

    <select className="pr-5 outline-none bg-white">
        <option>Filter by Region</option>
        {nonDuplicatesArray.map((region)=>{
          return <option key={region}>{region}</option>
        })}
    </select>

    </div>
  )
}

export default OptionBar