import React from 'react'
import { Container, DivButton, LogoStyle } from './style'
import LogoLabeddit from "../../assets/logolabeddit.png";
import { GoTo } from '../../functions/GoTo';
import { useNavigate } from "react-router";

export const Header = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate()

  const logout = () => {
    window.localStorage.setItem("token", "");
    window.alert("Você deslogou.");
    GoTo(navigate,"/");
  };

  return (
    <Container>
      <LogoStyle src={LogoLabeddit} />
      {token ? <DivButton onClick={logout}>Logout</DivButton> : <DivButton onClick={()=> GoTo(navigate,"/")}>Entrar</DivButton>}
      
    </Container>
  );
}
