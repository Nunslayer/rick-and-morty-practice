import TittleAndDescription from './TittleAndDescription'
const InfoEpisode = ({info}) =>{
    const {air_date, name, characters, episode} = info
    return (
        <div className="card-info">
            <TittleAndDescription 
                tittle='Name' 
                description={name}
            />
            <TittleAndDescription 
                tittle='Episode' 
                description={episode}
            />
            <TittleAndDescription 
                tittle='Release' 
                description={air_date}
            />
            <TittleAndDescription 
                tittle='Characters' 
                description={characters.length}
            />
        </div>
    )
}

export default InfoEpisode