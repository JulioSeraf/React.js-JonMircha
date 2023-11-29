import React,{Component} from "react";


export class EventosES6 extends Component{
    constructor(props){
        super(props);

        this.state = {
            contador: 0
        }
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
    
    // para evitar hacer el binding de las this vacias, definimos la functiones con arrow Function ya que heredan el this del contexto que se encontra

    // no es necessario usar las const , let , var para declarar ya que estamos en un function y atual como metodos
    sumar = ()=>{
        console.log("sumando");
        this.setState({
            contador: this.state.contador + 1
        })
    }
    restar = () =>{
        console.log("Restando");
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
}