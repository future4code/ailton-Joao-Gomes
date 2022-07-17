<<<<<<< HEAD

class Etapa2 extends React.Component {

  
  
  
  
    render(){
     
     
      return (
        <div>
          
        </div>
      );
  }
  }
  export default App;
=======
import React from "react";
import PerguntaAberta from "./PerguntaAberta";
import styled from "styled-components";

const Container1 = styled.div `
    margin: 0 auto;
    padding-bottom: 1.5% ;
    width: 40%;
    height: 40%; 
    border: 1px solid;
    border-radius: 60px 60px;
    background-color: lightskyblue;
    box-shadow: 5px 5px black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`




export class Etapa2 extends React.Component {
    render (){
      return (
        <Container1>
            <h2>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h2>
            <PerguntaAberta pergunta={"5. Qual curso?"} />
            <PerguntaAberta pergunta={"6. Qual a unidade de ensino?"} />
            {/* <button>Próxima etapa</button> */}
        </Container1>
      );
    }
  }
  
>>>>>>> 8a5ccfad38677ec7182b55cd5391a8a05f92972e
  