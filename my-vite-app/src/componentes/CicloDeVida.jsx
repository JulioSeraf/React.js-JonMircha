import React, {Component} from "react";

class Reloj extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return <h3>{this.props.hora}</h3>
    }
    componentWillUnmount(){
        console.log(3,"el Componente a sido eliminado del DOM")
    }
}

export default class CicloDeVida extends Component{
    constructor(props){
        super(props);
        console.log(0,"El Componente se inicializa, aun no esta en el DOM");
        
        this.state = {
            hora: new Date().toLocaleTimeString(),
            visible: false,
        };

        this.Temporizador = null;
    }

    componentDidMount(){
        console.log(1,"El componente ya se encontra en el DOM")
    }

    componentDidUpdate(prevProps,prevState){
        console.log(2, "El estado o las props del Componente han cambiado");
        console.log(prevProps,prevState  )
    }

    

    tictac = ()=>{
        this.Temporizador = setInterval(()=>{
            this.setState({
                hora: new Date().toLocaleTimeString()
            });
        },1000)
    }

    inicar = ()=>{
        this.tictac();
        this.setState({
            visible:true
        })
    }

    detener = ()=>{
        clearInterval(this.Temporizador);
        this.setState({
            visible:false
        })
    }
    render(){
        console.log(4,"El componente se dibuja o se redibuja por algun cambio en el DOM")
        return(
            <div>
                <h2>Ciclo de Vida</h2>
                {this.state.visible?<Reloj hora={this.state.hora}/>: ""}
                <button onClick={this.inicar}>iNICIAR</button>
                <button onClick={this.detener}>DETENER</button>
            </div>
        )
    }
}