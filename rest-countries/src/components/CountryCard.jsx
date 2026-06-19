import React from 'react'

const CountryCard = ({ country, onClick }) => {
  return (
    <div 
      className="bg-card w-60 h-80 shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
      onClick={onClick}
    >
      <div className="w-full h-40 overflow-hidden">
        <img 
          className="w-full h-full object-cover" 
          alt={`Flag of ${country.name}`} 
          src={country.flags?.svg || country.flags?.png || country.flag}
        />
      </div>

      <div className="p-5">
        <h1 className="font-extrabold text-base mb-3 text-text">{country.name}</h1>
        <p className="text-sm text-text/70">
          <span className="font-semibold text-text">Population:</span> {country.population?.toLocaleString()}
        </p>
        <p className="text-sm text-text/70">
          <span className="font-semibold text-text">Region:</span> {country.region}
        </p>
        <p className="text-sm text-text/70">
          <span className="font-semibold text-text">Capital:</span> {country.capital}
        </p>
      </div>
    </div>
  )
}

export default CountryCard