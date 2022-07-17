import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Container, ContainerGeral, TitleStyle, ContainerForm, ContainerTitle } from "./styled";


export default function ApliccationFormPage() {

  const navigate = useNavigate()
  const [form, setForm] = useState({ id: "", name: "", age: 18, applicationText: "", profession: "", country: "" })
  const [allTripsId, setAllTripsId] = useState()

  const onChangeInput = (event) => {
    const { name, value } = event.target
    setForm({ ...form, [name]: value })
  }

  useEffect(() => {
    getTripsId()
  }, [])

  const getTripsId = async () => {
    try {
      const response = await axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/joao-gomes-ailton/trips")
      setAllTripsId(response.data.trips)
    } catch (error) {

    }
  }
  // const createApplication = async(event) => {
  //   event.preventDefault()

  //   try {
  //     const response = await axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/joao-gomes-ailton/trips",form)
  //     setForm({name:"", age: 18, applicationText:"", profession:"", country: ""})
  //     console.log(response)
  //   } catch (error) {

  //   }
  //   }
  const testApp = (event) => {
    event.preventDefault()


  }

  return (
    <div >
      <Header />
      <Container>
        <ContainerGeral>
          <ContainerTitle>
            <TitleStyle>Inscreva-se para uma viagem</TitleStyle>
          </ContainerTitle>
          <ContainerForm>
            <form onSubmit={testApp}>
              <select name="id" onChange={onChangeInput} value={form.id} placeholder="Viagem" required>
                <option selected={undefined} disabled label={'escolha uma viagem'} />
                {allTripsId?.map((trip) => {
                  return (


                    <option value={trip.id} key={trip.id}>{trip.name}</option>


                  )
                })}
              </select>
              <input name="name" onChange={onChangeInput} value={form.name} placeholder="Nome" required></input>
              <input name="age" onChange={onChangeInput} type="number" placeholder="Idade" value={form.age} required></input>
              <input name="applicationText" onChange={onChangeInput} placeholder="Texto de Candidatura" value={form.applicationText} required></input>
              <input name="profession" onChange={onChangeInput} placeholder="Profissão" value={form.profession} required></input>
              <input name="country" onChange={onChangeInput} placeholder="País de Origem" value={form.country} required></input>
              <button>inscrever-se</button>
            </form>
          </ContainerForm>
        </ContainerGeral>
      </Container>
      <Footer />
    </div>
  );
}

