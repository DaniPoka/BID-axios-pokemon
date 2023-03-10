import React, { useState } from 'react'
import axios from 'axios';


function PokeAxios() {

    const [nombres, setNombres] = useState([])

    const clickPokeAxios = () => {

    axios.get("https://pokeapi.co/api/v2/pokemon/?limit=807")
            .then(response => {
                setNombres(response.data.results.map((pokemon)=>pokemon.name));
                console.log(response)
            })}

    return (
        <>
            <button onClick={clickPokeAxios}>Show pokemons AXIOS</button>
            <ul>
                {nombres.map((element, index) => {
                    return (
                        <li key={index}>
                        {element}</li>
                    );
                })}
            </ul>
        </>
    )
}

export default PokeAxios