import React from "react";
import { Container } from "./styled"
import { ContainerList } from "./styled";
import { ContainerPlaylist } from "./styled";
import { ContainerPlaylistItens } from "./styled";

export default class Playlists extends React.Component {
  
  
  
    render() {
    
    const showAllPlaylist = this.props.allPlaylist.map((playlist, index) => {
        return(
            <ContainerPlaylist key={index}>
                <ContainerPlaylistItens>
                    <p>{playlist.name}</p>
                </ContainerPlaylistItens>
                <ContainerPlaylistItens>
                    <p onClick={this.props.showScreenOnClick}>editar</p>
                </ContainerPlaylistItens>
                <ContainerPlaylistItens>
                    <p>excluir</p>
                </ContainerPlaylistItens>
            </ContainerPlaylist>
        )
    })
    
    return (
      <Container>
        <ContainerList>
            {showAllPlaylist}
        </ContainerList>
      </Container>
    )
  }
}
