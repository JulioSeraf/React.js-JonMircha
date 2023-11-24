import React from "react";

export default function Propiedades(props){
    return(
        <div>
            <h2>{props.porDefecto}</h2>
        </div>
    )
        
    
}

// defaultProps es un propiedad especial, es un Obejto donde podemos definir propiedades por defecto internamente , sin la necessidade de recibirla de un componente padre
Propiedades.defaultProps = {
    porDefecto: "Las Pros"
}