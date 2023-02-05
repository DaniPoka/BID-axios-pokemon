import React, { useState } from 'react'

function PokeApi() {

    const [nombres, setNombres] = useState([])

    const clickPokeApi = () => {
        fetch("https://pokeapi.co/api/v2/pokemon/?limit=807")
            .then(response => {
                return response.json();
            }).then(response => {
                setNombres(response.results.map((pokemon)=>pokemon.name));
                console.log(response)
            }).catch(err => {
                console.log(err);

            });
    }

    return (
        <>
            <button onClick={clickPokeApi}>Show pokemons</button>
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

export default PokeApi