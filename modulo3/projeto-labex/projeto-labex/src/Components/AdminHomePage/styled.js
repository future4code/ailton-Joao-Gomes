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
/* border-top: 1px solid black; */
`
export const ContainerLeft = styled.div `
width: 40%;
height: 90%;
background-color: #90EE90;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
border-radius: 20px;
`
export const ContainerRight = styled.div `
width: 40%;
height: 90%;
background-color: #90EE90;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
border-radius: 20px;
`
export const TitleContainers = styled.div `
width: 40%;
height: 10%;
background-color: white;
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
max-height: 80%;
display: flex;
flex-wrap: wrap;
background-color: #DAE8FC;
border: 1px solid black;
overflow: auto;
`
export const Trip = styled.div`
width: 70%;
height: 12.5%;
margin: 12px auto;
background-color: white;
display: flex;
justify-content: space-around;
align-items: center;
border-radius: 40px;
border: 1px solid black;
`
export const DeleteStyle = styled.img `
width: 30px;
height: 30px;
cursor: pointer;
border-radius: 100%;
border: 1.8px solid black;
transition: 0.2s;
:hover{
    background-color: lightgreen;
    border-radius: 100%;
}
`
export const DetailsStyle = styled.img`
width: 30px;
height: 30px;
cursor: pointer;
border-radius: 100%;
border: 1.8px solid black;
transition: 0.2s;
:hover{
    background-color: #BDBDBD;
    border-radius: 100%;
}
`

export const TripNameContainer = styled.div`
width: 70%;
`
export const ContainerForm = styled.div`
width: 90%;
height: 80%;
background-color: #DAE8FC;
border: 1px solid black;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
export const FormStyle = styled.form `
display: flex;
flex-direction: column;
justify-content: center;
gap: 5%;
align-items: center;
width: 100%;
height: 100%;
`
export const InputStyle = styled.input `
width: 50%;
height: 6%;
border-radius: 5px;
border: 1px solid black;
padding: 0px 10px;
background-color: white;

`
export const InputStyleDescription = styled.textarea `
width: 50%;
height: 15%;
padding: 12px 10px;
/* box-sizing: border-box; */
/* border: 2px solid #ccc; */
border-radius: 5px;
/* background-color: #f8f8f8; */
font-size: 1.3em;
resize: none;
background-color: white;
`