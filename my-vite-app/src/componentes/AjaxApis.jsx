import React,{Component} from "react";
// atajos de importe React: imr = importa react solo, imrc = importa react con Component
function Pokemon(props){
    return(
        <figure>
            <img src={props.avatar} alt={props.name} />
            <figcaption>{props.name}</figcaption>
        </figure>
    );
};


export default class AjaxApis extends Component{
    state = {
        pokemons:{},
    }

    componentDidMount(){
        let url = "https://pokeapi.co/api/v2/pokemon/";
        fetch(url)
        .then(res=>res.ok?res.json():Promise.reject(res))
        .then(json =>{
            console.log(json)
            json.results.forEach((el) => {
                fetch(el.url).then(res => res.ok? res.json():Promise.reject())
                .then(res => {
                    console.log(res);
                    this.setState({
                        pokemons:[res.name,res.sprites.front_default]
                        });
                })
                .catch()
            })
        })
        .catch(err => {
            let errMsg = err.statusText || "Erro al hacer la peticion";
            console.log(err.status + "-" + errMsg)
        })
    }
    render(){
        return(
            <>
                <h2>Peticiones Asíncronas en Componentes de Clase</h2>
                {this.state.pokemons.map(el=> <Pokemon avatar={el[0]} name={el[1]}/>)}
            </>
        );
    };
};