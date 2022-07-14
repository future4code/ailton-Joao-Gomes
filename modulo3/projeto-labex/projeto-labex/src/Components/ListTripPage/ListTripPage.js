import React from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Container, ContainerTop, ContainerBottom, Title, TitleStyleP, ContainerTrips } from "./styled";
import { useState, useEffect } from "react";


export default function ListTripPage (props) {

    const [trips, setTrips] = useState()

    useEffect(() => {
      getTrips()
    }, []) 

    const getTrips = async() => {
      try{
        const response = await axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/joao-gomes-ailton/trips")
        console.log(response.data.trips)
      } catch(error){

      }
    }


    const navigate = useNavigate()

    
   

    return (
      <div>
        <Header notLoged={props.notLoged} setNotLogedToReverse={props.setNotLogedToReverse}/>
        <Container>

            <ContainerTop>
                <Title>
                    <TitleStyleP>Viagens Disponíveis</TitleStyleP>
                </Title>
            </ContainerTop>
                
            <ContainerBottom>
                <ContainerTrips>

                </ContainerTrips>
            </ContainerBottom>

        </Container>
        <Footer/>
      </div>
    );
  }