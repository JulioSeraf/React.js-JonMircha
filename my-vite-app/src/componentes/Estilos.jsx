import React from "react";
import "./Estilos.css";
import styleModule from "./Estilos.module.css";
// import "./Estilos.scss"
export default function Estilos(){
    let myStyle = {
        borderRadius:".5rem",
        margin:"20px",
        border: "1px solid red"
    }
    return(
        <section className="estilos">
            <h2>Estilos Css en React</h2>
            {/* Hay varias formas de usar Css en React:
                *Podemos criar un hoja de Estilo externa y para usarla importamos como un modulo, si usamos esta forma lo recomendado es nombrar el componente y su hoja de estilo igual y ponerlo en la misma carpeta */}
            <h3 className="bg-react">Estilos en hoja CSS externa</h3>
            {/*  * El seguinte metodo es por el atributo style que direto en la tag passamos la propriedad y su valor como objeto al atributo style, como vemos abajo */}
            {/* si pretendes repetir el uso de este estilo en otra tag , lo mejor seria criar una variable que reciba un objeto con los estilos a se proporcionar */}

            <h3 className="bg-react" style={myStyle}>Estilos en línea(atributo style)</h3>

            {/* *Hay una tecnica que se considera estilos como modulos, si queries tratar un hoje de estilos como modulos la deve escrevir con el .modulo seguido del .css ex: Estilos.modulo.css*/}
            {/* Al llamar la importacion tan criamos un variables(nombramos la importacion)para poder trabajar com el modulo com la sintaxi del punto, assim podemos assesar los estilos de la hoja css, como vemos abajo via className */}

            <h3 className={styleModule.error}>Estilos com módulos css</h3>
            <h3 className={styleModule.success}>Estilos com módulos css</h3>

            {/* * Otra opción seria com Sass  pero com Create React app*/}
            <h3 className="bg-sass">Estilos con SASS</h3>


        </section>
    )
}