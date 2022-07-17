import React from 'react';
import axios from 'axios'
import './App.css';
import Playlists from './components/Playlists/Playlists';
import AddPlaylist from './components/AddPlaylist/AddPlaylist';
import ScreenPlaylist from './components/ScreenPlaylist/ScreenPlaylist';
import Header from './components/Header/Header'
import AddMusicScreen from './components/AddMusicScreen/AddMusicScreen';


export default class App extends React.Component {

  state = {
    playlistName: "",
    allPlaylist: [],
    showScreenPlaylist: false,
    clickedPlaylistName: "",
    clickedPlaylistId: "",
    addMusicScreen: false,
    artistName: "",
    musicName: "",
    url: "",
    playlistMusics: [],
    urlSpotify: "",
    
  }

  onChangePlaylistName = (event) => {
    this.setState({ playlistName: event.target.value })
  }

  criaPlaylist = () => {
    const body = { name: this.state.playlistName }
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", body, {
      headers: {
        Authorization: "joao-gomes-ailton"
      }
    }
    ).then((response) => {
      this.getPlaylist()
    })
  }
  componentDidMount() {
    this.getPlaylist()
  }

  getPlaylist = () => {
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", {
      headers: {
        Authorization: "joao-gomes-ailton"
      }
    }).then((response) => {
      this.setState({ allPlaylist: response.data.result.list })
    })
  }

  showScreenOnClick = (name,id) => {
    this.setState({ showScreenPlaylist: !this.state.showScreenPlaylist })
    this.getPlaylistInfo(name,id)
    if (this.state.addMusicScreen === true){
      this.setState({addMusicScreen: !this.state.addMusicScreen})
    }
  }

  getPlaylistInfo = (name,id) => {
    this.setState({clickedPlaylistName: name, clickedPlaylistId: id})
    console.log(name,id)
  }

  addMusicScreenOnClick = () => {
    this.setState({addMusicScreen: !this.state.addMusicScreen})
    
  }
  addTrackToPlaylist = () => {
    const body = {
      "name": this.state.musicName, 
      "artist": this.state.artistName,
      "url": this.state.url
  }
    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.clickedPlaylistId}/tracks`, body, {
      headers: {
        Authorization: "joao-gomes-ailton"
      }
    }).then((response)=> {
      this.getPlaylistTracks(this.state.clickedPlaylistId)
      this.setState({addMusicScreen: false})
    })
  }



  deletePlaylist = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
    axios.delete(url, {
      headers: {
        Authorization: "joao-gomes-ailton"
      }
    }).then((response) => {
      this.getPlaylist()
    })
  }
  
  
  getPlaylistTracks = () => {
    console.log(this.state.clickedPlaylistId)
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.clickedPlaylistId}/tracks`, {
      headers: {
        Authorization: "joao-gomes-ailton"
      }
    }).then ((response) => {
      this.setState({playlistMusics:response.data.result.tracks})
      console.log(response)
    }).catch((error) => {
      console.log(error)
    })
  }


  playMusic = (url) => {
    this.setState({urlSpotify: url})
  }

  onChangeArtistName = (event) => {
    this.setState({artistName: event.target.value})
    
  }
  onChangeMusicName = (event) => {
    this.setState({musicName: event.target.value})
  }
  onChangeUrl = (event) => {
    this.setState({url: event.target.value})
  }
  

  render() {
    return (
      <div>
        {this.state.showScreenPlaylist && <ScreenPlaylist urlSpotify={this.state.urlSpotify} playMusic={this.playMusic} playlistMusics={this.state.playlistMusics} getPlaylistTracks={this.getPlaylistTracks} addMusicScreenOnClick={this.addMusicScreenOnClick} clickedPlaylistName={this.state.clickedPlaylistName} clickedPlaylistId={this.state.clickedPlaylistId} showScreenPlaylist={this.state.showScreenPlaylist} showScreenOnClick={this.showScreenOnClick} />}
        {this.state.addMusicScreen && <AddMusicScreen addTrackToPlaylist={this.addTrackToPlaylist} onChangeArtistName={this.onChangeArtistName} onChangeMusicName={this.onChangeMusicName} onChangeUrl={this.onChangeUrl} artistName={this.state.artistName} musicName={this.state.musicName} url={this.state.url}/>}
        <Header></Header>
        <AddPlaylist onChangePlaylistName={this.onChangePlaylistName} criaPlaylist={this.criaPlaylist} playlistName={this.state.playlistName}></AddPlaylist>
        <Playlists   deletePlaylist={this.deletePlaylist} getPlaylistInfo={this.getPlaylistInfo} allPlaylist={this.state.allPlaylist} showScreenPlaylist={this.state.showScreenPlaylist} showScreenOnClick={this.showScreenOnClick}></Playlists>
        
      </div>
    );
  }
}


