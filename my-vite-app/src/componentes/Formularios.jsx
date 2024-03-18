import React,{useState} from "react";

export default function Formulario(e){
    const [nombre, setNombre] = useState("");
    const [sabor, setSabor] = useState("");
    const [lenguaje, setLenguaje] = useState("");
    const [terminos, setTerminos] = useState(false);

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

             <h3>Elige tu lenguaje de programacion favorito:</h3>
             <select name="lenguaje" id="" onChange={(e)=> setLenguaje(e.target.value)} defaultValue="">
                {/* El un select para asignar un valor poe defecto al diferenre de html no usamos el atributo selected en una de las opciones en su lugar usamos el atributo defaultValue directamente en la tag select,como esta arriba*/}
                <option value="">---</option>
                <option value="js">JavaScript</option>
                <option value="php">PHP</option>
                <option value="py">Python</option>
                <option value="go">GO</option>
                <option value="rb">Ruby</option>
             </select>
             <br />
                <label htmlFor="terminos">Acepto los términos y condiciones</label>
                <input type="checkbox" id="terminos" onChange={(e)=> setTerminos(e.target.checked)}/>

        </form>
    </>)
}