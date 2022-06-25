import React from "react";
import axios from "axios";
import { Container } from "./styled";
import { ContainerAdd } from "./styled"

export default class AddPlaylist extends React.Component {

    render(){
      return (
        <Container>
            <ContainerAdd>
            <h2>Adicione uma Playlist</h2>
            <input placeholder="nome da playlist" onChange={this.props.onChangePlaylistName} value={this.props.playlistName}></input>
            <button onClick={this.props.criaPlaylist}>Crie a Playlist</button>
            </ContainerAdd>
        </Container>
      );
    }
  }