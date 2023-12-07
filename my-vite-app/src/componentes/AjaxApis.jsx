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
        pokemons:[],
    }

    componentDidMount(){
        let url = "https://pokeapi.co/api/v2/pokemon/";
        fetch(url)
        .then(res=>res.json())
        .then(json =>{
            // console.log(json)
            json.results.forEach((el) => {
                console.log(el)
                fetch(el.url)
                .then(res =>res.json())
                .then(res => {
                    console.log(res);
                    let pokemon = {
                        id: res.id,
                        name: res.name,
                        avatar:res.sprites.front_default
                    }

                    let pokemons = [...this.state.pokemons, pokemon];

                    this.setState({pokemons});
                })
            })
        })
    }
    render(){
        return(
            <>
                <h2>Peticiones Asíncronas en Componentes de Clase</h2>
                {this.state.pokemons.length === 0 ? <h3>Cargando..</h3>: this.state.pokemons.map((el)=> <Pokemon key={el.id} name={el.name} avatar={el.avatar}/>)}
                {/* {console.log(this.state.pokemons)} */}

            </>
        );
    };
};