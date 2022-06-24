import axios from "axios";
import {BASE_URL} from '../constants/urls'



export const getCharacterInfo = (saveData) => {
    axios.get(this.props.url)
    .then((response) => {
        saveData(response.data)
    })
    .catch((error) => {
        console.log(error)
    })
}

export const getPlanet = (saveData) => {
    axios.get(this.state.character.homeworld)
    .then((response) => {
        saveData(planet: response.data.name})
    })
    .catch((error) => {
        console.log(error)
    })
}

export const getCharactersList = () => {
    axios.get(`${BASE_URL}/people`)
    .then((response) => {
        this.setState({characterList:response.data.results})
    })
    .catch((error) => {
        console.log(error)
    })
}