// Las Referecia es la manera que nos permite React.js para poder controlar un elemento que ya a sido cargado al DOM

// Reacpitulación

// - Las Refs son una puerta de escape para guardar valores que no se usan en el renderizado. No las necesitaras a menudo.

// - Una Refs es un Objeto plano de JavaScript con una sola propiedad llamada "current", que puedes leer o asignarle un valor.

//-Puedes pedirle a React que dé una ref llamando al Hook useRef.

// - Como el estado, las refs retienes informacion entre el renderizado de un Componente.

// - A diferencia de estado, asignar el valor de current de una ref no desencadena un rerenderizado.

// - No leas o escribas ref.current durante el renderizado. Esto hace que tu componente sea dificil de predecir.
import React,{createRef,useRef} from "react";
// usamos el create Ref para crear referencia em componentes de class y el Hooks useRef para criar referencias em componentes fucionales

export default function Referencias(){
    let refMenu = useRef(),
        refMenubtn = useRef();
        // las referencias son obejtos q tiene un propiedad llamada current que es asiguido el elemento que hace referencia, esto es por si el elemento es eliminado current recibe un valor nulo para no salter error 
        
    const handleToggleMenu = (e)=>{

        if( refMenu.current.style.display === "none"){
            refMenubtn.current.textContent = "Cerrar";
            refMenu.current.style.display = "block";
        }else{
            refMenu.current.style.display = "none";
            refMenubtn.current.textContent = "Menu";
        }

    };
    return(
        <div>
            <h2>Referencias</h2>
            <button id="menu-btn" ref={refMenubtn} onClick={handleToggleMenu}>Menu</button>
            <nav id="menu" ref={refMenu} style={{display: "none"}}>
                <a href="">section 1</a>
                <br />
                <a href="">section 2</a>
                <br />
                <a href="">section 3</a>
                <br />
                <a href="">section 4</a>
                <br />
                <a href="">section 5</a>
            </nav>
        </div>
    );
};