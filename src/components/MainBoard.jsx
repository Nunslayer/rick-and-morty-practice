
import InfoLocation from './InfoLocation'
import InfoEpisode from './InfoEpisode'
import InfoCharacter from './InfoCharacter'
import Card from './Card'
import CardEpisodes from './CardEpisodes'
import ItemsPagination from './ItemsPagination'
import EpisodesPagination from './EpisodesPagination'
const MainBoard = ({info}) =>{
    const getArrayType = (info)=>{
        if(info.dimension){
            const {residents} = info
            return residents
        }
        if(info.air_date){
            const {characters} = info
            return characters
        }
        if(info.species){
            const {episode} = info
            return episode
        }
    }
    const splitInfo = (info) => {
        const newArray = []
        let auxArray = []
        let counter = 0
        let lengthItems = info.length
        info.forEach(item => {
            auxArray.push(item)
            counter++
            if(auxArray.length === 4){
                newArray.push(auxArray)
                auxArray=[]
            }else if(counter === lengthItems){
                newArray.push(auxArray)
                auxArray=[]
            }
        })
        return newArray
    } 
    const typeArray = getArrayType(info)
    const itemArray = splitInfo(typeArray)
    return (
        <section className="main">
            {info.dimension?
            (<>
                <h1>LOCATION</h1>
                <InfoLocation info={info}/>
                {itemArray.length === 0?
                    <h2>
                        This location dont have residents
                    </h2>:
                    <ItemsPagination itemArray={itemArray}/>
                }
            </>):
            info.air_date?
            (<>
                <h1>EPISODE</h1>
                <InfoEpisode info={info}/>
                {itemArray.length === 0?
                    <h2>
                        This episode dont have characters
                    </h2>:
                    <ItemsPagination itemArray={itemArray}/>
                }
            </>):
            info.species?
            (<>
                <h1>CHARACTER</h1>
                <InfoCharacter info={info}/>
                {info.episode.length === 0?
                    <h2>
                        This location dont have characters
                    </h2>:
                    <EpisodesPagination itemArray={itemArray}/>
                }
            </>):
            <h1>NADA QUE ENSEÑAR</h1>}
        </section>
    )
}

export default MainBoard