import React from 'react'


const CountryCard = ({ country }) => {

  return (
    <div className="bg-stone-50 w-60 h-80 shadow-2xl rounded font-nunito">
        
        <div className="w-60 h-40">
        <img className="w-full h-full object-cover" alt="flag" 
        src={country.flags?.svg || country.flags?.png || country.flag}/>
        </div>


        <div className="flex flex-col align-middle pl-5 pt-5 pb-2">
        <h1 className="font-extrabold mb-4">{country.name}</h1>
        <p className="text-sm text-custom-grey">
            <span className="font-lightbold text-black">Population:</span> {country.population.toLocaleString()}
        </p>
        <p className="text-sm text-custom-grey">
            <span className="font-lightbold text-black">Region:</span> {country.region}
        </p>
        <p className="text-sm text-custom-grey">
            <span className="font-lightbold text-black">Capital:</span> {country.capital}
        </p>

        </div>


    </div>
  )
}

export default CountryCard;

