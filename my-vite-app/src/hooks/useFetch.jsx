import { useState,useEffect } from "react";
// Para que React detecte que este es un Hooks personalizado debemos criar el arquivo que comese com la parabra (use) en minuscula seguida de lowerCamecase ej: useEjemplo.jsx

export const useFetch = (url) =>{
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect((url)=>{
        const dataJson = async (url) =>{
            let res = await fetch(url),
                json = await res.json();

            josn.results.forEach(async el =>{
              try{
                   let res = await fetch(el.url),
                      json = await res.json();

                    let pokemons = {
                        id: json.id,
                        name:json.name,
                        avatar: json.sprites.front_defaultw 
                    };

                    setData(data => [...data,pokemons]);
              }catch{
                
              }


            })
           
        } 

        dataJson(url)
    },[url]);

    // Un Hooks personalizado debe devolver cierto valores, pude ser lo que se desde objetos a simples strings
    return {data, isPending, error}

};