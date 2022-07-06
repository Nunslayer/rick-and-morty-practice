import {useState, useEffect} from 'react'
import axios from 'axios'

const useAutcomplete = (endPoint) => {
    const [suggestions, setSuggestions] = useState([])

    const [value, setValue] = useState('')
    useEffect(()=>{
        if(value.length===0) return
        
       //setReady(false)
        const apiURL = `https://rickandmortyapi.com/api/${endPoint}/?name=${value}`
        axios.get(apiURL)
            .then(res => {
                setSuggestions(res.data.results)
                //setReady(true)
            })
          
    },[value])
    
    
    const clearSuggestions = () =>{
        return setSuggestions([])
    }



    return {
       suggestions, clearSuggestions, value, setValue, setSuggestions
    }
}

export default useAutcomplete