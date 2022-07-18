import React from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import LoupeIcon from '../img/labexloupe.png';
import ApproveIcon from '../img/labexapprove.png';
import DeleteIcon from '../img/labexdelete2.png';
import { Container, Pstyled, ContainerFinal, Title, Title2, PTitleStyle, CloseStyle, ButtonClose, PstyledText, AllInformation, Information, InformationText2, InformationText1, LoupeStyle, CandidatePopUp, CandidateNameContainer, Candidate, ContainerDetailStyle, TitleStyle, TitleStyle1, ContainerApprovedCandidates, ContainerPendingCandidates, ContainerTitle, ContainerCandidates, ContainerDetailGeral, ContainerDetail, ContainerBottom, ContainerTop } from "./styled";


export default function TripDetailsPage() {

  const navigate = useNavigate()
  const params = useParams()

  const [tripDetail, setTripDetail] = useState()
  const [pendingCandidates, setPendingCandidates] = useState()
  const [popUpOpen, setPopUpOpen] = useState(false)
  const [clickedCandidateDetail, setClickedCandidateDetail] = useState()
  const [count, setCount] = useState()

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
  }, [count])

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
      setPendingCandidates(response.data.trip.candidates)
    } catch (error) {

    }
  }

  const openPopUpCandidate = (candidates) => {
    setPopUpOpen(!popUpOpen)
    setClickedCandidateDetail(candidates)
    
  }

  

  const decideCandidate = async (candidates,approv) => {
    const token = localStorage.getItem("token")
    const body = {
      approve: approv
    }
    try {
      const response = await axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/joao-gomes-ailton/trips/${params.id}/candidates/${candidates.id}/decide`, body,
    {
      headers: {
        auth: token
      }
    })
    if (approv) {
      window.alert("Candidato Aprovado.")
      getTripDetail()
    } else{
      window.alert("Candidato Recusado.")
      getTripDetail()
    }
    setCount(count+1)
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
              <Title2><PTitleStyle>Candidatos Pendentes</PTitleStyle></Title2>
              <ContainerFinal>
                {pendingCandidates?.map((candidates, index) => {
                  return(
                    <Candidate key={index}>
                      <CandidateNameContainer>{candidates.name}</CandidateNameContainer>
                      <LoupeStyle onClick={()=> openPopUpCandidate(candidates)} src={LoupeIcon} />
                      <LoupeStyle onClick={()=> decideCandidate(candidates,true)} src={ApproveIcon} />
                      <LoupeStyle onClick={()=> decideCandidate(candidates,false)} src={DeleteIcon} />
                    </Candidate>
                  )
                })}
                </ContainerFinal>
              </ContainerPendingCandidates>
              <ContainerApprovedCandidates>
                <Title2><PTitleStyle>Candidatos Aprovados</PTitleStyle></Title2>
                <ContainerFinal>
              <ul>{tripDetail && tripDetail.approved?.map((candidates, index) => {
                    return(
                      
                        <li>{candidates.name}</li>
                      
                    )
                  })}
                  </ul>
                  </ContainerFinal>
              </ContainerApprovedCandidates>
              
            </ContainerCandidates>

          </ContainerDetailGeral>


        </ContainerBottom>

          {popUpOpen && 
            <CandidatePopUp>
              <ButtonClose><CloseStyle onClick={openPopUpCandidate} src={DeleteIcon} /></ButtonClose>
              <Title>Detalhes</Title>
              <AllInformation>
                <Information><Pstyled>Nome:</Pstyled>{clickedCandidateDetail.name}</Information>
                <Information><Pstyled>País:</Pstyled>{clickedCandidateDetail.country}</Information>
                <Information><Pstyled>Idade:</Pstyled>{clickedCandidateDetail.age}</Information>
                <Information><Pstyled>Profissão:</Pstyled>{clickedCandidateDetail.profession}</Information>
                <InformationText1><PstyledText>Texto:</PstyledText><InformationText2>{clickedCandidateDetail.applicationText}</InformationText2></InformationText1>
              </AllInformation>
            </CandidatePopUp>
          } 

      </Container>

      <Footer />
    </div>
  );
}
