import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom'
import '../CSS/SearchBar.css'

const api = 'https://finnhub.io/api/v1/search?token=cdaaobqad3i97v8jfvagcdaaobqad3i97v8jfvb0&'

function SearchBar() {
    const [inputVal, setInputVal] = useState('')
    const navigate = useNavigate()

    return (
        <div className={'SearchBar'}>
            <input type="text" alt='search bar' placeholder='Search'
                   onChange={event => {
                       setInputVal(event.target.value)
                   }}
                   onKeyDown={event => {
                       console.log(event.key)
                       if (event.key === 'Enter') {
                           (async ()=>{
                               try{
                                   const res = await fetch(`${api}q=${inputVal}`)
                                   const data = await res.json()

                                   if(data.count > 0){
                                       navigate('/investing', {state: {stockSymbol: data.result[0].symbol}})
                                   }
                               }catch (err){
                                   console.log(err)
                               }
                           })()
                       }
                   }}
            />

        </div>
    );
}

export default SearchBar;