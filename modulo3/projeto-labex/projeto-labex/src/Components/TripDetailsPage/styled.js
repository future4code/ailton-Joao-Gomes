import styled from "styled-components";

export const Container = styled.div `
width: 100%;
height: 130vh;
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
export const TitleStyle1 = styled.p `
font-size: 1.5rem;
`
export const ContainerBottom = styled.div`

width: 100%;
height: 80%;
display: flex;
align-items: center;
justify-content: top;
flex-direction: column;
`
export const ContainerDetailGeral = styled.div`
width: 60%;
height: 80%;
background-color: white;
border: 1px solid black;
border-radius: 40px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`
export const ContainerDetail = styled.div`
width: 80%;
height: 30%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: left;
`
export const ContainerDetailStyle = styled.div `
display: flex;
align-items: center;
gap: 15px;
`
export const TitleStyle = styled.p`
color: blue;
font-size: 1.1rem;
`
export const ContainerCandidates = styled.div`
width: 100%;
height: 60%;
background-color: red;
display: flex;
align-items: center;
justify-content: space-around;
`

export const ContainerPendingCandidates = styled.div`
width: 25%;
height: 90%;
background-color: white;
`
export const ContainerApprovedCandidates = styled.div`
width: 65%;
height: 90%;
background-color: white;
`