import { useState, useEffect } from "react";

export const useTestFetch = (url)=>{
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
       const getData = async()=>{
            try{
                let res = await fetch(url);

                if(!res.ok){
                    throw{
                        error: true,
                        status: res.status,
                        statusText: !res.statusText? "Ocurreo un error": res.statusText
                    };
                };

                let json = await res.json(); 
                
                setIsPending(false);
                setData(json);
                setError({err:false});
            }catch(err){
                setIsPending(true);
                setError(err)
            };
        };
       getData(url)
    },[url])
    return{data,isPending,error}
}