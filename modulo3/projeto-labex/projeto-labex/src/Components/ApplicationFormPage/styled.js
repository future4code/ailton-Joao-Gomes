import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 80vh;
background-image: radial-gradient(circle, #f8cecc, #f6ced6, #f1d0df, #ead2e7, #e1d5ed);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
export const ContainerGeral = styled.div`
width: 40%;
height: 90%;
/* background-color: white; */
border-radius: 40px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
export const ContainerTitle = styled.div`
/* background-color: red; */
width: 100%;
height: 20%;
display: flex;
align-items: center;
justify-content: center;
`
export const TitleStyle = styled.p`
padding: 3%;
font-size: 1.2rem;
border-radius: 40px;
background-color: white;
`
export const ContainerForm = styled.div`
width: 100%;
height: 80%;
/* background-color: blue; */
display: flex;
justify-content: center;
align-items: center;
`
export const FormStyle = styled.form `
display: flex;
flex-direction: column;
justify-content: center;
gap: 5%;
align-items: center;
width: 90%;
height: 90%;
background-color: white;
border-radius: 20px;
`
export const InputStyle = styled.input `
width: 50%;
height: 6%;
border-radius: 5px;
border: 1px solid black;
padding: 0px 10px;
background-color: #90EE90;

`
export const InputStyleApplication = styled.textarea `
width: 50%;
height: 15%;
padding: 12px 10px;
/* box-sizing: border-box; */
/* border: 2px solid #ccc; */
border-radius: 5px;
/* background-color: #f8f8f8; */
font-size: 1.3em;
resize: none;
background-color: #90EE90;
`
export const ApplicationButton = styled.button`
`
export const SelectStyle = styled.select`
width: 53%;
height: 5%;
background-color: #90EE90;
border-radius: 5px;
border: 1px solid black;
`
