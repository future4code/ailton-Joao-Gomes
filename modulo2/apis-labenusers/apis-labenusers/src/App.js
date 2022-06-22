import React from 'react';
import './App.css';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div `
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`
const ContainerTudo = styled.div `
width: 50%;
height: 90%;
background-color: orange;
display: flex;
gap: 35px;
flex-direction: column;
justify-content: top;
align-items: center;
`
const ContainerCadastro = styled.div `
width: 50%;
height: 40%;
background-color: green;
display: flex;
gap: 35px;
flex-direction: column;
justify-content: top;
align-items: center;
button:hover {
  border: 3px solid red;
  cursor: pointer;
}
`
const ContainerLista = styled.div `
width: 80%;
height: 50%;
background-color: lightgreen;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
overflow: auto;
top:0;

`
const ContainerUsuarios = styled.div `
display: flex;
justify-content: center;
align-items: center;
gap: 20px;
button{
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
  color: white;
  border: none;
  border-radius: 30px;
  cursor: pointer;
}
button:hover{
  background-color: #FF5252;
}
p {
  margin-bottom: 20px;
}
`



class App extends React.Component {

state= {
  nomeUsuario: "",
  emailUsuario: "",
  usuarios: []
}

onChangeName = (event) => {
  this.setState({nomeUsuario: event.target.value})
}
onChangeEmail = (event) => {
  this.setState({emailUsuario: event.target.value})
}

criaCadastro = () => {
  const body = {
    name: this.state.nomeUsuario,
    email: this.state.emailUsuario
  }
  axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, {
    headers: {
      Authorization: "joao-gomes-ailton"
    }
  }
  ).then((response) => {
    console.log(response.config.data)
    this.getUser()
    alert("Seu usuário foi criado!")
  }).catch((error) => {
    console.log(error)
    alert("Seu usuário não foi criado!")
  })
  this.setState({nomeUsuario:"",emailUsuario:""})
}

  deletaUser = (id) => {
    if(window.confirm("Tem certeza que deseja excluir?") === true){
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, {
      headers: {
        Authorization: "joao-gomes-ailton"
      }
    }).then((response) => {
      alert("Usuário deletado!")
    }).catch((response) => {
      alert("Problema em deletar usuário!")
    })

    const arrayNovo = this.state.usuarios.filter((item) => {
      return item.id !== id
    })
    this.setState({usuarios:arrayNovo})
  }else{
    alert("Usuário NÃO excluído!")
  }
}
  getUser = () => {
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {
      headers: {
        Authorization: "joao-gomes-ailton"
      }
    }).then((response) => {
      this.setState({usuarios:response.data})
      
    })
  }
  componentDidMount() {
    this.getUser()

  }


  render() {


    const listaDeUsuarios = this.state.usuarios?.map((users) => {
      return <ContainerUsuarios><p>{users.name}</p> <button onClick={() => this.deletaUser(users.id)}>x</button></ContainerUsuarios>
    })
    


  return (
    
    <Container>
      <ContainerTudo>
        <ContainerCadastro>
          <h3>Cadastro de Usuário!</h3>
          <input placeholder = 'Nome' type = {'text'} value = {this.state.nomeUsuario} onChange = {this.onChangeName}></input>
          <input placeholder = 'Email' type = {'text'} value = {this.state.emailUsuario} onChange = {this.onChangeEmail}></input>
          <button onClick={this.criaCadastro}>Criar Usuário</button>
        </ContainerCadastro>
        <ContainerLista>
          <h3>Lista de Usuários</h3>
          {listaDeUsuarios}
        </ContainerLista>
      </ContainerTudo>
    </Container>
    
  );
}

}
export default App;
