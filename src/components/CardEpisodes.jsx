import axios from "axios"
import { useState } from "react"
const CardEpisodes = ({episodeItem}) => {
    const [episode, setEpisode] = useState({})
    const epi = () => {
        axios.get(episodeItem)
            .then(res=> {
                const {air_date, name, episode, created}=res.data
                setEpisode({air_date, name, episode, created})
            })
    }

    epi()
    return (
        <>
            <div className="character-card">
              <h4>title: {episode?.name}</h4>
              <p><span>{episode?.created}</span><span>{episode?.episode}</span></p>
              <p><span>{episode?.air_date}</span></p>
            </div>
        </>
    )
}

export default CardEpisodes
