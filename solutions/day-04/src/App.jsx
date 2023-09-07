import { useState, useEffect } from 'react'
import { countriesData } from './countries'
import CountryCard from './CountryCard'
import './App.css'

function App() {
  const [index, changeCountry] = useState(0)
  const [loading, setLoading] = useState(false)

  const handleClick = () => {
    setLoading(true)
    changeCountry(index+1)
  }
 
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Cleanup timer if the component unmounts
    return () => clearTimeout(timer);
  }, [index]); 


  return (
    <>
      {loading ? 
        <p>loading...</p> :
        <CountryCard
                country={countriesData[index]}
                onClick={handleClick}
              />
      }
    </>
  )
}

export default App
