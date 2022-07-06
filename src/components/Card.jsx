import axios from "axios"
import { useState } from "react"
const Card = ({resident}) => {
    if(resident.length === 0) return <h1>so sorry no residents</h1>
    const [character, setCharacter] = useState({})
    const resi = () => {
        axios.get(resident)
            .then(res=> {
                const {id, name, species, gender, image, status}=res.data
                setCharacter({id, name, species, gender, image, status})
            })
    }
    // const residente = resi()
    resi()
    return (
        <>
            <div className="character-card">
              <div className="container-img">
                  <img src={character?.image} alt="" />
              </div>
              <h4>name: {character?.name}</h4>
              <p><span>species: {character?.species} </span><span>gender: {character?.gender}</span></p>
              <p><span>status: {character?.status}</span></p>
            </div>
        </>
    )
}

export default Card


// id, name, species, gender, image