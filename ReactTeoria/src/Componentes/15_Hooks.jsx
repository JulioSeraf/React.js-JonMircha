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
        </section>
    )
}