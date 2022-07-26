import React from "react";
import { Container, UserP, TextP } from "./style";

export const Card = (props) => {
  return (
    <Container>
      <UserP>Enviado por: {props.username}</UserP>
      <TextP></TextP>
    </Container>
  );
}
