import React from "react";
import PerguntaAberta from "./PerguntaAberta";
import styled from "styled-components";

const Container1 = styled.div `
    margin: 0 auto;
    padding-bottom: 1.5% ;
    width: 30%;
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
const SelectStyle = styled.select `
padding: 1%;
width: 400px;
border-radius: 60px 60px;
border: 1px solid;
`



export class Etapa1 extends React.Component {
    
    
    
    render (){
      
      
      return (
        <Container1>
                <h2>ETAPA 1 - DADOS GERAIS</h2>
                <PerguntaAberta pergunta={"1. Qual o seu nome?"} />
                <PerguntaAberta pergunta={"2. Qual a sua idade?"} />
                <PerguntaAberta pergunta={"3. Qual o seu email?"} />
                <p>4. Qual a sua escolaridade?</p>
                <SelectStyle>
                    <option>ensino médio completo</option>
                    <option>ensino médio incompleto</option>
                    <option>ensino superior completo</option>
                    <option>ensino superior incompleto</option>
                </SelectStyle>
                {/* <button>Próxima etapa</button> */}
        </Container1>
      );
    }
  }

  