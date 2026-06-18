import { useState } from 'react'
import TopBar from './components/TopBar'
import SearchBar from './components/SearchBar'
import OptionBar from './components/OptionBar';
import CountryCard from './components/CountryCard';
import data from './data.json'

function App() {

  const [countries, setCountries] = useState(data);
  const [filteredCountries, setFilteredCountries] = useState(data);

  const handleSearch = (searchTerm) => {
    if(!searchTerm || searchTerm.trim() === ''){
      setFilteredCountries(data);
      return;
    }

    const filtered = countries.filter((country) => 
      country.name.toLowerCase().includes(searchTerm.toLowerCase())
      
    );

    setFilteredCountries(filtered);

  }

  return (

    <div className="min-h-screen bg-custom-white overflow-x-hidden">
      <TopBar/>

      <div className="mt-20 ml-15 flex flex-row space-x-170">
      <SearchBar onSearch={handleSearch}/>
      <OptionBar countries={countries}/>
      </div>


      <div className="w-max mb-5 mt-10 ml-15 mr-15 grid grid-cols-4 space-x-32 space-y-32">
       {filteredCountries.map((country)=> 
       <CountryCard key={country.name} country={country}/> )}
      </div>


    </div>
  )
}

export default App
