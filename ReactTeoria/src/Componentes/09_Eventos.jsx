export default function Eventos(){
    return <section>
    <h1>Eventos</h1>
    <p>Manejar eventos en JavaScript es similar a manejar eventos en el DOM. Sin embargo existen algunas diferencias de sintaxis
    </p>
    <ul>
        <li>Los eventos de React se nombran usando camelCase, en vez de minusculas.
        </li>
        <li>Con JSX pasas una function como manejador del evento, en vez de un string</li>
    </ul>
    <p>Otra diferencia es que en React no puedes retornar false para prevenir un el comportamento por defecto, Debes, explicitamente , llamar preventDefaut.</p>
    
</section>
}