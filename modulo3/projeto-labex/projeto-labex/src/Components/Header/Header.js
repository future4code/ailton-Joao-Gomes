import React from "react";
import { Container, ContainerButtonLogin, ContainerLogo, ContainerMenu, LogoStyle, ContainerOptions, ButtonLogin, IconLoginStyle } from "./styled";
import Logo from '../img/labexlogo.png';
import LoginIcon from '../img/loginicon.png';
import { useNavigate } from "react-router-dom";



export default function Header() {

    const navigate = useNavigate()
  
    const goTo = (page) => {
        navigate(`${page}`)
    }

      return (
        <Container>
            
            <ContainerLogo>
                <LogoStyle src={Logo} />
            </ContainerLogo>
            
            <ContainerMenu>

                <ContainerOptions onClick={()=>goTo("/")}><p>Home</p></ContainerOptions>
                <ContainerOptions onClick={()=>goTo("listtrippage")}><p>Viagens</p></ContainerOptions>
                <ContainerOptions><p>Sobre Nós</p></ContainerOptions>
                <ContainerOptions><p>Contato</p></ContainerOptions>

            </ContainerMenu>

            <ContainerButtonLogin>

                <ButtonLogin>
                    <p>LOGIN</p>
                    <IconLoginStyle src={LoginIcon}/>
                </ButtonLogin>

            </ContainerButtonLogin>

        </Container>
      );
    }