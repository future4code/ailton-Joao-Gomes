import React from 'react'
import { Container, DivButton, LogoStyle } from './style'
import LogoLabeddit from "../../assets/logolabeddit.png";

export const Header = () => {
  return (
    <Container>
        <LogoStyle src={LogoLabeddit} />
        <DivButton>Entrar</DivButton>
    </Container>
  )
}
