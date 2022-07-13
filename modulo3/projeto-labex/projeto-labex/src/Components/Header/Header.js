import React from "react";
import { ButtonLoginEnter, LoginInput, LoginInfoContainer, LoginPopUp, Container, ContainerButtonLogin, ContainerLogo, ContainerMenu, LogoStyle, ContainerOptions, ButtonLogin, IconLoginStyle } from "./styled";
import Logo from '../img/labexlogo.png';
import LoginIcon from '../img/loginicon.png';
import { useNavigate } from "react-router-dom";
import { useState } from "react";



export default function Header() {

    const navigate = useNavigate()
  
    const goTo = (page) => {
        navigate(`${page}`)
    }

    const [loginOpen, setLoginOpen] = useState(false)

    const openLoginPopUp = () =>{
        console.log("abriu popup")
        setLoginOpen(!loginOpen)
        console.log(loginOpen)
    }

      return (
        <Container>
            
            <ContainerLogo>
                <LogoStyle src={Logo} />
            </ContainerLogo>
            
            <ContainerMenu>

                <ContainerOptions onClick={()=>goTo("/")}><p>Home</p></ContainerOptions>
                <ContainerOptions onClick={()=>goTo("trips/list")}><p>Viagens</p></ContainerOptions>
                <ContainerOptions><p>Sobre Nós</p></ContainerOptions>
                <ContainerOptions><p>Contato</p></ContainerOptions>

            </ContainerMenu>

            <ContainerButtonLogin>

                <ButtonLogin onClick={openLoginPopUp}>
                    <p>LOGIN</p>
                    <IconLoginStyle src={LoginIcon}/>
                </ButtonLogin>

            </ContainerButtonLogin>
            {loginOpen && 
            <LoginPopUp>
                <LoginInfoContainer>
                    <LoginInput placeholder="Email"></LoginInput>
                    <LoginInput placeholder="Senha"></LoginInput>
                </LoginInfoContainer>
                
                <ButtonLoginEnter>Entrar</ButtonLoginEnter>
            </LoginPopUp>}

        </Container>
      );
    }