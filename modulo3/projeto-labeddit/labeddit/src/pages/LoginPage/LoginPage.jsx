import React from "react";
import { useNavigate } from "react-router-dom";
import LogoLabeddit from "../../assets/logolabeddit.png";
import { Buttons } from "../../components/Buttons";
import { GoTo } from "../../functions/GoTo";
import {
  Container,
  Separator1,
  StyleLine,
  ButtonsContainer,
  Separator2,
  Separator3,
  Input,
  LogoStyle,
  InputContainer,
  TextLogo,
  Title,
  Subtitle,
  Test,
} from "./styled";

export const LoginPage = () => {

 const navigate = useNavigate()
  return (
    <Container>
      <Separator1 />

      <LogoStyle src={LogoLabeddit} />

      <TextLogo>
        <Title>LabEddit</Title>
        <Subtitle>O projeto de rede social da Labenu</Subtitle>
      </TextLogo>

      <Separator2 />

      <InputContainer>
        <Input placeholder="Nome"></Input>
        <Input placeholder="Senha"></Input>
      </InputContainer>

      <Separator3 />

      <ButtonsContainer>
        <Buttons
          color={"#FFF"}
          background={"linear-gradient(90deg, #FF6489 0%, #F9B24E 100%)"}
          border={"none"}
          borderRadius={27}
        >
          Continuar
        </Buttons>
        <StyleLine></StyleLine>
        <Buttons onClick={()=> GoTo(navigate,"/register")}
          color={"#FE7E02"}
          background={"#FFF"}
          border={"1px solid #FE7E02"}
          borderRadius={27}
        >
          Crie uma conta!
        </Buttons>
      </ButtonsContainer>
    </Container>
  );
};
