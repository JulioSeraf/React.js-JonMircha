import reactLogo from './assets/react.svg';
import './App.css';
import ReactIntroduccion from './Componentes/01_Introducción';
import SintaxisJSX from './Componentes/03_Sintaxis-JSX';
import Componentes from './Componentes/04_Componentes';
import Propiedades from './Componentes/05_Propiedades';
import Estados from './Componentes/06_Estado-ou-State';
import RenderizadoCondicional from './Componentes/07_RenderizadoCondicionar';
import RenderizadoDeElemento from './Componentes/08-RenderizadoDeElementos';
import Eventos from './Componentes/09_Eventos';
import ComunicacionComponentes from './Componentes/12_Comunicación-entre-Componentes';
import CicloDeVida from './Componentes/13_CiclodeVida';

function App() {
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React</h1>
      <ReactIntroduccion/>
      <hr />
      <SintaxisJSX/>
      <hr />
      <Componentes/>
      <hr />
      <Propiedades/>
      <hr />
      <Estados/>
      <hr />
      <RenderizadoCondicional/>
      <hr />
      <RenderizadoDeElemento/>
      <hr />
      <Eventos/>
      <hr />
      <ComunicacionComponentes/>
      <hr />
      <CicloDeVida/>
      
    </>
  )
}

export default App
