import { useEffect, React } from "react";
import { useNavigate } from "react-router";
import { Header } from "../../components/Header/Header";
import { TextArea } from "../../components/TextArea";
import { Buttons } from "../../components/Buttons";
import { StyleLine } from "../../components/StyleLine";
import { Container, ContainerTextAndButton } from "./styled";
import { GoTo } from "../../functions/GoTo";

export const FeedPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      GoTo(navigate, "/");
    }
  }, []);

  return (
    <Container>
      <Header />
      <ContainerTextAndButton>
        <TextArea defaultValue={"Escreva seu post..."}></TextArea>
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
