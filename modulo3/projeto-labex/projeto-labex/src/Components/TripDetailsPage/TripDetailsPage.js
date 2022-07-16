import React from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../Header/Header"; 
import Footer from "../Footer/Footer";
import { Container, ContainerTitle, ContainerDetail, ContainerBottom, ContainerTop } from "./styled";


export default function TripDetailsPage(props) {

    const navigate = useNavigate()
    const params = useParams()
    // console.log(params)
    const [tripDetail, setTripDetail] = useState()

    const goTo = (page) => {
      navigate(`${page}`)
  }

    useEffect(() => {
      const token = localStorage.getItem("token")
      if (token === ""){
        console.log("nao esta logado")
        goTo("/")
      }else {
        getTripDetail()
      }
    },[])

    const getTripDetail = async() => {
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
    console.log(tripDetail)

    return (
      <div >
        <Header notLoged={props.notLoged} setNotLogedToReverse={props.setNotLogedToReverse}/>
        
        <Container>
          
          <ContainerTop>
            <ContainerTitle>{tripDetail?.name}</ContainerTitle>
          </ContainerTop>
          
          <ContainerBottom>
            
            <ContainerDetail>
              {tripDetail.description}
              {tripDetail.planet}
              {tripDetail.durationInDays}
              {tripDetail.date}
            </ContainerDetail>

          </ContainerBottom>
        </Container>
        
        <Footer/>
      </div>
    );
  }
  