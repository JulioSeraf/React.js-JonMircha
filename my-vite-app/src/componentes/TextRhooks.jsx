import React,{useState,useEffect} from "react";

function Reloj({hours}){
    return <p>{hours}</p>
}

export default function TextReloj(){
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const [visible, setVisible ] = useState(false);

    useEffect(()=>{
        let temporizador;

        if(visible){
           temporizador = setInterval(() => {
                setTime(new Date().toLocaleTimeString())
            },1000);
        }else{
           clearInterval(temporizador); 
        };

        return ()=> {
            clearInterval(temporizador)
        }
    },[visible]);

    return(<div>
        <h3>Teste de Reloj Hooks</h3>
        <p>{visible && <Reloj hours={time}/>}</p>
        <button onClick={()=>setVisible(true)}>Iniciar</button>
        <button onClick={()=>setVisible(false)}>detener</button>
    </div>)
}

