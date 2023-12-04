export default function ComunicacionComponentes(){
    return <section>
    <h2>Comunicación entre Componentes</h2>
    <p>Tenemos 3 casos de Comunicación entre Eventos de React</p>
    <ol>
        <li>Comuninicación entre Componentes Padres y hijos</li>
        <li>Comunicación entre Componentes hijos y Padres</li>
        <li>Comunicación entre Componentes no relacionados</li>
    </ol>

    <h3>Comunicación entre un Componentes Padres a uno hijo</h3>

    <p>Este es el caso mas natural del mundo de React que se hace atraves de props de un Componente Padre a uno hijo</p>

    <h3>Comunicación de un Componente hijo a uno Padre</h3>

    <p> Cuando tenemos la necssidade de passar datos de un Componente Hijo a un Padre lo podemos  hacer atraves de los Eventos, Simplismente passamos el Eventos atraves de props del Componente padre al Componente hijo, para que este Ejecute la funcion</p>

    <h3>Comunicación entre Componentes no relacionados</h3>

    <p>Si los Componentes no tienen un reolacion padre/hijo o están relacionados, pero estan demasiado lejos, como por ejemplo,un bisnieto o tataranieto, tenemos que criar un mecanismo de observasión y/o subscripción para la comunicaciñón de dichos Componentes</p>

    <p>Al menos existen 3 patrones para hacer esto</p>

    <ol>
        <li>Patrón Emissor de Eventos/Destino/Despachador: Los oyentes deben hacer referencia a la fuete para suscribirse</li>
        <li>Patrón Publicación/Subscripción: No necessita un referecia específica a la fuente que desencadena el Evento, hay un Obejto global acessible en todas partes que maneja todos los eventos</li>
        <li>Patrón Señales: Similar al Emisor de Eventos, pero aqui no usar cadenas aleatorias, cada objeto que podria emitir el evento tiene que tener un propriedad específica con este nombre.De esta manera, se sabe exatamente que evento puede emitir un objeto</li>
        <li>Portales: Proporciona una opción de primera clase para renderizar hijos en un nodo DOM que existe fuera de la jerarquia del DOM del componente padre</li>
    </ol>

</section>
}