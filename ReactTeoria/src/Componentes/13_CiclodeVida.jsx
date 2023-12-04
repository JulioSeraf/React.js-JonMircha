
export default function CicloDeVida(){
    return <section>

    <h2>Ciclo de vida</h2>

    <p>Son metodos que se  ejecuntan automaticamente en un Componente de Clase, ocurren en 3 fases</p>
    <ol>
        <li>Montaje</li>
        <li>Actualización</li>
        <li>Desmontaje</li>
    </ol>

    <h3>Montaje</h3>

    <p>Esto metodos se ejecutan cuando se crean un componente y se inserta en el arbole del DOM</p>

    <ul>
        <li>contructor(): Se ejecuta al criar la intancia del componente, en el constructor puedes inicializar el estado y enlazar manejadoresde eventos</li>
        <li>render(): Es el unico metodo requerido, cuando se ejecuta, examina el estado y las propriedades y dibuja el componente en el arbol del DOM.</li>
        <li>componentDidMount(): Se invoca inmediatamente despues de que un componente se ha insertado al arbol del DOM, Es últi para ejecutar suscripciones o peticiones asíncronas a API's, bases de datos, servicios, etc.</li>
    </ul>

    <h3>Actualización</h3>

    <p>Estos métodos son ejecutados por cambios en el estado o las Propiedades de los componentes</p>

    <ul>
        <li>render(): redibuja el componente cuando detecta cambios en el estado y el las Propiedades del Componente</li>

        <li>componenteDidUpdate(): Se ejecuta automaticamente despues que la Actualización del estado o las propriedades del componente sucede, al igual que componentDidMount es un metodo ideal para hacer peticiones externas.</li>
    </ul>

    <h3>Desmontaje</h3>

    <p>Estos métodos metodos son ejecutados una vez que el componente hay sido eliminado del  árbol del DOM</p>

    <ul><li>ComponentWillUnmount(): Se ejecuta antes del  componente ser eliminado del árbol del DOM, Es un método útil para hacer tareas de Limpieza.</li></ul>
</section>
}