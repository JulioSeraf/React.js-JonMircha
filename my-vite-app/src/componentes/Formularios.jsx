import React,{useState} from "react";

// export default function Formulario(e){
//     const [nombre, setNombre] = useState("");
//     const [sabor, setSabor] = useState("");
//     const [lenguaje, setLenguaje] = useState("");
//     const [terminos, setTerminos] = useState(false);

//     const handleSubmit = e => {
//         e.preventDefault();
//         alert("El formulario se a enviado")
//     };

//     return( <>
//         <h2>Formularios</h2> 
//         <form onSubmit={handleSubmit}>
//             <label htmlFor="nombre">Nombre </label>
//             <input 
//                 type="text" 
//                 id="nombre"
//                 name="nombre" 
//                 value={nombre} 
//                 onChange={(e)=> setNombre(e.target.value)} 
//              />
//             <h3>Elige tu sabor JS favorito:</h3>

//             <input type="radio" name="sabor" id="vanilla" value="vanilla" onChange={(e) => setSabor(e.target.value)}/>
//             <label htmlFor="vanilla">Vanilla</label>

//             <input type="radio" name="sabor" id="react" value="react" onChange={(e) => setSabor(e.target.value)}/>
//             <label htmlFor="react">React</label>

//             <input type="radio" name="sabor" id="vue" value="vue" onChange={(e) => setSabor(e.target.value)}/>
//             <label htmlFor="vue">Vue</label>

//             <input type="radio" name="sabor" id="angular" value="angular" onChange={(e) => setSabor(e.target.value)}/>
//             <label htmlFor="angular">Angular</label>

//             <input type="radio" name="sabor" id="svelte" value="svelte" onChange={(e) => setSabor(e.target.value)} defaultChecked/>
//             {/* se queremos un valor renderizado por defecto no usamos checked en React y si defaultChecked */}
//             <label htmlFor="svelte">Svelte</label>

//             <h3>Elige tu lenguaje de programacion favorito:</h3>
//             <select name="lenguaje" id="" onChange={(e)=> setLenguaje(e.target.value)} defaultValue="">
//                 {/* El un select para asignar un valor poe defecto al diferenre de html no usamos el atributo selected en una de las opciones en su lugar usamos el atributo defaultValue directamente en la tag select,como esta arriba*/}
//                 <option value="">---</option>
//                 <option value="js">JavaScript</option>
//                 <option value="php">PHP</option>
//                 <option value="py">Python</option>
//                 <option value="go">GO</option>
//                 <option value="rb">Ruby</option>
//             </select>
//             <br />
//             <label htmlFor="terminos">Acepto los términos y condiciones</label>
//             <input type="checkbox" id="terminos" onChange={(e)=> setTerminos(e.target.checked)}/>
//             <br />
//             <input type="submit" value="Enviar" />
//         </form>
//     </>)
// }



// Para formalarios com varios input, podemos manejarlos de la seguiente manera para evitar de criar varias variables de estados:

export default function Formulario(e){
    // Criamos un state com valor de objeto para armazenar los valores de los imputs
        const [form, setForm] = useState({});

    // Criamos funciones para hacer el cambios del setForm

    const handleChange = (e) => {
        setForm({
            // usamos el spretoperation para adicionar valores al state manteniendo los q ya tengos y si al iguales actualizarlos
            ...form,
           [e.target.name]: e.target.value
        });
    };

    // criamos otra function para valores booleanos de los input checked

    const handleChecked = e =>{
        setForm({
            ...form,
            [e.target.name]: e.target.checked
        });
    };
    
        const handleSubmit = e => {
            e.preventDefault();
            alert("El formulario se a enviado")
        };
    
        return( <>
            <h2>Formularios</h2> 
            <form onSubmit={handleSubmit}>
                <label htmlFor="nombre">Nombre </label>
                <input 
                    type="text" 
                    id="nombre"
                    name="nombre" 
                    value={form.nombre} 
                    onChange={handleChange} 
                 />
                <h3>Elige tu sabor JS favorito:</h3>
    
                <input type="radio" name="sabor" id="vanilla" value="vanilla" onChange={handleChange}/>
                <label htmlFor="vanilla">Vanilla</label>
    
                <input type="radio" name="sabor" id="react" value="react" onChange={handleChange}/>
                <label htmlFor="react">React</label>
    
                <input type="radio" name="sabor" id="vue" value="vue" onChange={handleChange}/>
                <label htmlFor="vue">Vue</label>
    
                <input type="radio" name="sabor" id="angular" value="angular" onChange={handleChange}/>
                <label htmlFor="angular">Angular</label>
    
                <input type="radio" name="sabor" id="svelte" value="svelte" onChange={handleChange} defaultChecked/>
                {/* se queremos un valor renderizado por defecto no usamos checked en React y si defaultChecked */}
                <label htmlFor="svelte">Svelte</label>
    
                <h3>Elige tu lenguaje de programacion favorito:</h3>
                <select name="lenguaje" id="" onChange={handleChange} defaultValue="">
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
                <input type="checkbox" name="terminos" id="terminos" onChange={handleChecked}/>
                <br />
                <input type="submit" value="Enviar" />
            </form>
        </>)
    }