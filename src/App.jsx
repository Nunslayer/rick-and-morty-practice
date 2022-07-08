import { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card'
import CardEpisodes from './components/CardEpisodes'
import './App.css'
import Autocomplete from './components/Autocomplete'
import MainBoard from './components/MainBoard'
import background from './assets/images/image3.png'
import titleBackground from './assets/images/image2.png'
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
  }

  if(!isReady) return <h2>loading....</h2>
  return (
    <div className="App">
      <section className="header">
        <img src={background} alt="" />
        <div className="tittle-image">
          <img src={titleBackground} alt="" />
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
