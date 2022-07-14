import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 100vh;
background-image: radial-gradient(circle, #f8cecc, #f6ced6, #f1d0df, #ead2e7, #e1d5ed);
display: flex;
flex-direction: column;
`
export const ContainerTop = styled.div`
/* border-bottom: 1px solid black; */
width: 100%;
height: 20%;
display: flex;
justify-content: center;
align-items: center;
`
export const Title = styled.div`
width: 25%;
height: 40%;
background-color: white;
border: 1px solid black;
border-radius: 40px;
display: flex;
justify-content: center;
align-items: center;
`
export const TitleStyleP = styled.p `
font-size: 1.5rem;
`
export const ContainerBottom = styled.div`
/* border: 1px solid black; */
width: 100%;
height: 70%;
display: flex;
align-items: center;
justify-content: center;
`
export const ContainerTrips= styled.div `
width: 70%;
height: 80%;
background-color: white;
border: 1px solid black;
`