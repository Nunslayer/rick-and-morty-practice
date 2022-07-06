import { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card'

import './App.css'
import Autocomplete from './components/Autocomplete'

function App() {
  const [location, setLocation] = useState({})
  //const [character, setCharacter] = useState([])
  const [isReady, setIsReady] = useState(false)
  console.log('render')
  useEffect(()=>{
    const randomNumber = (min, max) => {
    const randomNum = Math.floor(Math.random() * ((max - min) ))
    return (min + randomNum)
    }
    const url = `https://rickandmortyapi.com/api/location/${randomNumber(0, 126)}`
    axios.get(url)
      .then(res => {
        const {type, id, name, dimension, residents} = res.data
        setLocation({type, id, name, dimension, residents})
      })
      .catch(error => console.log(error))
      .finally(()=>setIsReady(true) )
  }, [])

  const getLocation = (url) => {
    axios.get(url)
      .then(res => {
        const {type, id, name, dimension, residents} = res.data
        setLocation({type, id, name, dimension, residents})
      })
      .catch(error => console.log(error))
      .finally(()=>setIsReady(true) )
  }

  if(!isReady) return <h2>loading....</h2>

  // const {newResidents} = location
  return (
    <div className="App">
      <Autocomplete 
        getLocation={getLocation}
      />
      <h1>{location?.type}</h1>
      <h1>{location.id}</h1>
      <h1>{location.name}</h1>
      <h1>{location.dimension}</h1>
      <h1>residents: {location.residents.length}</h1>
      <div className="character-container">
        {location.residents && location.residents.map((resi)=>{
            return (
              <Card 
                key={resi}
                resident={resi}
              />
            )
        })}
      </div>
    </div>
  )
}

export default App
