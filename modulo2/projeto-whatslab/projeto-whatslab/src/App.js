import React from 'react';
import './App.css';
import styled from 'styled-components';
import Zap from './img/backgroundzap.jpg'

const ContainerPrincipal = styled.div `
/* border: 1px solid; */
display: flex;
flex-direction: column;
align-items: center;
/* width: 70%; */
height: 100vh;
`
const Header = styled.div `
height: 10%;
width: 60%;
display: flex;
justify-content: center;
align-items: center;
`
const Titulo = styled.p `
font-weight: bold;
font-size: 2rem;
color: green;
text-shadow: 1.2px 1.2px black;
`

const CaixaMensagens = styled.div `
height: 80%;
width: 60%;
border: 1px solid red;
background-color: lightgreen;
`

const CaixinhaDasMensagens = styled.div `
display: flex;
padding-left: 1%;
`
const EstiloUsuario = styled.p `
font-weight: bold;
background-color: lightblue;
padding: 1%;
border-radius: 10px 10px;
`
const EstiloMensagem = styled.p `
/* margin-left: 1%; */
background-color: white;
padding: 1%;
border-radius: 70px 70px;
`

const Footer = styled.div `
/* border: 1px solid black; */
width: 60%;
display: flex;
align-items: center;
justify-content: space-between;
height: 10%;
/* margin: 10px; */
`
const Inputs = styled.input `
width: 20%;
padding: 0.5%;
background-color: lightblue;
border: 1px solid;
`
const Inputs2 = styled.input `
width: 60%;
padding: 0.5%;
background-color: lightgreen;
border: 1px solid;
`
const Butao = styled.button `
width: 10%;
padding: 1%;
border: 1px dashed black;
background-color: lightgrey;
`



class App extends React.Component {

  state = {
    postDaTela: [],
    usuarioInput: "",
    mensagemInput: "",
  }

  enviaMensagem = () => {
    const novoPost = {
      usuario: this.state.usuarioInput,
      mensagem: this.state.mensagemInput
    }
    
    const novoPosts = [...this.state.postDaTela, novoPost]

    this.setState({postDaTela:novoPosts})
    this.setState({usuarioInput: ""})
    this.setState({mensagemInput: ""})
  }

  onChangeUsuarioInput = (event) => {
    this.setState({usuarioInput:event.target.value})
  }

  onChangeMensagemInput = (event) => {
    this.setState({mensagemInput:event.target.value}) 
  }

  render() {

    const listaDePost = this.state.postDaTela.map((post,index) => {
      return (
        <CaixinhaDasMensagens key={index}>
          <EstiloUsuario>{post.usuario} :</EstiloUsuario><EstiloMensagem>{post.mensagem}</EstiloMensagem>
        </CaixinhaDasMensagens>
      )
    })

    return (
      
      <ContainerPrincipal>
        
        <Header>
          <Titulo>ZAPERSON CHAT</Titulo>
        </Header>
        
        <CaixaMensagens>
          
              {listaDePost}
          
          
        </CaixaMensagens>
        
        <Footer>
          
          <Inputs
            value={this.state.usuarioInput}
            onChange={this.onChangeUsuarioInput}
            placeHolder={"usuario"}
          />
          
          <Inputs2
            value={this.state.mensagemInput}
            onChange={this.onChangeMensagemInput}
            placeHolder={"mensagem"}

          />

          <Butao onClick={this.enviaMensagem}>Enviar</Butao>
        
        </Footer>
      </ContainerPrincipal>
    
    )
     
    
  }
}


export default App;
