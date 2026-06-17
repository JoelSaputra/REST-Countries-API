import React from 'react'


const CountryCard = ({ country }) => {

  return (
    <div className="bg-stone-50 w-60 h-75 shadow-2xl rounded font-nunito">
        
        <img alt="flag" src={country.flags.svg}/>

        <div className="flex flex-col align-middle pl-5 pt-5">

        <h1 className="font-extrabold mb-4">{country.name}</h1>
        <p className="text-sm text-custom-grey">
            <span className="font-lightbold text-black">Population:</span> {country.population}
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

