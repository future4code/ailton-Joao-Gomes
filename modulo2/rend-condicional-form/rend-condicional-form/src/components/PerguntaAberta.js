import React from "react";
import styled from "styled-components";

const Texto = styled.div `
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const Inputs = styled.input `
width: 400px;
padding: 1.5%;
border: 1px solid;
border-radius: 60px 60px;
`


export default function PerguntaAberta(props){
    return (
        <Texto>
            <p>{props.pergunta}</p>
            <Inputs onChange={props.onChange} value={props.value}/>
        </Texto>
    )
}