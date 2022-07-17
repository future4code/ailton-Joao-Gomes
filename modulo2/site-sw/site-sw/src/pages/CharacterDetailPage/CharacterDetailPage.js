import React from "react";
import axios from "axios";

export default class CharacterDetailPage extends React.Component {

    state= {
        character: {},
        planet: ""
    }

    componentDidMount(){
        this.getCharacterInfo()
    }

    componentDidUpdate(prevProps, prevState){
       if(this.state.character !== prevState.character){
        this.getPlanet()
        }
    }

    getCharacterInfo = () => {
        axios.get(this.props.url)
        .then((response) => {
            this.setState({character:response.data})
        })
        .catch((error) => {
            console.log(error)
        })
    }

    getPlanet = () => {
        axios.get(this.state.character.homeworld)
        .then((response) => {
            this.setState({planet: response.data.name})
        })
        .catch((error) => {
            console.log(error)
        })
    }

    render (){
        console.log(this.state.character)
        return (
            <div>
                {this.state.character.name && this.state.planet ?
                    (<div> 
                        <p>Nome: {this.state.character.name}</p>
                        <p>Planeta: {this.state.planet}</p>
                    </div>)
                   :<p>carregando...</p> 
                }

                <button onClick={this.props.goToListPage}>voltar para lista</button>
            </div>
        )
    }
}