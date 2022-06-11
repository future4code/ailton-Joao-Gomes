
import './App.css';
import React from 'react';
import Post from './components.Post'

class App extends React.Component {

  state = {
    usuarioInput: "",
    mensagemInput: "",
  }


  onChangeUsuarioInput = (event) => {
    this.setState({usuarioInput:event.target.value})
  }

  onChangeMensagemInput = (event) => {
    this.setState({mensagemInput:event.target.value}) 
  }

  enviaMensagem = () => {
    this.setState({usuarioInput: ""})
    this.setState({mensagemInput: ""})
  }





  render() {

    

    return (
      
      <div className="containerPrincipal">
        <div className="caixaMensagens">
          <div className="caixinhaMensagens">
              {this.state.usuarioInput}
              {this.state.mensagemInput}
          </div>
          
        </div>
        
        <div>
          
          <input
            value={this.state.usuarioInput}
            onChange={this.onChangeUsuarioInput}
            placeHolder={"usuario"}

          />
          <input
            value={this.state.mensagemInput}
            onChange={this.onChangeMensagemInput}
            placeHolder={"mensagem"}

          />

          <button onClick={this.enviaMensagem}>Enviar</button>
        
        </div>
      </div>
    
    )
     
    
  }
}


export default App;
