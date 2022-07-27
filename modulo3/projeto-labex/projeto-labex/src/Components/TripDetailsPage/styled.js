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
background-color:#90EE90;


`
export const ContainerDetail = styled.div`
width: 80%;
height: 30%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: left;
background-color: #DAE8FC;
border-radius: 20px;
border: 1px solid black;
`
export const ContainerDetailStyle = styled.div `
display: flex;
align-items: center;
gap: 15px;
`
export const TitleStyle = styled.p`
font-weight: bold;
font-size: 1.1rem;
color: black;
margin-left: 20px;
`
export const ContainerCandidates = styled.div`
width: 100%;
height: 60%;
background-color:#90EE90;
display: flex;
align-items: center;
justify-content: space-around;

`

export const ContainerApprovedCandidates = styled.div`
width: 25%;
height: 90%;
border: 1px solid black;
border-radius: 20px;
background-color: #DAE8FC;
`
export const ContainerPendingCandidates = styled.div`
width: 65%;
height: 90%;
border: 1px solid black;
border-radius: 20px;
background-color: #DAE8FC;
`
export const Candidate = styled.div`
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
export const CandidateNameContainer = styled.div`
width: 65%;
`
export const LoupeStyle = styled.img`
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
export const CandidatePopUp = styled.div `
position: absolute;
width: 600px;
height: 600px;
background-color: lightpink;
border: 3px solid black;
border-radius: 20px;
display: flex;
align-items: center;
justify-content: space-around;
flex-direction: column;
gap: 1%;
`
export const ButtonClose = styled.div`
height: 10%;
width: 100%;
display: flex ;
justify-content: flex-end;
align-items: flex-start;
`
export const AllInformation = styled.div `
background-color: white;
width: 90%;
height: 70%;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
border-radius: 20px;
`
export const Information = styled.div`
width: 100%;
display: flex;
justify-content: flex-start;
align-items: center;
gap: 10px;
margin-left: 10px;
`
export const InformationText1 = styled.div `
/* background-color: blue; */
height: 50%;
width: 100%;
margin-left: 10px;
`
export const InformationText2 = styled.div`
/* background-color: white; */
width: 100%;
height: 60%;
overflow: auto;
`
export const Pstyled = styled.p `
font-size: 1.1rem;
font-weight: bold;
`
export const PstyledText = styled.p `
height: 20%;
/* background-color: white; */
font-size: 1.1rem;
font-weight: bold;
`
export const CloseStyle = styled.img `
width: 30px;
margin-right: 20px;
height: 30px;
cursor: pointer;
background-color: white;
border-radius: 100%;
border: 1.8px solid black;
transition: 0.2s;
:hover{
    background-color: #ffaaaa;
    border-radius: 100%;
}
`
export const Title = styled.div`
background-color: white;
font-size: 1.3rem;
padding: 2%;
border-radius: 20px;
`
export const Title2 = styled.div`
width: 100%;
height: 15%;
/* background-color: yellow; */
display: flex;
justify-content: center;
align-items: center;
`
export const PTitleStyle = styled.p `
background-color: white;
padding: 7px;
border-radius: 12px;
border: 1px solid black;
`
export const ContainerFinal = styled.div`
height: 85%;
width: 100%;
overflow: auto;
`