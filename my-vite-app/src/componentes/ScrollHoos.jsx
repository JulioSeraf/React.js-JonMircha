import React,{useState,useEffect} from "react";

export default function ScrollHooks(){
    const [scrollY,setScrollY] = useState();

    // Ejemplo Principal de useEffect

   useEffect(()=>{
    console.log("Moviedo el Scroll");

    const detectarScroll = ()=> setScrollY(window.scrollY);
    
    // Montaje y Atualización ( dependendo del segundo parametro de useEffect)
    window.addEventListener("scroll", detectarScroll);

    // Desmontaje
    return ()=> window.removeEventListener("scroll",detectarScroll);
       
   },[scrollY]);

   
//    Teoria com ejemplo de useEffect()

   useEffect(()=>{
    console.log("Fase de Montaje")
    // al Passar un array como segundo parametro de useEffect, podemos asignar estados a este array con esso este useeffect solo se atualizara con cambie el estado 

    // Se necessitamos hacer peticiones a apis externas, o solicitudes, React recomensa que dejamos el array vacio, para que use effect solo se ejecute una sola vez
   },[]);

   useEffect(()=>{
    console.log("Fase de Actualización")
   });

   useEffect(()=>{
    // Aparti do momento que add un return que retorna una function en useEffect(), React toma como la fase de desmontaje
       return()=>{
           console.log("Fase de Desmontaje")

       }

   })
    return(
        <>
            <h2>Hooks - useEffect Ciclo de Vida</h2>
            <p>Scroll Y del Navegador {scrollY}px</p>
        </>
    )
}