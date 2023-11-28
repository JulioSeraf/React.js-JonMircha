import React from "react";
import PropTypes from "prop-types";

export default function Propiedades(props){
    return <div>
            <h2>{props.porDefecto}</h2>
            <ul>
                <li>{props.cadena}</li>
                <li>{props.numero}</li>
                <li>{props.booleano ? "verdadero":"falso"}</li>
                <li>{props.array.join(",")}</li>
                <li>{props.objeto.correo}</li>
                <li>{props.array.map(props.function).join(",")}</li>
                <li>{props.elementoReact}</li>
                <li>{props.componenteReact}</li>
            </ul>
         </div>
}

// defaultProps es un propiedad especial, es un Obejto donde podemos definir propiedades por defecto internamente , sin la necessidade de recibirla de un componente padre
Propiedades.defaultProps = {
    porDefecto: "Las Props"
}

// las propsTypes antes venias con integrados a react, pero ahora lo tenemos como um modole aparte , para usarlo tenemos q instalar la dependencia del paquete ( prop.types)

// Estas propsTypes me permite definir por defecto las caracteristicas que requere mis props, me permite tbn hacer validaciones para requerimentos de mis props
Propiedades.propTypes= {
    numero:PropTypes.number.isRequired
}