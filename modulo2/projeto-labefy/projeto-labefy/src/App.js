import React from 'react';
import axios from 'axios'
import './App.css';
import Playlists from './components/Playlists/Playlists';
import AddPlaylist from './components/AddPlaylist/AddPlaylist';
import ScreenPlaylist from './components/ScreenPlaylist/ScreenPlaylist';
import Header from './components/Header/Header'


export default class App extends React.Component {

  state = {
    playlistName: "",
    allPlaylist: [],
    showScreenPlaylist: "false"
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

    showScreenOnClick = () => {
      this.setState({ showScreenPlaylist: "true" })
    }

  }


  render() {
    return (
      <div>
        <Header></Header>
        <AddPlaylist onChangePlaylistName={this.onChangePlaylistName} criaPlaylist={this.criaPlaylist} playlistName={this.state.playlistName}></AddPlaylist>
        <Playlists allPlaylist={this.state.allPlaylist} showScreenPlaylist={this.state.showScreenPlaylist} showScreenOnClick={this.showScreenOnClick}></Playlists>
        <ScreenPlaylist showScreenPlaylist={this.state.showScreenPlaylist}></ScreenPlaylist>
      </div>
    );
  }
}


