
import styled from "styled-components";

export const Container = styled.div `
background-color: black;
display: flex;
justify-content: space-between;
align-items: center;

`

export const LogoStyle = styled.img `
width: 120px;
height: 120px;
`

export const ContainerMenu = styled.div `
background-color: white;
display: flex;
justify-content: center;
align-items: center;
gap:10px;
padding: 10px;
margin: 0 20px;
width: 5%;
height: 15px;
border-radius: 40px;
border: 1px solid black;
:hover{
    cursor: pointer;
    border: 1px solid white;
}
img{
    width: 20px;
    height: 20px;
}
`