import { useState } from 'react'
import TopBar from './components/TopBar'
import SearchBar from './components/SearchBar'
import OptionBar from './components/OptionBar';

function App() {

  const [city, setCity] = useState("");
  

  return (
    <div className="min-h-screen bg-neutral-200">
      <TopBar/>

      <div className="mt-20 ml-15 flex flex-row space-x-170">
      <SearchBar/>
      <OptionBar/>
      </div>


    </div>
  )
}

export default App
