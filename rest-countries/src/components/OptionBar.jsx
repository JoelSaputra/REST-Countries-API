import React from 'react'

const OptionBar = () => {
  return (
    <div className="bg-white flex align-text pl-10 pr-5
                      shadow-md max-w-md h-12 rounded">

    <select className="pr-5 outline-none">
        <option>Filter by Region</option>
    </select>

    </div>
  )
}

export default OptionBar