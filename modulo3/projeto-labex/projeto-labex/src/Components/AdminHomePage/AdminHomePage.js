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
    const [form, setForm] = useState({name:"", planet:"", date:"", description:"", durationInDays: 1})

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
    },[allTrips])

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

    const onChangeInput = (event) => {
          const {name, value} = event.target
          setForm({...form, [name]:value})
    }

    const createTrip = async(event) => {
      event.preventDefault()
      const token = localStorage.getItem("token")
      try {
        const response = await axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/joao-gomes-ailton/trips",form,
        {
          headers: {
            auth: token
          }
        })
        setForm({name:"", planet:"", date:"", description:"", durationInDays: 1})
        console.log(response)
      } catch (error) {
        
      }
      }
    
    
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
                  <form onSubmit={createTrip}>
                  <input name="name" onChange={onChangeInput} value={form.name} placeholder="Nome" required></input>
                  <input name="planet" onChange={onChangeInput} placeholder="Planeta" value={form.planet} required></input>
                  <input name="date" onChange={onChangeInput} placeholder="Data" value={form.date} required></input>
                  <input name="description" onChange={onChangeInput} placeholder="Descrição" value={form.description} required></input>
                  <input name="durationInDays" onChange={onChangeInput} placeholder="Duração em dias" value={form.durationInDays} required></input>
                  <button>Criar</button>
                  </form>
                </ContainerForm>

              </ContainerRight>
          </ContainerBottom>
        </Container>
        
        <Footer/>
      </div>
    );
  }
  
  