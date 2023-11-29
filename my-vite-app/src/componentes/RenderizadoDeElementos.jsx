import React,{Component} from "react";
import data from "../helpers/data.json";

export default class RenderizadoDeElemento extends Component{
    constructor(props){
        super(props);
        this.state = {
            seasons: ["Primavera","Verano","Otoño","Inverno"]
        }
    }
    render(){
        console.log(data)
        return(
            <div>
                <h2>Renderizado de Elementos</h2>
                <h3>Estaciones del Año</h3>
                <ol>
                    {/* el Atributo key es un atributo que usa internamente React para facilitar la busqueda del elemento en el virtual dom que sera renderizado */}
                    {this.state.seasons.map(el => <li key={el}>{el}</li>)}
                </ol>
            </div>
        );
    };
};