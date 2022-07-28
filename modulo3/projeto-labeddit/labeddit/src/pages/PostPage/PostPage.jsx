import { useEffect, React } from "react";
import { useNavigate } from "react-router";
import { GoTo } from "../../functions/GoTo";
import { Header } from "../../components/Header/Header";
import { Container } from "./styled";

export const PostPage = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      GoTo(navigate, "/");
    }
  }, []);
  return (
  <Container>
    <Header/>
    <p>{props.title}</p>

  </Container>
  )
};
