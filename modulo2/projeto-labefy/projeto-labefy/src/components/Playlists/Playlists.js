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
                    <p onClick={() => this.props.showScreenOnClick(playlist.name, playlist.id)}>Ver detalhes</p>
                </ContainerPlaylistItens>
                <ContainerPlaylistItens>
                    <p onClick={()=> this.props.deletePlaylist(playlist.id)}>excluir</p>
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
