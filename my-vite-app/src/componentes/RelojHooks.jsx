import React,{useState,useEffect} from "react";

function Reloj({hora}){
    return <p>{hora}</p>
}

export default function RelojHooks(){

    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const [visible, setVisible] = useState(false);

    useEffect(()=>{
        let temporizador;

        if(visible){
            temporizador = setInterval(()=>{
                setTime(new Date().toLocaleTimeString());
            },1000);
        } else{
            clearInterval(temporizador);

            return ()=>{
                clearInterval(temporizador);
            }
        }
        
    },[visible]);

    return(
        <div>
            <h2>Reloj con Hooks</h2>
            {visible && <Reloj hora ={time}/> }
            <button onClick={()=> setVisible(true)}>iniciar</button>
            <button onClick={()=> setVisible(false)}>detener</button>
        </div>
    );
};