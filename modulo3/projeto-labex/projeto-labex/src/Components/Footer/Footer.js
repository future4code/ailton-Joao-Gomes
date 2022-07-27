import React from "react";
import { CopyrightP, LogoFooterStyle, ContainerCenter, Medias, MediasStyle, NameStyle, Container, ContainerLeft, ContainerRight, ContainerName, ContainerMedias } from "./styled";
import LogoWhats from '../img/labexwhats.png';
import LogoInsta from '../img/labexinsta.png';
import LogoLinkedin from '../img/labexlinkedin.png';
import LogoGithub from '../img/labexgithub.png';
import LogoFooter from '../img/cleanlabexlogo.png';





export default function Footer() {


  return (
    <Container>
      <ContainerLeft>
        <ContainerName>
          <NameStyle>LABEX - SPACE TRAVEL</NameStyle>
        </ContainerName>
        <ContainerMedias>
          <Medias>
            <a href="https://api.whatsapp.com/send?phone=5551981528199&text=Ol%C3%A1%20Jo%C3%A3o%20%3B)" target="_blank"><MediasStyle src={LogoWhats} /></a>
            <a href="https://www.instagram.com/joaozang/" target="_blank"><MediasStyle src={LogoInsta} /></a>
            <a href="https://www.linkedin.com/in/jo%C3%A3o-pedro-zang-gomes-063282163/" target="_blank"><MediasStyle src={LogoLinkedin} /></a>
            <a href="https://github.com/joaozang" target="_blank"><MediasStyle src={LogoGithub} /></a>
          </Medias>
        </ContainerMedias>

      </ContainerLeft>

      <ContainerCenter>
        <LogoFooterStyle src={LogoFooter} />
      </ContainerCenter>

      <ContainerRight>
        <CopyrightP>©Copyright. Todos Direitos Reservados</CopyrightP>
      </ContainerRight>
    </Container>
  );
}
