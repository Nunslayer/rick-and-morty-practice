import { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card'
import CardEpisodes from './components/CardEpisodes'
import './App.css'
import Autocomplete from './components/Autocomplete'
import MainBoard from './components/MainBoard'

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
        setInfo(res.data)
        // const {type, id, name, dimension, residents} = res.data
        // setInfo({type, id, name, dimension, residents})
      })
      .catch(error => console.log(error))
      .finally(()=>setIsReady(true) )
  }, [])

  const getInfo = (url) => {
    axios.get(url)
      .then(res => {
        setInfo(res.data)
      })
      .catch(error => console.log(error))
      .finally(()=>setIsReady(true) )
    // console.log(url)
    // if(url.includes('episode')){
    //   axios.get(url)
    //   .then(res => {
    //     const {air_date, id, name, characters, episode} = res.data
    //     setInfo({air_date, id, name, characters, episode})
    //   })
    //   .catch(error => console.log(error))
    //   .finally(()=>setIsReady(true) )
    //   return
    // }if(url.includes('location')){
    //   axios.get(url)
    //   .then(res => {
    //     const {type, id, name, dimension, residents} = res.data
    //     setInfo({type, id, name, dimension, residents})
    //   })
    //   .catch(error => console.log(error))
    //   .finally(()=>setIsReady(true) )
    //   return
    // }if(url.includes('character')){
    //   axios.get(url)
    //   .then(res => {
    //     const {id, name, species, gender, image, status, episode} = res.data
    //     setInfo({id, name, species, gender, image, status, episode})
    //   })
    //   .catch(error => console.log(error))
    //   .finally(()=>setIsReady(true) )
    //   return
    // }
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
      {isReady && <MainBoard info={info}/>}
    </div>
  )
}

export default App
