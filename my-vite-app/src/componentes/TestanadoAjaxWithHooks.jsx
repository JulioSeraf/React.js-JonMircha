import React,{useState,useEffect} from "react";


export default function TestAjaxHooks(){
    const [pokemon, setPokemon] = useState([]);

    useEffect(()=>{

        const getDataPokemons = async (url)=>{

            let res = await fetch(url);
            let pokemon = await res.json()
            console.log(pokemon)
        }

        getDataPokemons("https://pokeapi.co/api/v2/pokemon/");

    },[])


    return(<><p>ok</p></>)
}