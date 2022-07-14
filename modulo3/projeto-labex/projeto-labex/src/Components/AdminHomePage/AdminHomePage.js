import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useHistory } from "react";
import Header from "../Header/Header"; 


export default function AdminHomePage(props) {

    // const history = useHistory()

    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }

    useEffect(() => {
      const token = localStorage.getItem("token")
      if (token === ""){
        console.log("nao esta loagado")
        // history.push('trips/list')
      }else {
        console.log("esta logado")
      }
    },[])

    return (
      <div >
        <Header notLoged={props.notLoged} setNotLogedToReverse={props.setNotLogedToReverse}/>
        <p>Admin Home Page</p>


        <button onClick={goBack}>Voltar</button>
      </div>
    );
  }
  
  