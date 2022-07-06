import React, { Component } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';


export default function MatchScreen(props) {
    
  const [matchPerfils, setMatchPerfils] = useState([])

  const getMatches = () => {
    axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/joaozang/matches")
    .then((response) =>{
      setMatchPerfils(response)
    })
  }

  useEffect(() => {
    getMatches()
  },[])

  // const showMatches = matchPerfils.map((perfils) => {
  //   return (
  //     <p>{perfils}</p>
  //   )
  // })
  console.log(matchPerfils)
  return (
      <div>
        Tela de Match
        <button onClick={props.goToFirstScreen}>tela de inicio</button>
      </div>
    );
  }
  