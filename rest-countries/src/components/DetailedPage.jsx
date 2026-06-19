import React from 'react'
import { ArrowLeft } from "lucide-react";

const DetailedPage = ({country}) => {
  return (
    <div>

        <div className="mt-20 ml-6">
        <button
        className="
        mt-10 ml-6
        w-[150px] 
        h-[40px]
        flex items-center
        gap-[20px]
        px-[25px]
        bg-[#FEFEFE]
        rounded-[8px]
        shadow-[0_3px_12px_rgba(0,0,0,0.22)]
        text-[#2f2f2f]
        text-[17px]
        font-normal
        hover:cursor-pointer">
  <ArrowLeft size={18} strokeWidth={2.3} />
  <span>Back</span>
</button>
        </div>

    <div className="h-90 flex flex-row space-x-30">
        <div className="w-120 mt-15 ml-11 h-screen">
            <img alt="flag-logo" src={country.flags.svg} className=""/>
        </div>

       <div className="mt-20">
  <h1 className="font-bold text-3xl mb-6">{country.name}</h1>
  
  <div className="grid grid-cols-2 gap-x-30 gap-y-2 mt-10">
    <p className="text-sm">
      <span className="font-bold mr-1.5">Native Name:</span>
      {country.nativeName}
    </p>
    <p className="text-sm">
      <span className="font-bold mr-1.5">Population:</span>
      {country.population?.toLocaleString()}
    </p>
    <p className="text-sm">
      <span className="font-bold mr-1.5">Region:</span>
      {country.region}
    </p>
    <p className="text-sm">
      <span className="font-bold mr-1.5">Sub Region:</span>
      {country.subregion}
    </p>
    <p className="text-sm">
      <span className="font-bold mr-1.5">Capital:</span>
      {country.capital}
    </p>
    <p className="text-sm">
      <span className="font-bold mr-1.5">Top Level Domain:</span>
      {country.topLevelDomain}
    </p>
    <p className="text-sm">
      <span className="font-bold mr-1.5">Currencies:</span>
      {country.currencies?.[0]?.code || 'N/A'}
    </p>
    <p className="text-sm">
      <span className="font-bold mr-1.5">Languages:</span>
      {country.languages.map(lang => lang.name).join(', ') || 'N/A'}
    </p>
  </div>

  <div className="mt-12 flex flex-wrap items-center gap-2">
    <p className="font-semibold mr-1">Border Countries:</p>
    {country.borders.length > 0 ? (
        country.borders.map((border) => (
            <span key={border} className="px-3 py-1 bg-white shadow-sm rounded text-sm hover:cursor-pointer">
                {border}
            </span>
        ))
    ) : (
        <span className="text-gray-500">None</span>
    )}
</div>
</div>




    </div>

    </div>
  )
}

export default DetailedPage;