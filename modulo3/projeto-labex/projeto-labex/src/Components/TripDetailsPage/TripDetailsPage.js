import React from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Container, ContainerDetailStyle, TitleStyle, TitleStyle1, ContainerApprovedCandidates, ContainerPendingCandidates, ContainerTitle, ContainerCandidates, ContainerDetailGeral, ContainerDetail, ContainerBottom, ContainerTop } from "./styled";


export default function TripDetailsPage() {

  const navigate = useNavigate()
  const params = useParams()

  const [tripDetail, setTripDetail] = useState()

  const goTo = (page) => {
    navigate(`${page}`)
  }

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (!token) {

      goTo("/")
    } else {
      getTripDetail()
    }
  }, [])

  const getTripDetail = async () => {
    const token = localStorage.getItem("token")
    try {
      const response = await axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/joao-gomes-ailton/trip/${params.id}`,
        {
          headers: {
            auth: token
          }
        })
      setTripDetail(response.data.trip)
    } catch (error) {

    }
  }


  return (
    <div >
      <Header />

      <Container>

        <ContainerTop>
          <ContainerTitle><TitleStyle1>{tripDetail?.name}</TitleStyle1></ContainerTitle>
        </ContainerTop>

        <ContainerBottom>

          <ContainerDetailGeral>

            <ContainerDetail>
              <ContainerDetailStyle><TitleStyle>Descrição:</TitleStyle><p>{tripDetail?.description}</p></ContainerDetailStyle>
              <ContainerDetailStyle><TitleStyle>Planeta:</TitleStyle><p>{tripDetail?.planet}</p></ContainerDetailStyle>
              <ContainerDetailStyle><TitleStyle>Duração em Dias:</TitleStyle><p>{tripDetail?.durationInDays}</p></ContainerDetailStyle>
              <ContainerDetailStyle><TitleStyle>Data:</TitleStyle><p>{tripDetail?.date}</p></ContainerDetailStyle>
            </ContainerDetail>

            <ContainerCandidates>
              <ContainerPendingCandidates>

              </ContainerPendingCandidates>
              <ContainerApprovedCandidates>

              </ContainerApprovedCandidates>
            </ContainerCandidates>

          </ContainerDetailGeral>


        </ContainerBottom>
      </Container>

      <Footer />
    </div>
  );
}
