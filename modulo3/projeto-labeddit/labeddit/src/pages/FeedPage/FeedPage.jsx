import { useEffect, useState, React } from "react";
import { useNavigate } from "react-router";
import { Header } from "../../components/Header/Header";
import { TextArea } from "../../components/TextArea";
import { Buttons } from "../../components/Buttons";
import { StyleLine } from "../../components/StyleLine";
import { Card } from "../../components/Card/Card";
import {
  Container,
  ContainerTextAndButton,
  ContainerPosts,
  InputTitle,
  Form,
} from "./styled";
import { GoTo } from "../../functions/GoTo";
import { useForm } from "../../hooks/useForm";
import axios from "axios";

export const FeedPage = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState();
  const { form, onChange } = useForm({ title: "", body: "" });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      GoTo(navigate, "/");
    } else {
      getPosts();
    }
  }, []);

  const getPosts = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get("https://labeddit.herokuapp.com/posts", {
        headers: {
          Authorization: token,
        },
      });
      setPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createPost = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token");

    try {
      const response = await axios.post(
        "https://labeddit.herokuapp.com/posts",
        form,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      getPosts();
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(posts);
  return (
    <Container>
      <Header />
      <Form onSubmit={createPost}>
        <ContainerTextAndButton>
          <InputTitle
            name="title"
            value={form.title}
            onChange={onChange}
            required
            placeholder="Título"
          ></InputTitle>
          <TextArea
            name="body"
            value={form.body}
            onChange={onChange}
            required
            placeholder={"Escreva seu post..."}
          ></TextArea>
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
      </Form>
      <ContainerPosts>
        {posts &&
          posts?.map((data, index) => {
            return (
              <Card
                username={data.username}
                title={data.title}
                bodyText={data.body}
                voteSum={data.voteSum}
                commentCount={data.commentCount}
                key={index}
              />
            );
          })}
      </ContainerPosts>
    </Container>
  );
};
