<>
    <h1>JSX</h1>
    <h2>Es una extensiíon de la sintaxis de JavaScript que produce elementos de React</h2>
    <p><span class="rojo">IMPORTANTE LEMBRAR QUE NO ES HTML</span></p>

    <p>Se pude usar:</p>
    
    <ul>
        <li>estructuras de control como if y for</li>
        <li>Asignarlos a variables</li>
        <li>Aceptarlo como argumento o retorno de funciones</li>
        <li>Expresiones JavaScript</li>
    </ul>
    <hr/>
    <h2><strong>JSX</strong> es similar a HTML pero con algunas diferencia impotantes</h2>
    <p>Algunas reglas impotantes:</p>
    <ul>
        <li>Todas etiqueta debe cerrarse por ejemplo (br) devera cerrarse (br/)</li>
        <li>Los componentes deben devolver un solo elemento padre</li>
        <li>Algunos atributos HTML cambian como:
            <ul>
                <li><strong>class</strong> por <strong>className</strong></li>
                <li><strong>for</strong> por <strong>htmlFor</strong></li>
            </ul>
            <li>Los atributos de un elemento JSX pueden aceptar valores de tipo String entrecomillados o expresiones JavaScript entre llaves, por ejemplo
                <ul>
                    <li>< img alt="avatar" src="{user.avatarURL}" /></li>
                </ul>
            </li>
        </li>
    </ul>
    <hr/>
    <h2>JSX se transforma en JavaScript</h2>
    <p>Lembrando que JSX no Acepta mas de un elemento padre, o para usar dos elemeto hijo como padre criamos un tag vacia com  <small class="blue">elemtos hijos aqui </small>
    </p>
    <p>Para usar las variables en <strong>JSX</strong> usamos los {varNombre}=<small class="blue">llamada de variable</small></p>
    <p>Ya para llamar una variable para un atributos eliminas el <span class="rojo">()</span> y add <span class="blue">{}</span> en su lugar, Ex: id=("atrNombre") para id{atrNombre}</p>  
 
</>