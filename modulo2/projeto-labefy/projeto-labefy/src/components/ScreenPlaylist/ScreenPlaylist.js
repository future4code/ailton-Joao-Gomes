import React from 'react'
import { Container } from './styled'
import { ButtonExit } from './styled'
import { MusicList } from './styled'
import { MusicAdd } from './styled'
import { ContainerMusic } from './styled'
import AddMusicScreen from '../AddMusicScreen/AddMusicScreen'

import AddMusicLogo from '../img/addmusic.png'

export default class ScreenPlaylist extends React.Component {
  
componentDidMount(){
  this.props.getPlaylistTracks()
}


    render() {

      const showAllPlaylistsMusics = this.props.playlistMusics.map((music,index) => {
        return (
          <ContainerMusic key={index}>
            <p onClick={() => this.props.playMusic(music.url)}>{music.name}</p>
            <p>{music.artist}</p>
            <button>delete music</button>
          </ContainerMusic>
        )}
        )
      
          console.log(this.props.urlSpotify)
        return (
        
        <Container>
          
          <ButtonExit onClick={ this.props.showScreenOnClick}>x</ButtonExit>
          <MusicAdd onClick={this.props.addMusicScreenOnClick}><img src={AddMusicLogo} /><p>Adicionar musica</p></MusicAdd>
          <h3>{this.props.clickedPlaylistName}</h3>
          <MusicList>{showAllPlaylistsMusics}</MusicList>
          <div><iframe src={this.props.urlSpotify} height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe></div>
        </Container>
    )
  }
}
