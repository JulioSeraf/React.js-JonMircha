import React,{useState,useEffect} from "react";

export default function PokemonsHooks(){
    const [pokeball,setPokeball] = useState([]);

    useEffect(()=>{
        let url = "https://pokeapi.co/api/v2/pokemon/";
        fetch(url)
        .then(res => res.json())
        .then(json => {
            json.results.forEach(el => fetch(el.url)
            .then(res => res.json())
            .then(pokem => {
                let pokemon = {
                    id: pokem.id,
                    name: pokem.name,
                    avatar: pokem.sprites.front_default
                }
                
                useState(pokemon)
                
                console.log(pokeball)
                // setPokeball(pokemons)
                // console.log(pokeball)
            }))
        })
    })
    return(
        <div>
            <h2>Pokemons Con Peticiones Ajax con Hooks</h2>

        </div>
    )
}