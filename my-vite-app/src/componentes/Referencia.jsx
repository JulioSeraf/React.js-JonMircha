// Las Referecia es la manera que nos permite React.js para poder controlar un elemento que ya a sido cargado al DOM

// Reacpitulación

// - Las Refs son una puerta de escape para guardar calores que no se usan en el renderizado. No las necesitaras a menudo.

// - Una Refs es un Objeto plano de JavaScript con una sola propiedad llamada "current", que puedes leer o asignarle un valor.

//-Puedes pedirle a React que dé una ref llamando al Hook useRef.

// - Como el estado, las refs retienes informacion entre el renderizado de un Componente.

// - A diferencia de estado, asignar el valor de current de una ref no desencadena un rerenderizado.

// - No leas o escribas ref.current durante el renderizado. Esto hace que tu componente sea dificil de predecir.
import React from "react";

export default function Referencias(){
    return(
        <div>
            <h2>Referencias</h2>
            <button id="menu-btn">Menu</button>
            <nav id="menu">
                <a href="">section 1</a>
                <a href="">section 2</a>
                <a href="">section 3</a><
                    a href="">section 4</a>
                    <a href="">section 5</a>
            </nav>
        </div>
    );
};