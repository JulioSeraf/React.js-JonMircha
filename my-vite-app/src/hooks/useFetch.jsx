import { useState,useEffect } from "react";
// Para que React detecte que este es un Hooks personalizado debemos criar el arquivo que comese com la parabra (use) en  minuscula seguida de lowerCamecase ej: useEjemplo.jsx

export const useFetch = (url) =>{
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const getData = async (url) =>{
            try{
                let res = await fetch(url);

                if(!res.ok){
                    throw {
                        err:true,
                        status: res.status,
                        statusText: !res.statusText? "Ocurrió un error": res.statusText
                    };
                };
                
                let data = await res.json();

                setIsPending(false);
                setData(data);
                setError({err:false});
                
            }catch(err){
                setIsPending(true);
                setError(err);

            };
        };

        getData(url);
    },[url]);

    // Un Hooks personalizado debe devolver cierto valores, pude ser lo que se desde objetos a simples strings
    return {data, isPending, error}

};