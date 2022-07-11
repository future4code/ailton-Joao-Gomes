import React, { Component } from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Container } from "./styled"
import { CardGeral } from './styled';
import { CardHeader } from './styled';
import { CardPerfil } from './styled';
import { CardChoice } from './styled';
import { PStyled } from './styled';
import { CardLoading } from './styled';
import Loading from '../img/loading.gif'
import axios from 'axios';

export default function FirstScreen(props) {
    
  const [profile, setProfile] = useState({})
  const [loading, setLoading] = useState(true)

  const getProfileToChoose = async() => {
    try {
      
      setLoading(true)
      const response = await axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/joaozang/person")
      setProfile(response.data.profile)
      setLoading(false)

    } catch (error) {
      console.log(error)
  }
  }
  useEffect(() => {
    setProfile({})
    getProfileToChoose()

  },[])
  

  const liked = async(choice) => {
    try {
      const body = {
        id: profile.id,
        choice: choice
      }
      const response = await axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/joaozang/choose-person", body)
      getProfileToChoose()
      console.log(choice)
    } catch (error) {
      
    }
     
  }
  
  const clearSwipes = async() => {
    try {
       
      getProfileToChoose()
       await axios.put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/joaozang/clear")
       
  
    } catch (error) {
      
    }
  }

  return (
    
      <Container>
        
        <CardGeral>

            <CardHeader>
              astromatch
              <button onClick={props.goToMatchScreen}>Tela de Match</button>
            </CardHeader>
            {loading || profile && 
            <CardPerfil photo={profile.photo}>
            <PStyled>
            <h1>{profile.name}</h1>
            <h2>{profile.age}</h2>
            <h3>{profile.bio}</h3>
            </PStyled>
            </CardPerfil>
            }
            {loading &&
            <CardLoading>
              <img src={Loading}></img>
            </CardLoading>
            
            }
            <CardChoice>
              <button onClick={()=>liked(true)}>like</button>
              <button onClick={()=>liked(false)}>dislike</button>
            </CardChoice>

        </CardGeral>
        <button onClick={clearSwipes}>Clear tudo</button>
      </Container>
    );
  }
  
  

  