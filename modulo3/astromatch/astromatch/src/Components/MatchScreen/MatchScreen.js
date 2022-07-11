import React, { Component } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { CardGeral } from './styled';
import { Container } from './styled';
import { CardHeader } from './styled';
import { CardPerfil } from './styled';
import { ImgMatch } from './styled';


export default function MatchScreen(props) {
    
  const [matchPerfils, setMatchPerfils] = useState([])

  const getMatches = async() => {
    try {
      const response = await axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/joaozang/matches")
      setMatchPerfils(response.data.matches)
    } catch (error) {
      
    }
    
  }

  useEffect(() => {
    getMatches()
  },[matchPerfils])

  const clearSwipes = async() => {
    try {
      
       await axios.put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/joaozang/clear")
       console.log("foi poura")
  
    } catch (error) {
      
    }
  }
  console.log(matchPerfils)
  return (
      <Container>
        <CardGeral>
          <CardHeader>
        Tela de Match
        <button onClick={props.goToFirstScreen}>tela de inicio</button>
        </CardHeader>
        {matchPerfils.map((perfils) => {
          return (
            <div>
              <p>{perfils.name}</p>
              <ImgMatch src={perfils.photo}></ImgMatch>
            </div>
          )
        })}
        </CardGeral>
        <button onClick={clearSwipes}>Clear tudo</button>
      </Container>
    );
  }
  