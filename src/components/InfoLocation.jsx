import TittleAndDescription from './TittleAndDescription'
const InfoLocation = ({info}) =>{
    const {type, name, dimension, residents} = info
    return (
        <div className="card-info">
            <TittleAndDescription 
                tittle='Name' 
                description={name}
            />
            <TittleAndDescription 
                tittle='Type' 
                description={type}
            />
            <TittleAndDescription 
                tittle='Dimension' 
                description={dimension}
            />
            <TittleAndDescription 
                tittle='Residents' 
                description={residents.length}
            />
        </div>
    )
}

export default InfoLocation