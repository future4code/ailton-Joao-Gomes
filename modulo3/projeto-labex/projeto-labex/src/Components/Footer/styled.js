import styled from "styled-components";

export const Container = styled.div `
width: 100vw;
height: 150px;
background-color: #B1DDF0;
display: flex;
`
export const ContainerLeft = styled.div`
width: 35%;
/* border: 1px solid black; */
display: flex;
flex-direction: column;
`
export const ContainerCenter = styled.div`
width: 30%;
display: flex;
align-items: center;
justify-content: center;
`
export const LogoFooterStyle = styled.img `
width: 100px;
height: 100px;
`

export const ContainerRight = styled.div`
width: 35%;
/* border: 1px solid black; */
display: flex;
justify-content: right;
align-items: flex-end;
`
export const ContainerName = styled.div`
height: 50%;
width: 100%;
/* border: 1px solid black; */
display: flex;
justify-content: left;
align-items: center;
`
export const NameStyle = styled.p`
margin-left: 20px;
font-size: 1.5rem;
`

export const ContainerMedias = styled.div`
height: 50%;
width: 100%;
/* border: 1px solid black; */
display: flex;

`
export const Medias = styled.div `
margin-left: 15px;
display: flex;
align-items: center;
gap: 20px;
`
export const MediasStyle = styled.img `
width: 50px;
height: 50px;
cursor: pointer;
transition: 0.5s;
:hover{
   
    background-color: #BDBDBD;
    border-radius: 100%;
}
`
export const CopyrightP = styled.p`
margin-right: 20px;
`