import styled from "styled-components";

export const Container = styled.div `
width: 100%;
height: 70vh;
background-image: radial-gradient(circle, #f8cecc, #f6ced6, #f1d0df, #ead2e7, #e1d5ed);
display: flex;
`
export const MoonStyle = styled.img `
border-radius: 100%;
width: 40%;
`
export const ContainerCard = styled.div `
width: 50%;
height: 100%;
/* border: 1px solid black; */
display: flex;
justify-content: center;
align-items: center;
`
export const Card = styled.div`
width: 60%;
height: 60%;
/* border: 1px solid black; */
background-color: #DAE8FC;
border-radius: 30px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
export const WelcomeText = styled.p `
font-size: 1.5rem;
`

export const ContainerMoon = styled.div `
width: 50%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`