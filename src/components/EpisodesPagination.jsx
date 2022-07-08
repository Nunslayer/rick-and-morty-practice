import { useState } from "react"
import CardEpisodes from './CardEpisodes'
const EpisodesPagination=({itemArray})=>{
    const [currentPage, setCurrentPage] = useState(1)
    
    return (
        <>
            <div className="character-container">
                {itemArray[currentPage-1].map((episodeItem)=>{
                    return (
                        <CardEpisodes 
                            key={episodeItem}
                            episodeItem={episodeItem}
                        />
                    )
                })}
            </div>
            <div className="container-pages">
                <button 
                    className="btn-page"
                    onClick={()=>setCurrentPage(currentPage-1)}
                    disabled={currentPage===1}
                >
                    -
                </button>
                {itemArray.map((num, index)=>{
                    return(
                        <button
                            className={currentPage===index+1?'page page-c':'page'}
                            key={index+1}
                            onClick={()=>setCurrentPage(index+1)}
                        >
                            {index+1}   
                        </button>
                    )
                })}
                <button 
                    className="btn-page"
                    onClick={()=>setCurrentPage(currentPage+1)}
                    disabled={currentPage===itemArray.length}
                >
                    +
                </button>
            </div>
        </>
    )
    
}

export default EpisodesPagination