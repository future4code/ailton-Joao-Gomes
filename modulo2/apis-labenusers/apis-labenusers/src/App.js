import React from 'react';
import './App.css';
import axios from 'axios';
import styled from 'styled-components';
import Wallpaper from './img/sobre-nos.jpeg';

const Container = styled.div `
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background-color: #D8F9FF;
`
const ContainerTudo = styled.div `
width: 70%;
height: 90%;
border-radius: 50px;
background-image: url(${Wallpaper});
background-position: center;
display: flex;
gap: 35px;
flex-direction: column;
justify-content: top;
align-items: center;
`
const ContainerCadastro = styled.div `
width: 50%;
height: 40%;
border-radius: 50px;
border: 1px dotted black;
background-color: white;
display: flex;
margin-top: 10px;
gap: 30px;
flex-direction: column;
justify-content: top;
align-items: center;
h3 {
  
}
button:hover {
  border: 3px solid #639DF1;
  cursor: pointer;
}
input{
  padding: 5px;
  border-radius: 12px;
  border: 2px solid #639DF1;
}
`
const ContainerLista = styled.div `
width: 80%;
height: 50%;
background-color: white;
border: 1px dotted black;
border-radius: 5px;
display: flex;
flex-direction: column;
justify-content: top;
align-items: center;
overflow: auto;
top:0;

`
const ContainerUsuarios = styled.div `
display: flex;
width: 100%;
justify-content: space-around;
align-items: center;
gap: 20px;
p {
  margin-bottom: 20px;
}
button {
  cursor: pointer;
}
`

const ButtonDelete = styled.button `
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
:hover{
  background-color: #FF5252;
}
`

const ContainerInfoStyle = styled.div `
top: 430px;
right: 10px;
position: absolute;
width: 20%;
height: 30%;
background-color: #FFBABA;
border: 4px dotted red;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
button {
  cursor: pointer;
  margin-top: 10px;
}
`
const ContainerUsuariosDiv = styled.div `
width: 30%;
display: flex;
justify-content: center;
align-items: center;
`


class App extends React.Component {

state= {
  nomeUsuario: "",
  emailUsuario: "",
  usuarios: [],
  
  infoName: "",
  infoEmail: "",
  infoId: "",
  
  apareceInfo: false,

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

  containerInfo = (id) => {
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, {
      headers: {
        Authorization: "joao-gomes-ailton"
      }
    }).then((response) => {
      this.setState({infoEmail:response.data.email})
      this.setState({infoName:response.data.name})
      this.setState({infoId:response.data.id})
      this.setState({apareceInfo: true})
    })
  }

  fechaInfo = () => {
    this.setState({apareceInfo:false})
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
      return <ContainerUsuarios>
                      <ContainerUsuariosDiv>
                        <p>{users.name}</p>
                      </ContainerUsuariosDiv>
                      <ContainerUsuariosDiv>
                        <button onClick={() => this.containerInfo(users.id)}>informações</button>
                      </ContainerUsuariosDiv>
                      <ContainerUsuariosDiv>
                        <ButtonDelete onClick={() => this.deletaUser(users.id)}>x</ButtonDelete>
                      </ContainerUsuariosDiv>
              </ContainerUsuarios>
    })
    
    


  return (
    
    <Container>
      {this.state.apareceInfo && <ContainerInfoStyle><p>INFORMAÇÕES</p><p>{this.state.infoName}</p><p>{this.state.infoEmail}</p><button onClick={() => this.fechaInfo()}>Fechar</button></ContainerInfoStyle>}
      <ContainerTudo>
        <ContainerCadastro>
          <h3>Cadastro Banco de Dados</h3>
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
