import useAutcomplete from "../hooks/useAutocomplete";
import Suggestion from "./Suggestion";
const Autocomplete = ({getInfo, endPoint}) => {
    const { suggestions, value, setValue, setSuggestions } = useAutcomplete(endPoint)
    console.log(suggestions)
    const onHandlerSelect = ({url, name}) => {
        setValue('')
        setSuggestions([])
        getInfo(url)
    }

    // const renderSuggestions = () =>
    // suggestions?.map((suggestion) => {
    //   const {
    //     name,
    //     url
    //   } = suggestion
    //   return (
    //     <li onClick={console.log('hola')}>
    //       <strong>{name}</strong>
    //     </li>
    //   )
    // })

    return (
        <div className="container-form" >
            <div className='container-input-autocomplete'>  
                <input 
                className='input-autocomplete'
                type='text'
                value={value}
                onChange={(e) => {
                    e.preventDefault
                    setValue(e.target.value)
                }}
                
                placeholder={`${endPoint} name`}
                />
            </div>
            {suggestions.length > 0 &&<ul>{suggestions?.map((suggestion)=>{
                const {url} = suggestion
                return (
                    <Suggestion 
                        key={url}
                        onHandlerSelect={onHandlerSelect}
                        suggestion={suggestion}
                    />
                )
            })}</ul>}
        </div>
    )
}

export default Autocomplete