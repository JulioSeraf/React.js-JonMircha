import React,{useState,useEffect} from "react";


function Pokemon({name,avatar}){
    return(
        <figure>
            <img src={avatar} alt={name} />
            <figcaption>{name}</figcaption>
        </figure>
    )
}
export default function TestAjaxHooks(){
    const [pokeball,setPokeball] = useState([]);

    useEffect(()=>{

        const getData = async(url)=>{
            let res = await fetch(url);
            let json = await res.json();
            
            json.results.forEach(async(el) => {
                let res = await fetch(el.url);
                let json = await res.json()
                let pokemon = {
                    id: json.id,
                    name: json.name,
                    avatar: json.sprites.front_default
                };

                setPokeball((pokeball)=> [...pokeball, pokemon]);

                console.log(pokeball)
            });
            
        };

        getData("https://pokeapi.co/api/v2/pokemon/")

    },[]);

    return(<>
        <h3>Repasso de Ajax con Hooks</h3>
        {pokeball.length === 0 ? <h3>Cargando...</h3>: pokeball.map(el => <Pokemon key={el.id} name={el.name} avatar={el.avatar} />)}
    </>)
};