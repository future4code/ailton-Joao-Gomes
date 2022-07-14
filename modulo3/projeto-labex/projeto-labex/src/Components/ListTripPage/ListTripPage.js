import React from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { ContainerTripUnitCenter, ContainerTripUnitLeft, ContainerTripUnitRight, Container, ContainerTop, ContainerBottom, Title, TitleStyleP, ContainerTrips, ContainerTripUnit } from "./styled";
import { useState, useEffect } from "react";


export default function ListTripPage (props) {

    const [allTrips, setAllTrips] = useState()

    useEffect(() => {
      getTrips()
    }, []) 

    const getTrips = async() => {
      try{
        const response = await axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/joao-gomes-ailton/trips")
        setAllTrips(response.data.trips)
      } catch(error){

      }
    }


    const navigate = useNavigate()

    
   console.log(allTrips)

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
                    {allTrips?.map((trip,index) => {
                      return(
                        
                        <ContainerTripUnit key={index}>
                          
                          <ContainerTripUnitLeft>
                            <p>{trip.name}</p>
                            <p>Onde: {trip.planet}</p>

                          </ContainerTripUnitLeft>
                          <ContainerTripUnitCenter>
                            <p>{trip.description}</p>

                          </ContainerTripUnitCenter>
                          <ContainerTripUnitRight>
                            <p>Data: {trip.date}</p>
                            <p>Dias: {trip.durationInDays}</p>

                          </ContainerTripUnitRight>

                        </ContainerTripUnit>
                        
                      )
                    })}
                </ContainerTrips>
            </ContainerBottom>

        </Container>
        <Footer/>
      </div>
    );
  }