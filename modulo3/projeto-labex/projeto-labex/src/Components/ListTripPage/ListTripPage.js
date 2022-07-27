import React from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Loading from "../Loading/Loading";
import { ContainerTripUnitCenter, ContainerRegisterButton, RegisterButton, ContainerTripUnitLeft, ContainerTripUnitRight, Container, ContainerTop, ContainerBottom, Title, TitleStyleP, ContainerTrips, ContainerTripUnit } from "./styled";
import { useState, useEffect } from "react";


export default function ListTripPage() {

  const [allTrips, setAllTrips] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    getTrips()
    setLoading(false)
  }, [])

  const getTrips = async () => {
    try {
      const response = await axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/joao-gomes-ailton/trips")
      setAllTrips(response.data.trips)
    } catch (error) {

    }
  }


  const navigate = useNavigate()

  const goTo = (page) => {
    navigate(`${page}`)
  }



  return (
    <div>
      <Header />
      <Container>

        <ContainerTop>
          <Title>
            <TitleStyleP>Viagens Disponíveis</TitleStyleP>
          </Title>
        </ContainerTop>

        <ContainerBottom>
          <ContainerRegisterButton>
            <RegisterButton onClick={() => goTo("/trips/application")}>Inscrever-se</RegisterButton>
          </ContainerRegisterButton>
          <ContainerTrips>
            {loading && <Loading/>}
            { loading || allTrips?.map((trip, index) => {
              return (

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
      <Footer />
    </div>
  );
}