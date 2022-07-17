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
            <MediasStyle src={LogoWhats} />
            <MediasStyle src={LogoInsta} />
            <MediasStyle src={LogoLinkedin} />
            <MediasStyle src={LogoGithub} />
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
