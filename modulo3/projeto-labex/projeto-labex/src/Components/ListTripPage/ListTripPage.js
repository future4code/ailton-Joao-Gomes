import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Container } from "./styled";


export default function ListTripPage (props) {

    const navigate = useNavigate()

    
   

    return (
      <div>
        <Header notLoged={props.notLoged} setNotLogedToReverse={props.setNotLogedToReverse}/>
        <Container>
          
        </Container>
        <Footer/>
      </div>
    );
  }