import styled from "styled-components";

export const Container = styled.div `
position: fixed;
width: 65%;
height: 90%;
background-color: blue;
left: 50%;
top: 50%;
transform: translate(-50%,-50%);
display: flex;
justify-content: space-around;
align-items: center;
flex-direction: column;
border-radius: 10px;
color: white;
h3{
    text-align: center;
}
`
export const ButtonExit = styled.button `
position: fixed;
right: 5px;
top: 5px;
`

export const MusicList = styled.div `
width: 90%;
height: 50%;
background-color: white;
color: black;
`
export const MusicAdd = styled.div `
color: black;
position: fixed;
width: 150px;
height: 20px;
top: 70px;
right: 85px;
display: flex;
justify-content: center;
align-items: center;
background: white;
gap: 5px;
border-radius: 40px;
padding: 5px;
cursor: pointer;
img{
    width: 20px;
    height: 20px;
}
`
export const ContainerMusic = styled.div `
display: flex;
justify-content: space-around;
align-items: center;
`
