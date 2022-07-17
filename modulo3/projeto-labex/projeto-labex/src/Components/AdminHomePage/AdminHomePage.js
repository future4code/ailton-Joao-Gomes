import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Container, TripNameContainer, DeleteStyle, TitleContainers, Title, Trip, ContainerTrips, ContainerForm, ContainerRight, ContainerLeft, ContainerTitle, ContainerTop, ContainerBottom } from "./styled";
import DeleteIcon from "../img/labexdelete.png";

export default function AdminHomePage() {

  const [allTrips, setAllTrips] = useState()
  const [form, setForm] = useState({ name: "", planet: "", date: "", description: "", durationInDays: 1 })
  const [count, setCount] = useState()

  const navigate = useNavigate()

  const goTo = (page) => {
    navigate(`${page}`)
  }

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (!token) {

      goTo("/")

    } else {
      getTrips()
    }
  }, [count])

  const getTrips = async () => {
    try {
      const response = await axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/joao-gomes-ailton/trips")
      setAllTrips(response.data.trips)
    } catch (error) {

    }
  }

  const deleteTrip = async (id) => {
    const token = localStorage.getItem("token")
    try {
      const response = await axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/joao-gomes-ailton/trips/${id}`,
        {
          headers: {
            auth: token
          }
        })
        setCount(count+1)
    } catch (error) {

    }
  }

  const onChangeInput = (event) => {
    const { name, value } = event.target
    setForm({ ...form, [name]: value })
  }

  const createTrip = async (event) => {
    event.preventDefault()
    const token = localStorage.getItem("token")
    try {
      const response = await axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/joao-gomes-ailton/trips", form,
        {
          headers: {
            auth: token
          }
        })
      setForm({ name: "", planet: "", date: "", description: "", durationInDays: 1 })
      setCount(count+1)
    } catch (error) {

    }
  }


  return (
    <div>
      <Header />

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
                return (

                  <Trip key={index} onClick={() => goTo(`/admin/trips/${trip.id}`)} >
                    <TripNameContainer>{trip.name}</TripNameContainer>
                    <DeleteStyle onClick={() => deleteTrip(trip.id)} src={DeleteIcon} />
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
                <input pattern="^.{3,}" title="O nome deve ter no mínimo 3 caracteres" name="name" onChange={onChangeInput} value={form.name} placeholder="Nome" required></input>
                <input name="planet" onChange={onChangeInput} placeholder="Planeta" value={form.planet} required></input>
                <input name="date" min={new Date().toISOString().slice(0,10)} type={`date`} onChange={onChangeInput} placeholder="Data" value={form.date} required></input>
                <input pattern="^.{10,}" title="A descrição deve ter no mínimo 10 caracteres" name="description" onChange={onChangeInput} placeholder="Descrição" value={form.description} required></input>
                <input name="durationInDays" min={1} type={`number`} onChange={onChangeInput} placeholder="Duração em dias" value={form.durationInDays} required></input>
                <button>Criar</button> 
              </form>
            </ContainerForm>

          </ContainerRight>
        </ContainerBottom>
      </Container>

      <Footer />
    </div>
  );
}

