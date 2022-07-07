import { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card'
import CardEpisodes from './components/CardEpisodes'
import './App.css'
import Autocomplete from './components/Autocomplete'

function App() {
  const [info, setInfo] = useState({})
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
  }

  if(!isReady) return <h2>loading....</h2>
  return (
    <div className="App">
      <section className="header">
        <div className="tittle-image">
        </div>
        <div className="container-btns">
          {/* <span>Search by : </span> */}
          <button 
            className={endPoint==='location'?'btn-endPoint btn-is-on':'btn-endPoint'} 
            onClick={()=>setEndPoint('location')}
            >
              Location
          </button>
          <button 
            className={endPoint==='episode'?'btn-endPoint btn-is-on':'btn-endPoint'} 
            onClick={()=>setEndPoint('episode')}
            >
              Episode
          </button>
          <button 
            className={endPoint==='character'?'btn-endPoint btn-is-on':'btn-endPoint'} 
            onClick={()=>setEndPoint('character')}
            >
              Character
          </button>
        </div>
        <Autocomplete 
          getInfo={getInfo}
          endPoint={endPoint}
        />
      </section>
      <section className='main'>
        {info.dimension?(<>
        <h1>LOCATION</h1>
        <div className="card-info">
          
          <div className="info-section">
            <p className="info-tittle">Name:</p>
            <p className="info-description">{info.name}</p>
          </div>
          <div className="info-section">
            <p className="info-tittle">Type:</p>
            <p className="info-description">{info.type}</p>
          </div>
          <div className="info-section">
            <p className="info-tittle">Dimension:</p>
            <p className="info-description">{info.dimension}</p>
          </div>
          <div className="info-section">
            <p className="info-tittle">Residents:</p>
            <p className="info-description">{info.residents.length}</p>
          </div>
        </div>
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
        <h1>EPISODE</h1>
        <div className="card-info">
          
          <div className="info-section">
            <p className="info-tittle">Name:</p>
            <p className="info-description">{info.name}</p>
          </div>
          <div className="info-section">
            <p className="info-tittle">Episode:</p>
            <p className="info-description">{info.episode}</p>
          </div>
          <div className="info-section">
            <p className="info-tittle">Release:</p>
            <p className="info-description">{info.air_date}</p>
          </div>
          <div className="info-section">
            <p className="info-tittle">Characters:</p>
            <p className="info-description">{info.characters.length}</p>
          </div>
        </div>
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
          <h1>CHARACTER</h1>
          <div className="card-info">
          
          <div className="info-section">
            <p className="info-tittle">Name:</p>
            <p className="info-description">{info.name}</p>
          </div>
          <div className="info-section">
            <p className="info-tittle">Species:</p>
            <p className="info-description">{info.species}</p>
          </div>
          <div className="info-section">
            <p className="info-tittle">Status:</p>
            <p className="info-description">{info.status}</p>
          </div>
          <div className="info-section">
            <p className="info-tittle">Episodes:</p>
            <p className="info-description">{info.episode.length}</p>
          </div>
        </div>
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
      </section>
    </div>
  )
}

export default App
