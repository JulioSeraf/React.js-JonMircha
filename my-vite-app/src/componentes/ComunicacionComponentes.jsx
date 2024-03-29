import React,{Component} from "react"

export default class Padre extends Component{
    state = {
        contador: 0,
    }

    incrementarContador = ()=>{
        this.setState({
            contador: this.state.contador + 1,
        })
    }

    decrementarContador = ()=>{
        this.setState({
            contador: this.state.contador - 1,
        })
    }
    render(){
        return(
            <>
                <h2>Comunicación entre Componentes</h2>
                <Hijo msg="Comunicación a Hijo" incrementarContador={this.incrementarContador} decrementarContador={this.decrementarContador} contador={this.state.contador}/>
            </>
        )
    }
}

function Hijo(props){
    return (
        <>
        <h3>{props.msg}</h3>
        <button onClick={props.incrementarContador}>+</button>
        <button onClick={props.decrementarContador}>-</button>
        <div>{props.contador}</div>
        </>
    )
    
}

// export default class Padre extends Component{
//     state ={
//         contador:0,
//     };

//     // Criamos el metodo como arrow funciton para evitar hacer el bind en el this.
//     incrementarContador = (e)=>{
//         this.setState({
//             contador: this.state.contador + 1
//         });
//     }

//     render(props){
//         return(
//             <>
//                 <h2>Comunicación entre Componentes</h2>
//                 {/* esta es la forma de passar informacíon de de un componente padre para un Componente Hijo, Mediante Props  */}
//                 <Hijo contador={this.state.contador} incrementarContador = {this.incrementarContador} mensaje="Mensaje para el Hijo"/>
//                 <Hijo mensaje ="Mensaje para el Hijo 2"/>
//             </>
//         );
//     };
// };

// function Hijo (props){
//     return (
//     <>
//         <h3>{props.mensaje}</h3>
//         <button onClick={props.incrementarContador}>+</button>
//         <div>{props.contador }</div>
//     <