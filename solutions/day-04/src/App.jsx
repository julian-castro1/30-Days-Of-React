import { useState } from 'react'
import { countriesData } from './countries'
import CountryCard from './CountryCard'
import './App.css'

function App() {
  const [index, changeCountry] = useState(0)

  const handleClick = () => { changeCountry(index+1)}

  return (
    <>
      <CountryCard
          country={countriesData[index]}
          onClick={handleClick}
      />
    </>
  )
}

export default App
