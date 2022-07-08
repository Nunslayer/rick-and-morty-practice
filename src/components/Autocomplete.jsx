import useAutcomplete from "../hooks/useAutocomplete";
import Suggestion from "./Suggestion";
const Autocomplete = ({getInfo, endPoint}) => {
    const { suggestions, value, setValue, clearSuggestions } = useAutcomplete(endPoint)
    console.log(suggestions)
    const onHandlerSelect = ({url, name}) => {
        setValue('')
        clearSuggestions()
        getInfo(url)
    }

    return (
        <div className="container-input-autocomplete" >
            <input 
                className='input-autocomplete'
                type='text'
                value={value}
                onChange={(e) => {
                    e.preventDefault
                    setValue(e.target.value)
                }}
                placeholder={`Type ${endPoint} name to search...`}
            />
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