import React,{useState,useEffect} from "react";

function Pokemon({avatar, name}){
    return(
        <>
        <figure>
            <img src={avatar} alt={name} />
            <figcaption>{name}</figcaption>
        </figure>
        </>
    )
}

// export default function PokemonsHooks(){
//     const [pokeball,setPokeball] = useState([]);

//     useEffect(()=>{
//         let url = "https://pokeapi.co/api/v2/pokemon/";
//         fetch(url)
//         .then(res => res.json())
//         .then(json => {
//             json.results.forEach(el => fetch(el.url)
//             .then(res => res.json())
//             .then(pokem => {
//                 let pokemon = {
//                     id: pokem.id,
//                     name: pokem.name,
//                     avatar: pokem.sprites.front_default
//                 }
                
//                setPokeball((pokeball)=> [...pokeball, pokemon])
//             }))
//         })
//     },[])


// Ajax con Hooks en usando Funciones Asincronas

export default function PokemonsHooks(){
    const [pokeball,setPokeball] = useState([]);

    useEffect(()=>{
        // Para usar funciones asincronas en useEffect lo correto es criar na funcion dentro del useEffect para hacerla asincrona ja que tornar la directamente la funcion callback de useEffect asincona es una mala pratica (un anitpatron) q puede nos causar problemas mas a delante

        const getDataPokemons = async (url)=>{
            let res = await fetch(url),
            json = await res.json();
        
            json.results.forEach( async (el)=>{
                let res = await fetch(el.url),
                pokem = await res.json();

                let pokemon = {
                        id: pokem.id,
                        name: pokem.name,
                        avatar: pokem.sprites.front_default
                    }
                    setPokeball((pokeball)=> [...pokeball, pokemon])
            })        
        }
        getDataPokemons("https://pokeapi.co/api/v2/pokemon/");
       
    },[])


    return(
        <div>
            <h2>Pokemons Con Peticiones Ajax con Hooks</h2>
            {pokeball.length === 0 ? <h3>Cargando..</h3>: pokeball.map((el)=> <Pokemon key={el.id} name={el.name} avatar={el.avatar}/>)}

        </div>
    )
}