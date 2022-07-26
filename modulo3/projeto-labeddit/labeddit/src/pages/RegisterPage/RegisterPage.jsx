import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
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
import { GoTo } from "../../functions/GoTo";

export const RegisterPage = () => {
  const { form, onChange } = useForm({ username: "", email: "", password: "" });

  const navigate = useNavigate()
  const signup = async(event) => {
    event.preventDefault();

    try {
      const response = await axios.post("https://labeddit.herokuapp.com/users/signup", form)
      window.localStorage.setItem("token", response.data.token)
      window.alert("Cadastro realizado com sucesso.")
      
    } catch (error) {
      window.alert("Cadastro NÃO realizado.")
    }
    
  };
  
  return (
    <Container>
      <Header></Header>
      <Text>Olá, boas vindas ao LabEddit ;)</Text>
      <Separator1></Separator1>
      <form onSubmit={signup}>
        <InputContainer>
          <Input
            name="username"
            value={form.username}
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
