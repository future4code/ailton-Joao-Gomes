import styled from "styled-components";

export const Container = styled.div `
width: 100%;
height: 200px;
background-color: #BDBDBD;
display: flex;
align-items: center;
justify-content: space-around;
border-bottom: 1px solid black;
`

export const ContainerLogo = styled.div`
width: 10%;
height: 100%;
/* border: 1px solid black; */
display: flex;
align-items: center;
justify-content: center;
`
export const LogoStyle = styled.img `
width: 150px;
height: 150px;
`

export const ContainerMenu = styled.div`
width: 50%;
height: 100%;
/* border: 1px solid black; */
display: flex;
justify-content: space-around;
align-items: center;
`
export const ContainerOptions = styled.div`
width: 20%;
border: 1px solid black;
background-color: #D0CEE2;
border-radius: 20px;
text-align: center;
cursor: pointer;
transition: 0.3s;
:hover{
    background-color: white;
}
`

export const ContainerButtonLogin = styled.div`
width: 10%;
height: 100%;
/* border: 1px solid black; */
display: flex;
align-items: center;
justify-content: center;
`

export const ButtonLogin = styled.div`
height: 50px;
width: 130px;
border: 1px solid black;
border-radius: 20px;
display: flex;
align-items: center;
justify-content: space-around;
background-color: #F8CECC;
cursor: pointer;
transition: 0.3s;
:hover{
    background-color: white;
}

`
export const IconLoginStyle = styled.img `
width: 40px;
height: 40px;
`

export const LoginPopUp = styled.div `
position: absolute;
width: 300px;
height: 220px;
top: 130px;
right: 40px;
background-color: #DAE8FC;
border: 1px solid black;
border-radius: 20px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
`
export const LoginInfoContainer = styled.div `
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
`
export const LoginInput = styled.input `
padding: 3%;
`
export const ButtonLoginEnter = styled.button `
`