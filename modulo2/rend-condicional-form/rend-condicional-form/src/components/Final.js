import React from "react";
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


export class Final extends React.Component {
    render (){
      return (
        <Container1>
            <h2>O FORMULÁRIO ACABOU</h2>
            <p>Muito obrigado por participar! Entraremos em contato!</p>
        </Container1>
      );
    }
  }
  
  