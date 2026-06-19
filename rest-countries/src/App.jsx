import { useState } from 'react'
import TopBar from './components/TopBar'
import SearchBar from './components/SearchBar'
import OptionBar from './components/OptionBar';
import CountryCard from './components/CountryCard';
import data from './data.json'
import DetailedPage from './components/DetailedPage';

function App() {

  const [countries, setCountries] = useState(data);
  const [selectedRegions, setSelectedRegions] = useState('');
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCountries, setFilteredCountries] = useState(data);
  const [detailedIsOn, setDetailedIsOn] = useState(false);
  const [detailedCountry, setDetailedCountry] = useState(null);

  const applyFilters = (search, region) => {

    let filtered = [...countries];

    if(search && search.trim() !== ''){
      filtered = filtered.filter(
        (country) => country.name.toLowerCase().includes(search.toLowerCase())
    );
    }
    if(region && region !== ''){
      filtered = filtered.filter(
        (country) => country.region === region
      )
    }
    setFilteredCountries(filtered);
  }

  const handleSearch = (search) => {
    setSearchTerm(search)
    applyFilters(search, selectedRegions);
  
  }

  const handleRegion = (region) => {
    setSelectedRegions(region)
    applyFilters(searchTerm, region);
  }

  const openDetail = (pDetailedCountry) => {
    setDetailedCountry(pDetailedCountry);
    setDetailedIsOn(true);
  }


  return (

    <div className="min-h-screen bg-custom-white overflow-x-hidden">
      <TopBar/>

      { detailedIsOn &&
      <div className="bg-custom-white min-h-100 min-w-screen overflow-y-hidden" >
        <DetailedPage country={detailedCountry}/>
      </div>
      }

      {!detailedIsOn && 
      <>
      <div className="mt-20 ml-15 flex flex-row space-x-170">
      <SearchBar onSearch={handleSearch}/>
      <OptionBar countries={countries} onSelectRegion={handleRegion}/>
      </div>


      <div className="w-max mb-5 mt-10 ml-15 mr-15 grid grid-cols-4 space-x-32 space-y-32">
       {filteredCountries.map((country)=> 
       <CountryCard key={country.name} country={country} onClick={() => openDetail(country)}/> )}
      </div>

      </>
      }

    </div>
  )
}

export default App
