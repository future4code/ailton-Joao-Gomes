import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LogoLabeddit from "../../assets/logolabeddit.png";
import { Buttons } from "../../components/Buttons";
import { StyleLine } from "../../components/StyleLine";
import { Input } from "../../components/Input";
import { GoTo } from "../../functions/GoTo";
import { useForm } from "../../hooks/useForm";
import {
  Container,
  Separator1,
  ButtonsContainer,
  Separator2,
  Separator3,
  LogoStyle,
  InputContainer,
  TextLogo,
  Title,
  Subtitle,
} from "./styled";

export const LoginPage = () => {

 const navigate = useNavigate()

 const { form, onChange } = useForm({ email: "", password: "" });

  const login = async(event) => {
    event.preventDefault();

    try {
      const response = await axios.post("https://labeddit.herokuapp.com/users/login", form)
      window.localStorage.setItem("token", response.data.token)
      window.alert("Login realizado com sucesso.")
    } catch (error) {
      window.alert("Usuário NÃO encontrado.")
    }
  }

  return (
    <Container>
      <Separator1 />

      <LogoStyle src={LogoLabeddit} />

      <TextLogo>
        <Title>LabEddit</Title>
        <Subtitle>O projeto de rede social da Labenu</Subtitle>
      </TextLogo>

      <Separator2 />
      <form onSubmit={login}>
        <InputContainer>
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
          <Buttons
            onClick={() => GoTo(navigate, "/register")}
            color={"#FE7E02"}
            background={"#FFF"}
            border={"1px solid #FE7E02"}
            borderRadius={27}
          >
            Crie uma conta!
          </Buttons>
        </ButtonsContainer>
      </form>
    </Container>
  );
};
