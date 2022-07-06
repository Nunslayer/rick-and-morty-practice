import { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import Card from './components/Card'
import CardEpisodes from './components/CardEpisodes'
import './App.css'
import Autocomplete from './components/Autocomplete'

function App() {
  const [info, setInfo] = useState({})
  //const [character, setCharacter] = useState([])
  const [isReady, setIsReady] = useState(false)
  const [endPoint, setEndPoint] = useState('location')
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
        setInfo({type, id, name, dimension, residents})
      })
      .catch(error => console.log(error))
      .finally(()=>setIsReady(true) )
  }, [])

  const getInfo = (url) => {
    console.log(url)
    if(url.includes('episode')){
      axios.get(url)
      .then(res => {
        const {air_date, id, name, characters, episode} = res.data
        setInfo({air_date, id, name, characters, episode})
      })
      .catch(error => console.log(error))
      .finally(()=>setIsReady(true) )
      return
    }if(url.includes('location')){
      axios.get(url)
      .then(res => {
        const {type, id, name, dimension, residents} = res.data
        setInfo({type, id, name, dimension, residents})
      })
      .catch(error => console.log(error))
      .finally(()=>setIsReady(true) )
      return
    }if(url.includes('character')){
      axios.get(url)
      .then(res => {
        const {id, name, species, gender, image, status, episode} = res.data
        setInfo({id, name, species, gender, image, status, episode})
      })
      .catch(error => console.log(error))
      .finally(()=>setIsReady(true) )
      return
    }
    // axios.get(url)
    //   .then(res => {
    //     const {type, id, name, dimension, residents} = res.data
    //     setLocation({type, id, name, dimension, residents})
    //   })
    //   .catch(error => console.log(error))
    //   .finally(()=>setIsReady(true) )
  }

  if(!isReady) return <h2>loading....</h2>

  // const {newResidents} = location
  return (
    <div className="App">
      <div className="container-btns">
        <button onClick={()=>setEndPoint('location')}>location</button>
        <button onClick={()=>setEndPoint('episode')}>episodio</button>
        <button onClick={()=>setEndPoint('character')}>character</button>
      </div>
      <Autocomplete 
        getInfo={getInfo}
        endPoint={endPoint}
      />
      {info.dimension?(<>
      <h4>{info.id}</h4>
      <h4>{info.name}</h4>
      <h4>{info.dimension}</h4>
      <h4>residents: {info.residents.length}</h4>
      <div className="character-container">
        {info.residents && info.residents.map((resi)=>{
            return (
              <Card 
                key={resi}
                resident={resi}
              />
            )
        })}
      </div>
      </>):info.air_date?(<>
      <h4>{info.name}</h4>
      <h4>{info.episode}</h4>
      <h4>{info.air_date}</h4>
      <h4>characters: {info.characters.length}</h4>
      <div className="character-container">
        {info.characters && info.characters.map((resi)=>{
            return (
              <Card 
                key={resi}
                resident={resi}
              />
            )
        })}
      </div>
      
      </>):info.species?(<>
      <h4>name: {info.name}</h4>
      <h4>species: {info.species}</h4>
      <h4>status: {info.status}</h4>
      <h4>episodes: {info.episode.length}</h4>
      <div className="character-container">
        {info.episode && info.episode.map((episodeItem)=>{
            return (
              <CardEpisodes 
                key={episodeItem}
                episodeItem={episodeItem}
              />
            )
        })}
      </div>
      </>):<h1>NADA QUE ENSEÑAR</h1>}
      
    </div>
  )
}

export default App
