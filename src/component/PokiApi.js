import React, { useEffect, useState } from 'react';
import axios from 'axios';
const PokiApi = props => {
    const [pokelist, setPokeList] = useState([]);
    const GrabPokemon = e =>{
        axios.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=964")
            .then(res=>setPokeList(res.data.results))
    }
    return(
        <div>
            <button onClick={GrabPokemon}>Fetch Pokemon</button>
            {pokelist.map((item, i) =>
            <p key={i}>{item.name}</p>
            )}
        </div>
    )
}
export default PokiApi