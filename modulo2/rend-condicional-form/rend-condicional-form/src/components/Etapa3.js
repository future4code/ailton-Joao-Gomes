import React from "react";
import PerguntaAberta from "./PerguntaAberta";
import styled from "styled-components";

const Container1 = styled.div `
    margin: 0 auto;
    padding-bottom: 1.5% ;
    width: 35%;
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


export class Etapa3 extends React.Component {
    render (){
      return (
        <Container1>
            <h2>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h2>
            <PerguntaAberta pergunta={"7. Por que você não terminou o curso de graduação?"} />
            <p>8. Você fez algum curso complementar?</p>
            <SelectStyle>
                <option>Nenhum</option>
                <option>Curso Técnico</option>
                <option>Curso de Inglês</option>
            </SelectStyle>
            {/* <button>Próxima etapa</button> */}
            
        </Container1>
      );
    }
  }
  
  