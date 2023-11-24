import React,{Component} from "react";
// como hicimos la destruturacion de component de React el lo importe no usamo solo Component en la extends de la class, si  no seria React.Component en su lugar

// *********** este es un componente criado com class***********

// class Componente extends Component{
//     //importanrte: um componente de class debe tener por default su metodo render() que es lo que va rederizar  el codigo JSX
//     render(){
//         // acessamos la props para acessar al valor de la propriedad de msg="" que asignamos al componente en App()
//         return <h2>{this.props.msg}</h2>
//     }

// }

//************************este es un Componente fucional**********************
// function Componente(props){
//     return <h2>{props.msg}</h2>
// }

// Lo podemos dejar mas exprecivo declarando en un fuction expresada, ya que tiene el el return expricito

const Componente = props => <h2>{props.msg}</h2>

export default Componente;