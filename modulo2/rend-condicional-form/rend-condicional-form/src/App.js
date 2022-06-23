import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Etapa1 } from './components/Etapa1';
import { Etapa2 } from './components/Etapa2';
import { Etapa3 } from './components/Etapa3';
import { Final, FInal } from './components/Final';
import styled from 'styled-components';



const ContainerPrincipal = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Butao = styled.button `
  margin-top: 2%;
  font-size: 1.1rem;
  padding: 0.5%;
  border-radius: 70px 70px;
  border: 1px solid;
`


class App extends React.Component {
 
 state = {
  etapa: 1,
 }
 
 
 renderizaEtapa = () => {
  switch (this.state.etapa){
    case 1: return <Etapa1></Etapa1> 
    break
    case 2: return <Etapa2></Etapa2>
    break
    case 3: return <Etapa3></Etapa3>
    break
    case 4: return <Final></Final>
    break
  }
 }
 
 irParaProximaEtapa = () => {
    this.setState({etapa: this.state.etapa + 1})
 }

 
  render (){
    
    return (
      <ContainerPrincipal>
      
      {this.renderizaEtapa()}
      {this.state.etapa === 4 || <Butao onClick={this.irParaProximaEtapa}>Proxima Etapa</Butao> }
        
      
      </ContainerPrincipal>
    );
  }
}
export default App;
