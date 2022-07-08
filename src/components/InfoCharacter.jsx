import TittleAndDescription from './TittleAndDescription'
const InfoCharacter = ({info}) =>{
    const {name, species, image, status, episode} = info
    return (
        <div className="card-info">
            <div className="info-character-img">
                <img src={image} alt="character image..." />
            </div>
            <TittleAndDescription 
                tittle='Name' 
                description={name}
            />
            <TittleAndDescription 
                tittle='Species' 
                description={species}
            />
            <TittleAndDescription 
                tittle='Status' 
                description={status}
            />
            <TittleAndDescription 
                tittle='Episodes' 
                description={episode.length}
            />
        </div>
    )
}

export default InfoCharacter