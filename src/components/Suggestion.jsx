const Suggestion = ({suggestion, onHandlerSelect})=>{
    const {name, url} = suggestion
    return (
        <li onClick={()=>onHandlerSelect(suggestion)}>
            <span>{name}</span>
        </li>
    )
}

export default Suggestion