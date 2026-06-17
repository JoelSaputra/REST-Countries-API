import { useState } from 'react'
import TopBar from './components/TopBar'
import SearchBar from './components/SearchBar'
import OptionBar from './components/OptionBar';
import CountryCard from './components/CountryCard';
import data from './data.json'

function App() {

  const response = data;
  const [city, setCity] = useState("");

  

  return (
    

    <div className="min-h-screen bg-custom-white">
      <TopBar/>

      <div className="mt-20 ml-15 flex flex-row space-x-170">
      <SearchBar/>
      <OptionBar/>
      </div>


      <div className="mt-10 ml-15 mr-15">
      <CountryCard/>
      </div>


    </div>
  )
}

export default App
