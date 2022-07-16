import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Container, TripNameContainer, DeleteStyle, TitleContainers, Title, Trip, ContainerTrips, ContainerForm, ContainerRight, ContainerLeft, ContainerTitle, ContainerTop, ContainerBottom } from "./styled";
import DeleteIcon from "../img/labexdelete.png";

export default function AdminHomePage(props) {

    const [allTrips, setAllTrips] = useState()
    const [name, setName] = useState()
    const [planet, setPlanet] = useState()
    const [date, setDate] = useState()
    const [description, setDescription] = useState()
    const [duration, setDuration] = useState()

    const navigate = useNavigate()

    const goTo = (page) => {
      navigate(`${page}`)
  }

    useEffect(() => {
      const token = localStorage.getItem("token")
      if (token === ""){
        console.log("nao esta logado")
        goTo("/")
      }else {
        getTrips()
      }
    },[])

    const getTrips = async() => {
      try{
        const response = await axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/joao-gomes-ailton/trips")
        setAllTrips(response.data.trips)
      } catch(error){

      }
    }

    const deleteTrip = async(id) => {
      const token = localStorage.getItem("token")
      try {
        const response = await axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/joao-gomes-ailton/trips/${id}`,
        {
          headers: {
            auth: token
          }
        })
      } catch (error) {
        
      }
    }

    const onChangeInput = (e, setInput) => {
        setInput(e.target.value)
    }

    console.log(name)
    return (
      <div>
        <Header notLoged={props.notLoged} setNotLogedToReverse={props.setNotLogedToReverse}/>
        
        <Container>
          <ContainerTop>
            <ContainerTitle>
              <Title>Bem-vindo a sua conta</Title>
              </ContainerTitle>
            </ContainerTop>
          
          <ContainerBottom>
              <ContainerLeft>
                
                <TitleContainers>
                  <Title>Viagens</Title>
                </TitleContainers>
                
                <ContainerTrips>
                  {allTrips?.map((trip, index) => {
                      return(
                        
                        <Trip key={index} onClick={()=> goTo(`/admin/trips/${trip.id}`)} >
                          <TripNameContainer>{trip.name}</TripNameContainer>
                          <DeleteStyle onClick={()=> deleteTrip(trip.id)} src={DeleteIcon}/>
                        </Trip>
                        
                      )
                    })}
                </ContainerTrips>
              
              </ContainerLeft>
              <ContainerRight>
                
                <TitleContainers>
                  <Title>Crie uma Viagem</Title>
                </TitleContainers>
                
                <ContainerForm>
                  <input onChange={()=> onChangeInput(setName)} value={name} placeholder="Nome"></input>
                  <input placeholder="Planeta"></input>
                  <input placeholder="Data"></input>
                  <input placeholder="Descrição"></input>
                  <input placeholder="Duração em dias"></input>
                </ContainerForm>

              </ContainerRight>
          </ContainerBottom>
        </Container>
        
        <Footer/>
      </div>
    );
  }
  
  