import React, { Component } from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Container } from "./styled"
import { CardGeral } from './styled';
import { CardHeader } from './styled';
import { CardPerfil } from './styled';
import { ImgPerfil } from './styled';
import axios from 'axios';

export default function FirstScreen(props) {
    
  const [profile, setProfile] = useState({})

  const getProfileToChoose = () => {
    axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person"
    ).then((response) => {
      setProfile(response.data.profile)
    })
  }

  useEffect(() => {
    getProfileToChoose()
  },[])
  
  
  return (
    
      <Container>
        
        <CardGeral>

          <CardHeader>
            astromatch
            <button onClick={props.goToMatchScreen}>Tela de Match</button>
          </CardHeader>

          <CardPerfil>
          <ImgPerfil src={profile.photo}/>
          <p>{profile.name}</p>
          <p>{profile.age}</p>
          <p>{profile.bio}</p>
          </CardPerfil>

        </CardGeral>
        
      </Container>
    );
  }
  
  

  