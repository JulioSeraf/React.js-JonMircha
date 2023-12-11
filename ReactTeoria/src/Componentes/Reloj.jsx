import React, { useState, useEffect } from "react";
export default function Reloj(){
    const [date, setDate] = useState();

    let visible = true,
    temporizador;

    useEffect(()=>{
        temporizador = setInterval(()=>{
            setDate(new Date().toLocaleTimeString())
        },1000)
        
       
    })

    const iniciar = ()=>{
        visible = false; 
    }

    const detener = ()=>{
        clearInterval(temporizador);
        visible = true;
    }

        
    return(
        <div>
            <p>{date}</p>
            <button onClick={iniciar()}>Iniciar</button>
            <button onClick={detener()}>Detener</button>
        </div>
    )
}
