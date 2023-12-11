

export default function Hooks(){
    return(
        <section>
            <h2>Hooks</h2>

            <p>Los Hooks son una nueva incorporacion a partir de <stromg>React 16.8.0 </stromg> que nos perminten <strong>"enganchar"</strong> el estado y el ciclo de vida en componentes basados en functiones</p>

            <h3>¿Porq qué se crearon los Hooks?</h3>

            <p>Las clases confunden las personas y las máquinas</p>

            <p>Entender la estructura y reglas que implican crear una clase puede ser una curva de aprendizaje lenta y requerir de ciertos conceptos, como el manejo de this en JavaScript, por lo contrario las funciones son mucho mas facil de entender y manipular incluso para personas que3 van comezando </p>

            <p>A las maquinas tampoco les gusta las clases ya que no minifican tan bien como las funciones, esto significa que nuestro codigo ocupara mas texto y con eso ocupan mas espacio de almacenamento</p>

            <h3>Tipos de Hooks</h3>
            
            <p>Basicos(em el 100% de tus Proyectos):</p>
            <ul>
                <li><strong>useState</strong></li>
                <li><strong>useEffect</strong></li>
            </ul>
            <p>Avanzados(tal vez no en todos tus Proyectos)</p>

            <ul>
                <li><strong>useContext</strong></li>
                <li><strong>useRef</strong></li>
                <li><strong>useReducer</strong></li>
                <li><strong>useCallback</strong></li>
                <li><strong>useMemo</strong></li>
            </ul>

            <p>Puedes ver todas las lista de hooks disponbles en la documentacion de React</p>

            <h3>UseState</h3>

            <p>Permite manipular el estado de un componente funcional, se comporta como el objeto state y la función this.setState de los componentes de clase</p>

            <p>Para usarlo debemos importalo desde la libreria React</p>

            <p>import  "seState from "react";</p>
            
            <p>Ahora, en nuestro componente funcional, vamos a inicializar el hook, para ello asignaremos mediante la <strong>destructuración de arreglos 2 elementos</strong></p>

            <ol>
                <li>El valor del estado y,</li>
                <li>Un método para actualizarlo(que seria el remplaso de this.setState de los componentes de Clase) </li>
            </ol>

            <p>Por convención se sugeri que le pongamos el mismo nombre al valor del estado y al metodo con el (set) delante Ex: state: valor / metodo : setValor</p>

            <h3>useEffect</h3>

            <p>Permite hacer uso del ciclo de vida en un componente funcional</p>

            <p>Usar useEffect equivale a la combinación de los métodos:    
            </p>
            <ul>
                <li>componetDidMount()(Montaje)</li>
                <li>componentDidUpdate()(actualización)</li>
                <li>componentDidUpdateWillUnmount()(Desmontaje)</li>

                <p>useEffect recibe como parámetro una funcion que se ejecutará cada vez que nuestro componente se renderice, ya sea por cambios del estado o las propiedades.</p>

                <p>Para usarlo, debemos importarlo desde la librería de React</p>

                <p><strong>import React, useEffect from "react".</strong></p>

                <p>Para añadir un efecto que se ejecutara cada vez que nuestro componente se renderize, se debe pasar como parametro una funcón al hook useEffet misma que se ejecutatá al renderizarsre el componente</p>
            </ul>

        </section>
    )
}