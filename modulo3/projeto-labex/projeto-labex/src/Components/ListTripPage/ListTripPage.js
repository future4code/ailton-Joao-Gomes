import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Container } from "./styled";


export default function ListTripPage () {

    const navigate = useNavigate()

    
   

    return (
      <div>
        <Header/>
        <Container>
          
        </Container>
        <Footer/>
      </div>
    );
  }