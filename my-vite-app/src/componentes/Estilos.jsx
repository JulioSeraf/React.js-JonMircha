import React from "react";
import "./Estilos.css"
export default function Estilos(){
    return(
        <section className="estilos">
            <h2>Estilos Css en React</h2>
            {/* Hay varias formas de usar Css en React:
                *Podemos criar un hoja de Estilo externa y para usarla importamos como un modulo, si usamos esta forma lo recomendado es nombrar el componente y su hoja de estilo igual y ponerlo en la misma carpeta */}
            <h3 className="bg-react">Estilos en hoja CSS externa</h3>
        </section>
    )
}