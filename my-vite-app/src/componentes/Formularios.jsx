import React,{useState} from "react";

export default function Formulario(e){
    const [nombre, setNombre] = useState("");
    const [sabor, setSabor] = useState("");
    return( <>
        <h2>Formularios</h2> 
        <form>
            <label htmlFor="nombre">Nombre </label>
            <input 
                type="text" 
                id="nombre"
                name="nombre" 
                value={nombre} 
                onChange={(e)=> setNombre(e.target.value)} 
             />
             <h3>Elige tu sabor JS favorito:</h3>

             <input type="radio" name="sabor" id="vanilla" value="vanilla" onChange={(e) => setSabor(e.target.value)}/>
             <label htmlFor="vanilla">Vanilla</label>

             <input type="radio" name="sabor" id="react" value="react" onChange={(e) => setSabor(e.target.value)}/>
             <label htmlFor="react">React</label>

             <input type="radio" name="sabor" id="vue" value="vue" onChange={(e) => setSabor(e.target.value)}/>
             <label htmlFor="vue">Vue</label>

             <input type="radio" name="sabor" id="angular" value="angular" onChange={(e) => setSabor(e.target.value)}/>
             <label htmlFor="angular">Angular</label>

             <input type="radio" name="sabor" id="svelte" value="svelte" onChange={(e) => setSabor(e.target.value)} defaultChecked/>
             {/* se queremos un valor renderizado por defecto no usamos checked en React y si defaultChecked */}
             <label htmlFor="svelte">Svelte</label>
        </form>
    </>)
}