import React from 'react'
import { ArrowLeft } from "lucide-react"

const DetailedPage = ({ country, backClick }) => {
  return (
    <div className="min-h-screen bg-bg text-text transition-colors duration-300">
      <div className="mt-20 ml-6">
        <button
          onClick={backClick}
          className="flex items-center gap-4 px-6 py-2 bg-card shadow-md rounded-lg text-text hover:shadow-lg 
          transition-all duration-300 ml-25"
        >
          <ArrowLeft size={18} strokeWidth={2.3} />
          <span>Back</span>
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 mt-16 px-8 max-w-7xl mx-auto">
        <div className="lg:w-1/2">
          <img 
            alt={`Flag of ${country.name}`} 
            src={country.flags.svg}
            className="w-full h-[250px] lg:h-[400px] object-cover rounded-lg shadow-md"
          />
        </div>

        <div className="lg:w-1/2 mt-10 ml-15">
          <h1 className="font-extrabold text-3xl mb-15">{country.name}</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
            <p className="text-sm">
              <span className="font-semibold">Native Name:</span> {country.nativeName}
            </p>
            <p className="text-sm">
              <span className="font-semibold">Population:</span> {country.population?.toLocaleString()}
            </p>
            <p className="text-sm">
              <span className="font-semibold">Region:</span> {country.region}
            </p>
            <p className="text-sm">
              <span className="font-semibold">Sub Region:</span> {country.subregion}
            </p>
            <p className="text-sm">
              <span className="font-semibold">Capital:</span> {country.capital}
            </p>
            <p className="text-sm">
              <span className="font-semibold">Top Level Domain:</span> {country.topLevelDomain}
            </p>
            <p className="text-sm">
              <span className="font-semibold">Currencies:</span> {country.currencies?.[0]?.code || 'N/A'}
            </p>
            <p className="text-sm">
              <span className="font-semibold">Languages:</span> {country.languages?.map(l => l.name).join(', ') || 'N/A'}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-2">
            <p className="font-semibold mr-1">Border Countries:</p>
            {country.borders?.length > 0 ? (
              country.borders.map((border) => (
                <span key={border} className="px-4 py-1 bg-card shadow-sm rounded text-sm">
                  {border}
                </span>
              ))
            ) : (
              <span className="text-text/50">None</span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailedPage