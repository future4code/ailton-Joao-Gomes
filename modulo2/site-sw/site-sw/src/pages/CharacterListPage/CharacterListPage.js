import React from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import { CharacterCard } from "./styled";

export default class CharacterListPage extends React.Component {
    
    state={
        characterList: []
    }
    
    componentDidMount(){
        this.getCharactersList()
    }

    getCharactersList = () => {
        axios.get(`${BASE_URL}/people`)
        .then((response) => {
            this.setState({characterList:response.data.results})
        })
        .catch((error) => {
            console.log(error)
        })
    }

    render (){

        const characters = this.state.characterList.map((car) => {
            return (<CharacterCard key={car.url} onClick={()=> this.props.goToDetailPage (car.url)}>{car.name}</CharacterCard>)
        })

        return <div>{characters}</div>
    }
}