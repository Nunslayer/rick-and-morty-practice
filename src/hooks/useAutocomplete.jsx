import {useState, useEffect, useMemo} from 'react'
import axios from 'axios'
import debounceFunction from '../service/debounceFunction'

const useAutcomplete = (endPoint) => {
    const [suggestions, setSuggestions] = useState([])

    const [value, setValue] = useState('')
    const debounceGetSuggestions = useMemo(()=>{
        const getSuggestions = (endPoint, valueOne) =>{
            const apiURL = `https://rickandmortyapi.com/api/${endPoint}/?name=${valueOne}`
            axios.get(apiURL)
                .then(res => {
                    setSuggestions(res.data.results)
                    console.log('hice un fetch')
                })
        }
        return debounceFunction(getSuggestions, 500)
    },[])
    useEffect(()=>{
        // const getSuggestions = () =>{
        //     const apiURL = `https://rickandmortyapi.com/api/${endPoint}/?name=${value}`
        //     axios.get(apiURL)
        //         .then(res => {
        //             setSuggestions(res.data.results)
        //         })
        // }
        if(value !== ''){
            debounceGetSuggestions(endPoint, value)
        }else{
            setSuggestions([])
        }
          
    },[value])
    
    
    const clearSuggestions = () =>{
        setSuggestions([])
    }



    return {
       suggestions, clearSuggestions, value, setValue, setSuggestions
    }
}

export default useAutcomplete