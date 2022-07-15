import styled from "styled-components";

export const Container = styled.div `
width: 100%;
height: 100vh;
background-image: radial-gradient(circle, #f8cecc, #f6ced6, #f1d0df, #ead2e7, #e1d5ed);
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
`
export const ContainerTop = styled.div`
width: 100%;
height: 20%;
/* background-color: green; */
display: flex;
align-items: center;
justify-content: center;
`
export const ContainerTitle = styled.div `
width: 25%;
height: 40%;
background-color: white;
border: 1px solid black;
border-radius: 40px;
display: flex;
justify-content: center;
align-items: center;
`
export const ContainerBottom = styled.div `
width: 100%;
height: 80%;
display: flex;
align-items: center;
justify-content: space-around;
border-top: 1px solid black;
`
export const ContainerLeft = styled.div `
width: 40%;
height: 90%;
background-color: white;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
border-radius: 20px;
`
export const ContainerRight = styled.div `
width: 40%;
height: 90%;
background-color: white; 
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
border-radius: 20px;
`
export const TitleContainers = styled.div `
width: 40%;
height: 10%;
/* background-color: red; */
border: 1px solid black;
border-radius: 40px;
display: flex;
justify-content: center;
align-items: center;
`
export const Title = styled.p`
font-size: 1.3rem;
`
export const ContainerTrips = styled.div`
width: 90%;
height: 80%;
/* background-color: green; */
border: 1px solid black;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
overflow: auto;
`
export const Trip = styled.div`
width: 70%;
height: 12.5%;
background-color: white;
display: flex;
justify-content: space-around;
align-items: center;
border-radius: 40px;
border: 1px solid black;
cursor: pointer;
`
export const DeleteStyle = styled.img `
width: 30px;
height: 30px;
cursor: pointer;
transition: 0.5s;
:hover{
    background-color: lightgreen;
    border-radius: 100%;
}
`
export const TripNameContainer = styled.div`
width: 80%;
`
export const ContainerForm = styled.div`
width: 90%;
height: 80%;
/* background-color: green; */
border: 1px solid black;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`