const TittleAndDescription = ({tittle, description}) =>{
    return (
        <div className="info-section">
            <p className="info-tittle">{tittle}:</p>
            <p className="info-description">{description}</p>
        </div>    
    )
}

export default TittleAndDescription