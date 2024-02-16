import React,{Component} from "react";


export class EventosES6 extends Component{
    constructor(props){
        super(props);

        this.state = {
            contador: 0
        }
        // usamos el metodo bind() para enlasar el this de la class al metodo criado, podemo hacer el bindeo des del evento, pero lo recomendado es hacer directamente en el contructor de la class, por si repitirmos el uso del evento, no tener la necessidad de repitir el bind()
        this.sumar = this.sumar.bind(this);
        this.restar = this.restar.bind(this);
    }
    sumar(){
        console.log("sumando");
        this.setState({
            contador: this.state.contador + 1
        })
    }
    restar(){
        console.log("Restando");
        this.setState({
            contador: this.state.contador >   0 ? this.state.contador - 1: this.state.contador = 0
        })
    }
    render(){
        return(
            <div>
                <h2>Eventos en Componentes de Class ES6</h2>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
                <h3>{this.state.contador}</h3>
            </div>
        )
    }
};

// Properties Initializer

export class EventosES7 extends Component{
    // Con Properties Initializer no es necessario el contructor de class 
    state = {
        contador:0,
    }
    // no es necessario usar las const , let , var para declarar ya que estamos en una class y atual como metodos

     // para evitar hacer el binding de las this vacias, definimos la functiones con arrow Function ya que heredan el this del contexto que se encontra
    sumar = ()=>{
        console.log("sumando");
        this.setState({
            contador: this.state.contador + 1
        })
    }
    restar = () =>{
        console.log("Restando");
        console.log(this )
        this.setState({
            contador: this.state.contador >   0 ? this.state.contador - 1: this.state.contador = 0
        })
    }
    render(){
        return(
            <div>
                <h2>Eventos en Componentes de Class ES7 con Properties Initializer</h2>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
                <h3>{this.state.contador}</h3>
            </div>
        )
    }
};

// function Boton (props){
//     return(
//         <button onClick={props.MyonClick}>Botón hecho Componente</button>
//     )
// };

// Simplificando 
const Boton =(props)=>{
    <button onClick={props.MyonClick}>Botón hecho Componente</button>
};


export class MasSobreEventos extends Component{
    handleClick = (e,mensage)=>{
        console.log(e)
        console.log(e.nativeEvent)
        console.log(e.target)
        console.log(e.nativeEvent.target)
        console.log(mensage)
        

    };
    render(){
        return(
            <div>
                <h2>Mas sobre Eventos</h2>
                <button onClick={(e)=>this.handleClick(e,"Hola, pasando paremetro desde un evento")}>Saludar</button>
                {/* Evento Personalizado, no es mas que un componente que lo asegnamos un prop para que funcione como un evento  */}
                {/* Ya que los atributos de eventos son para las tag JSX y no para los elementos/Componentes react */}
                <Boton MyonClick={(e)=>this.handleClick(e, "Hola pasando parámetro desde un evento")}/>
            </div>
        );
    };
};