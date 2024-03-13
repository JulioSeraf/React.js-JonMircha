import React,{useState} from "react";

export default function Formulario(e){
    const [nombre, setNombre] = useState("");
    return( <>
        <h2>Formularios</h2> 
        <form>
            <label htmlFor="nombre">Nombre </label>
            <input 
            type="text" 
            id="nombre" name="nombre" value={nombre} onChange={(e)=> setNombre(e.target.value)} />
        </form>
    </>)
}