import styled from "styled-components";

export const Container = styled.div `
width: 100vw;
height: 100vh;
background-color: grey;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
export const CardGeral = styled.div `
width: 40vw;
height: 90vh;
border-radius: 20px;
border: 1px solid black;
background-color: white;
`
export const CardHeader = styled.div `
width: 100%;
height: 15%;
border-bottom: 1px solid black;
display: flex;
align-items: center;
justify-content: center;
`
export const CardPerfil = styled.div `
width: 100%;
height: 70%;
background-image: url(${props=>props.photo});
background-size: cover;
display: flex;
justify-content: end;
align-items: center;
flex-direction: column;
color: white;
`
export const ImgMatch = styled.img `
width: 50px;
height: 50px;
`