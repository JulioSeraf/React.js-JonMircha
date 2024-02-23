import React,{useState,useEffect} from "react";

export default function TestAjaxHooks(){
    const [pokeball,setPokeball] = useState([]);

    useEffect(()=>{

        const getData = async(url)=>{
            let res = await fetch(url);
            let json = await res.json();
            
            json.results.forEach(async(el) => {
                let res = await fetch(el.url);
                let pokemon = await res.json()
            });
        };

        getData("https://pokeapi.co/api/v2/pokemon/")

    },[]);

    return(<>
        <h3>ok</h3>
    </>)
};