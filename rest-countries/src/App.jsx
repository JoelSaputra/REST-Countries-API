import { useState } from 'react'
import TopBar from './components/TopBar'
import SearchBar from './components/SearchBar'
import OptionBar from './components/OptionBar'
import CountryCard from './components/CountryCard'
import data from './data.json'
import DetailedPage from './components/DetailedPage'

function App() {
  const [countries] = useState(data)
  const [selectedRegions, setSelectedRegions] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [buttonOption, setButtonOption] = useState('Filter by Region')
  const [filteredCountries, setFilteredCountries] = useState(data)
  const [detailedIsOn, setDetailedIsOn] = useState(false)
  const [detailedCountry, setDetailedCountry] = useState(null)

  const applyFilters = (search, region) => {
    let filtered = [...countries]

    if (search && search.trim() !== '') {
      filtered = filtered.filter(c => 
        c.name.toLowerCase().includes(search.toLowerCase())
      )
    }
    if (region && region !== '') {
      filtered = filtered.filter(c => c.region === region)
    }
    setFilteredCountries(filtered)
  }

  const handleSearch = (search) => {
    setSearchTerm(search)
    applyFilters(search, selectedRegions)
  }

  const handleRegion = (region) => {
    setSelectedRegions(region)
    applyFilters(searchTerm, region)
  }

  const openDetail = (country) => {
    setDetailedCountry(country)
    setDetailedIsOn(true)
  }

  const closeDetail = () => {
    setDetailedIsOn(false)
  }

  const resetFilters = () => {
    applyFilters('', null)
    setButtonOption('Filter by Region')
  }

  return (
    <div className="min-h-screen bg-bg transition-colors duration-300">
      <TopBar resetClick={resetFilters} />

      {detailedIsOn ? (
        <DetailedPage country={detailedCountry} backClick={closeDetail} />
      ) : (
        <>
          <div className="mt-20 px-4 flex flex-col md:flex-row gap-210 ml-10 mx-auto">
            <SearchBar onSearch={handleSearch} />
            <OptionBar 
              countries={countries} 
              onSelectRegion={handleRegion} 
              buttonOption={buttonOption}
              setButtonOption={setButtonOption} 
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-20 p-8 mx-auto ml-5">
            {filteredCountries.map((country) => (
              <CountryCard 
                key={country.name} 
                country={country} 
                onClick={() => openDetail(country)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default App