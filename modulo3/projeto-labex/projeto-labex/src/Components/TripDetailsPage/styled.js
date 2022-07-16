import styled from "styled-components";

export const Container = styled.div `
width: 100%;
height: 100vh;
background-image: radial-gradient(circle, #f8cecc, #f6ced6, #f1d0df, #ead2e7, #e1d5ed);
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
`
export const ContainerTop = styled.div`
width: 100%;
height: 20%;
display: flex;
justify-content: center;
align-items: center;
`

export const ContainerTitle = styled.div`
width: 25%;
height: 40%;
background-color: white;
border: 1px solid black;
border-radius: 40px;
display: flex;
justify-content: center;
align-items: center;

`
export const ContainerBottom = styled.div`

width: 100%;
height: 80%;
display: flex;
align-items: center;
justify-content: center;
`
export const ContainerDetail = styled.div`
width: 60%;
height: 70%;
background-color: white;
border: 1px solid black;
border-radius: 40px;
display: flex;
justify-content: center;
align-items: center;

`