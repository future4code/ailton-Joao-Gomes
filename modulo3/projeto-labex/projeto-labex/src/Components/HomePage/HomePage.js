import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header"; 
import Footer from "../Footer/Footer";
import { WelcomeText, Card, Container, MoonStyle, ContainerCard, ContainerMoon } from "./styled";
import MoonGif from '../img/moongif.gif';


export default function HomePage() {

  const navigate = useNavigate()

  const goTo= (page) => {
    navigate(`${page}`)
}

    return (
      <div>
        <Header/>
        {/* <button onClick={()=>goTo("trips/list")}>List Page</button>
        <button onClick={()=>goTo("trips/application")}>Application form page</button>
        <button onClick={()=>goTo("admin/trips/homepage")}>Admin Home page</button>
        <button onClick={()=>goTo("admin/trips/:id")}>Admin Trip Detatils page</button> */}

        <Container>
          
          <ContainerCard>
            <Card>
              <WelcomeText>Seja bem vindo! </WelcomeText>
            </Card>
          </ContainerCard>

          <ContainerMoon>
            <MoonStyle src={MoonGif}/>
          </ContainerMoon>
        </Container>
        
        <Footer/>
      </div>
    );
  }
  
  
  