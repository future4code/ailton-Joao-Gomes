import React from "react";
import {
  Container,
  Checkbox,
  TextContract,
  ContainerCheckButton,
  Text,
  Separator1,
  Separator2,
  InputContainer,
} from "./styled";
import { Header } from "../../components/Header/Header";
import { Input } from "../../components/Input";
import { Buttons } from "../../components/Buttons";
import { useForm } from "../../hooks/useForm";

export const RegisterPage = () => {
  const { form, onChange } = useForm({ name: "", email: "", password: "" });

  return (
    <Container>
      <Header></Header>
      <Text>Olá, boas vindas ao LabEddit ;)</Text>
      <Separator1></Separator1>
      <InputContainer>
        <Input placeholder="Nome de usuário"></Input>
        <Input placeholder="E-mail"></Input>
        <Input placeholder="Senha"></Input>
      </InputContainer>
      <Separator2 />
      <ContainerCheckButton>
        <TextContract>
          Ao continuar, você concorda com o nosso contrato de usuário e nossa
          Política de Privacidade
        </TextContract>
        <Checkbox type="checkbox">
          Eu concordo em receber emails sobre coisas legais no Labeddit
        </Checkbox>
        <Buttons
          color={"#FFF"}
          background={"linear-gradient(90deg, #FF6489 0%, #F9B24E 100%)"}
          border={"none"}
          borderRadius={27}
        >
          Cadastrar
        </Buttons>
      </ContainerCheckButton>
    </Container>
  );
};
