import React from "react";
import {
  Container,
  Checkbox,
  TextContract,
  ContainerCheckButton,
  Text,
  Separator1,
  Separator3,
  Separator4,
  CheckText,
  DivCheckText,
  Separator2,
  InputContainer,
} from "./styled";
import { Header } from "../../components/Header/Header";
import { Input } from "../../components/Input";
import { Buttons } from "../../components/Buttons";
import { useForm } from "../../hooks/useForm";

export const RegisterPage = () => {
  const { form, onChange } = useForm({ name: "", email: "", password: "" });

  const Teste = (event) => {
    event.preventDefault();

    console.log(form);
  };
  
  return (
    <Container>
      <Header></Header>
      <Text>Olá, boas vindas ao LabEddit ;)</Text>
      <Separator1></Separator1>
      <form onSubmit={Teste}>
        <InputContainer>
          <Input
            name="name"
            value={form.name}
            onChange={onChange}
            required
            placeholder="Nome de usuário"
          ></Input>
          <Input
            name="email"
            value={form.email}
            onChange={onChange}
            required
            placeholder="E-mail"
          ></Input>
          <Input
            name="password"
            value={form.password}
            onChange={onChange}
            required
            placeholder="Senha"
          ></Input>
        </InputContainer>
        <Separator2 />
        <ContainerCheckButton>
          <TextContract>
            Ao continuar, você concorda com o nosso contrato de usuário e nossa
            Política de Privacidade
          </TextContract>
          <Separator3 />
          <DivCheckText>
            <Checkbox type="checkbox"></Checkbox>
            <CheckText>
              Eu concordo em receber emails sobre coisas legais no Labeddit
            </CheckText>
          </DivCheckText>
          <Separator4 />
          <Buttons
            color={"#FFF"}
            background={"linear-gradient(90deg, #FF6489 0%, #F9B24E 100%)"}
            border={"none"}
            borderRadius={27}
          >
            Cadastrar
          </Buttons>
        </ContainerCheckButton>
      </form>
    </Container>
  );
};
