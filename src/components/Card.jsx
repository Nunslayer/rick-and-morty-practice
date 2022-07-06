import axios from "axios"
import { useState } from "react"
const Card = ({resident}) => {
    if(resident.length === 0) return <h1>so sorry no residents</h1>
    const [character, setCharacter] = useState({})
    const resi = () => {
        axios.get(resident)
            .then(res=> {
                const {id, name, species, gender, image}=res.data
                setCharacter({id, name, species, gender, image})
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
              <h1>{character?.name}</h1>
              <p><span>{character?.species}</span><span>{character?.gender}</span></p>
              
            </div>
        </>
    )
}

export default Card


// id, name, species, gender, image