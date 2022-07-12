import React from 'react'

import { MusicAddScreen } from './styled'


export default class AddMusicScreen extends React.Component {
  
  
  
    render() {
    
    
    
        return (
      
      < MusicAddScreen >
        
            <input onChange={this.props.onChangeArtistName} value={this.props.artistName} placeholder='Nome do Artista'></input>
            <input onChange={this.props.onChangeMusicName} value={this.props.musicaName} placeholder='Nome da Música'></input>
            <input onChange={this.props.onChangeUrl} value={this.props.url} placeholder='URL'></input>
            <button onClick={this.props.addTrackToPlaylist}>Adicionar</button>
        
      
      </ MusicAddScreen >
    )
  }
}
