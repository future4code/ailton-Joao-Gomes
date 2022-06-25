import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 500px;
background-color: lightcoral;
display: flex;
justify-content: center;
align-items: center;
`

export const ContainerList = styled.div `
width: 70%;
height: 80%;
background-color: white;
border-radius: 10px;
overflow: auto;
`
export const ContainerPlaylist = styled.div `
top: 0;
display: flex;
justify-content: space-around;
align-items: center;
width: 100%;
height: 50px;
border-bottom: 1px solid black;
`
export const ContainerPlaylistItens = styled.div `
width: 30%;
display: flex;
justify-content: center;
align-items: center
`