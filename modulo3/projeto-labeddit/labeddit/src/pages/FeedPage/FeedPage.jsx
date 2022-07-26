import React from "react";
import { Header } from "../../components/Header/Header";
import { TextArea } from "../../components/TextArea";
import { Buttons } from "../../components/Buttons";
import { StyleLine } from "../../components/StyleLine";
import { Container, ContainerTextAndButton } from "./styled";

export const FeedPage = () => {
  return (
    <Container>
      <Header />
      <ContainerTextAndButton>
        <TextArea>Escreva seu post...</TextArea>
        <Buttons
          color={"#FFF"}
          background={"linear-gradient(90deg, #FF6489 0%, #F9B24E 100%)"}
          border={"none"}
          borderRadius={12}
        >
          Postar
        </Buttons>
        <StyleLine />
      </ContainerTextAndButton>
    </Container>
  );
};
