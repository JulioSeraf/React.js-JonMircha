import React,{Component} from "react";

function EstadoAHijo(props){
    return(
        <div>
            <h3>{props.contadorHijo}</h3>
        </div>
    );
};

export default class Estado extends Component{
    // Para usar el estado en un componente de class usamos el contructor
    constructor(props){
        super(props);
        this.state = {
            contador:0
        }
        // setInterval(()=>{
        //     this.setState({
        //         // this.state.contador += 1; esto no funcionario pues el state no se puede modificar directamente
        //         contador: this.state.contador + 1
        //     })
        // },1000)
    }
    render(){
        return(
            <div>
                <h2>El State</h2>
                <p>{this.state.contador}</p>
                <EstadoAHijo contadorHijo={this.state.contador}/>
            </div>
        )
    }
}