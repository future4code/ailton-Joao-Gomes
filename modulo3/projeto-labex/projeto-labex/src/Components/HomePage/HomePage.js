import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { WelcomeText, Card, Container, MoonStyle, ContainerCard, ContainerMoon } from "./styled";
import MoonGif from '../img/moongif.gif';


export default function HomePage() {

  return (
    <div>
      <Header />


      <Container>

        <ContainerCard>
          <Card>
            <WelcomeText>Seja bem vindo! </WelcomeText>
          </Card>
        </ContainerCard>

        <ContainerMoon>
          <MoonStyle src={MoonGif} />
        </ContainerMoon>
      </Container>

      <Footer />
    </div>
  );
}


