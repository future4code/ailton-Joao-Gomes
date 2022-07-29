import { useEffect, React } from "react";
import { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router";
import { GoTo } from "../../functions/GoTo";
import { Header } from "../../components/Header/Header";
import { Container } from "./styled";
import back from '../../assets/x2.png';
import { useParams } from "react-router-dom";

export const PostPage = (props) => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState();
  const params = useParams()
  console.log(params.id)
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      GoTo(navigate, "/");
    }else{
      getPosts()
    }
  }, []);

  const getPosts = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get("https://labeddit-2.herokuapp.com/posts", {
        headers: {
          Authorization: token,
        },
      });
      setPosts(response.data);
      console.log(response)
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(posts)
  return (
  <Container>
    <Header src={back}/>
    <p>{props.title}</p>

  </Container>
  )
};
