import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Componente from './componentes/Componente';
import Propiedades from './componentes/Propiedades';
import Estado from './componentes/Estado';
import RenderizadoCondicional from './componentes/RenderizadoCondicionar';
import RenderizadoDeElemento from './componentes/RenderizadoDeElementos';
import { EventosES6,EventosES7, MasSobreEventos } from './componentes/Eventos';
import './App.css';
import Padre from './componentes/ComunicacionComponentes';
import CicloDeVida from './componentes/CicloDeVida';
import AjaxApis from './componentes/AjaxApis';
import ContadorHooks from './componentes/ContadorHooks';
import ScrollHooks from './componentes/ScrollHoos';
import RelojHooks from './componentes/RelojHooks';
import PokemonsHooks from './componentes/AjaxHooks';
import HooksPersonalizados from './componentes/HooksPersonalizados';
import Referencias from './componentes/Referencia';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <section>
        <Componente msg="Hola soy un componente Funcional expresado desde una props"/>
        {/* para passar un numero tenemos que usar {} ya que se usamos las "" seria una cadena de texto y a los booleanos igual */}
        <Propiedades cadena="Esto es una cadena de texto" 
        numero={12}
        booleano={true}
        array={[2 ,4, 26]}
        objeto={{correo:"juliodev26@gmail.com"}}
        function={(num)=> num * num}
        elementoReact={<i>Esto es un elemento React</i>}
        componenteReact={<Componente msg="soy un componente pasado como prop"/>}/>
        <hr/>
        <Estado/>
        <hr/>
        <RenderizadoCondicional/>
        <hr/>
        <RenderizadoDeElemento/>
        <hr/>
        <EventosES6/>
        <hr />
        <EventosES7/>
        <hr />
        <MasSobreEventos/>
        <hr />
        <Padre/>
        <hr />
        <CicloDeVida/>
        <hr />
        <AjaxApis/>
        <hr />
        <ContadorHooks/>
        <hr/>
        <ScrollHooks/>
        <hr />
        <RelojHooks/>
        <hr />
        <PokemonsHooks/>
        <hr />
        <HooksPersonalizados/>
        <hr />
        <Referencias/>
        <hr />
      </section>
    </>
  )
}

export default App
