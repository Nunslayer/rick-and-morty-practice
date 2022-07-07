import axios from "axios"
import { useState } from "react"
const Card = ({resident}) => {
    if(resident.length === 0) return <h1>so sorry no residents</h1>
    const [character, setCharacter] = useState({})
    const resi = () => {
        axios.get(resident)
            .then(res=> {
                const {id, name, species, gender, image, status, episode}=res.data
                setCharacter({id, name, species, gender, image, status, episode})
            })
    }

    resi()
    return (
        <>
            <div className="character-card">
              <div className="container-img">
                  <img src={character?.image} alt="" />
              </div>
              <div className="container-status">
                <div className={character.status==='Alive'?'status-lighter is-alive':character.status==='Dead'?'status-lighter is-dead':'status-lighter'}></div>
                <span>{character?.status}</span>
              </div>
              <h3 className="info-character-name">{character?.name}</h3>
              <div className="info-character-section">
                <p className="info-character-tittle">SPECIES:</p>
                <p className="info-character-description">{character?.species}</p>
              </div>
              <div className="info-character-section">
                <p className="info-character-tittle">GENDER:</p>
                <p className="info-character-description">{character?.gender}</p>
              </div>
              <div className="info-character-section">
                <p className="info-character-tittle">EPISODES:</p>
                <p className="info-character-description">{character?.episode?.length}</p>
              </div>
              
            </div>
        </>
    )
}

export default Card


// id, name, species, gender, image