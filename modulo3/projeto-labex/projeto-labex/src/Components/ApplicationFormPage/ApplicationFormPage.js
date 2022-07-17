import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../Header/Header";
import { listCountries } from "../Countrys/listCountries"
import Footer from "../Footer/Footer";
import { Container, InputStyle, SelectStyle, ApplicationButton, InputStyleApplication, FormStyle, ContainerGeral, TitleStyle, ContainerForm, ContainerTitle } from "./styled";


export default function ApliccationFormPage() {

  const navigate = useNavigate()
  const [form, setForm] = useState({name: "", age: 18, applicationText: "", profession: "", country: "" })
  const [tripIdForm, setTripIdForm] = useState({id:""})
  const [allTripsId, setAllTripsId] = useState()

  const onChangeInput = (event) => {
    const { name, value } = event.target
    setForm({ ...form, [name]: value })
  }
  const onChangeIdForm = (event) => {
    const { name, value } = event.target
    setTripIdForm({...tripIdForm, [name]: value})
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
  
  const applyToTrip = async(event) => {
    event.preventDefault()

    try {
      const response = await axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/joao-gomes-ailton/trips/${tripIdForm.id}/apply`,form)
      setForm({name:"", age: 18, applicationText:"", profession:"", country: ""})
      setTripIdForm({id:""})
      console.log(response)
      window.alert(`Parabéns ${form.name}, em breve você receberá a resposta se foi ou não aprovado.`)
    } catch (error) {

    }
    }

  // const testApp = (event) => {
  //   event.preventDefault()
  //   console.log(form)
  //   console.log(tripIdForm.id)
    

  // }

  return (
    <div >
      <Header />
      <Container>
        <ContainerGeral>
          <ContainerTitle>
            <TitleStyle>Inscreva-se para uma viagem</TitleStyle>
          </ContainerTitle>
          <ContainerForm>
            <FormStyle onSubmit={applyToTrip}>
              <SelectStyle name="id" onChange={onChangeIdForm} value={tripIdForm.id} placeholder="Viagem" required>
                <option selected={undefined} disabled label={'Escolha uma viagem'} />
                {allTripsId?.map((trip) => {
                  return (


                    <option value={trip.id} key={trip.id}>{trip.name}</option>


                  )
                })}
              </SelectStyle>
              <InputStyle name="name" onChange={onChangeInput} value={form.name} placeholder="Nome" required></InputStyle>
              <InputStyle name="age" min={18} onChange={onChangeInput} type="number" placeholder="Idade" value={form.age} required></InputStyle>
              <InputStyleApplication name="applicationText" onChange={onChangeInput} placeholder="Texto de Candidatura" value={form.applicationText} required></InputStyleApplication>
              <InputStyle name="profession" onChange={onChangeInput} placeholder="Profissão" value={form.profession} required></InputStyle>
              
              <SelectStyle name="country" onChange={onChangeInput} placeholder="País de Origem" value={form.country} required>
                <option selected={undefined} disabled label={'País de origem'} />
                {listCountries?.map((country,index) => {
                  return(
                    <option value={country} key={index}>{country}</option>
                  )
                })}
              </SelectStyle>
              
              <ApplicationButton>inscrever-se</ApplicationButton>
            </FormStyle>
          </ContainerForm>
        </ContainerGeral>
      </Container>
      <Footer />
    </div>
  );
}

