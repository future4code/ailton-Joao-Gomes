import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';
import myllenaPerfil from './img/amaisgata.jpeg';
import myllenaPost from './img/linda2.jpg';
import freddyPerfil from './img/freddy2.jfif';
import freddyPost from './img/freddy.jpg';
import vaderPerfil from './img/vader2.jpg';
import vaderPost from './img/darthvader.jpg';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
class App extends React.Component {
  state = {
    infoUser: [
      {nomeUser: "MyllenaGata", fotoUser: myllenaPerfil, fotoPostin: myllenaPost },
      {nomeUser: "DarthVader", fotoUser: vaderPerfil, fotoPostin: vaderPost},
      {nomeUser: "Freddy", fotoUser: freddyPerfil, fotoPostin: freddyPost}
    ],
    nomeInput: "",
    imgPerfilInput: "",
    imgPostInput: "",
  }

  adicionaPost = () => {
    const novoInfoUser = {
      nomeUser: this.state.nomeInput,
      fotoUser: this.state.imgPerfilInput,
      fotoPostin: this.state.imgPerfilInput
    }

    const infoUserNovo = [...this.state.infoUser, novoInfoUser];
    this.setState({infoUser:infoUserNovo})
    this.setState({nomeInput:""})
    this.setState({imgPerfilInput:""})
    this.setState({imgPostInput:""})
  }

  onChangeNomeUser = (event) => {
    this.setState({nomeInput:event.target.value})
  }
  onChangeFotoUser = (event) => {
    this.setState({imgPerfilInput:event.target.value})
  }
  onChangeFotoPost = (event) => {
    this.setState({imgPostInput:event.target.value})
  }

  render() {

    const listaUsuarios = this.state.infoUser.map((usuario) => {
      return (
        <Post
          nomeUsuario={usuario.nomeUser}
          fotoUsuario={usuario.fotoUser}
          fotoPost={usuario.fotoPostin}
        />
      )
    });

    return (
      <MainContainer>
      <div>
      <input
            value={this.state.nomeInput}
            onChange={this.onChangeNomeUser}
            placeholder={"Texto"}
          />
          <input
            value={this.state.imgPerfilInput}
            onChange={this.onChangeFotoUser}
            placeholder={"Imagem"}
          />
          <input
            value={this.state.imgPostInput}
            onChange={this.onChangeFotoPost}
            placeholder={"Imagem2"}
          />
        <button onClick={this.adicionaPost}>Nova postagem</button>
        {listaUsuarios}
      </div>
      </MainContainer>
    );
  }
}


export default App;
