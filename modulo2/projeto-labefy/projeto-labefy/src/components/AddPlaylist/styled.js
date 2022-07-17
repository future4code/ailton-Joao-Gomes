import styled from "styled-components";


export const Container = styled.div `
background-color: grey;
width: 100%;
height: 300px;
display: flex;
justify-content: center;
align-items: center;
`

export const ContainerAdd = styled.div `
width: 25%;
height: 90%;
background-color: white;
border: 1px dotted black;
border-radius: 20px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 30px;
h2{
    border-bottom: 1px solid black;
}
input{
    border-radius: 20px;
    padding: 6px;
}
button{
    border-radius: 10px;
    padding: 5px;
}
`