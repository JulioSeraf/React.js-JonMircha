<>
<h1>Estado</h1>
<p>El <strong>state</strong>   son los valores internos que mantine la logica y los datos de un componente, permite que este reacione a cualquer cambio lo que hara q vuelva a renderizar en la interfaz</p>

<p>El estado tiene 3 caracteristicas importante:</p>
<ul>
    <li>Es inmutable</li>
    <li>No se puede modificar directamente</li>
    <li>Es asincrono</li>
</ul>
<p>Para hacer cambios hay que hacer uso del metodo <strong>setState()</strong></p>
<p>El estado de un componente no es accesible desde otro componente excepto de aquel que lo posee y lo asigna</p>

<p>La <strong>propagacion del estado fluye de forma unidireccional y descensiente</strong> (hacia abajo), esto significa que un componente padre puede passar valores de su estado a componentes hijos que lo recibiran como propriedades.</p>

<p>En el momento que los valores del estado del padre sufran cambios esto causara que tanto el padre como los hijos que recibieron esos valores como propriedades se redericen nuevamente y reaccione a dicho cambio</p>

<p>Cada Componente que de defina como una clase cueta con un objeto para almacenar informacion llamado <strong>state</strong></p>

<p>Cada vez que cambia el <strong>state</strong> React vuelve a rederizar(pintar) el componente en la vista</p>
</> 