import React, { useState } from "react";
export default function ContadorHooks(props){
    const [contador, setContador] = useState(0);

    const sumar = ()=>setContador(contador+1);
    
    const restar = () =>setContador(contador - 1);
    return(
        <>
            <h2>Contador de {props.titulo} con Hooks usando useState</h2>
            <p>{contador}</p>
            <nav>
                <button onClick={sumar}>+</button>
                <button onClick={restar}>-</button>
            </nav>
        </>
    )
}

// Passo de propiedades por defecto
ContadorHooks.defaultProps = {
    titulo: "Clickk"
}
