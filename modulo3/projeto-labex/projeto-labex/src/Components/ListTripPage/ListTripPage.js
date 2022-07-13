import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";


export default function ListTripPage () {

    const navigate = useNavigate()

    const goTo= (page) => {
        navigate(`${page}`)
    }
    const goBack = () => {
        navigate(-1)
    }
    
   

    return (
      <div >
        <Header/>
        <p>List trip page</p>
        <button onClick={()=>goTo("/")}>ir para homepage</button>
        <button onClick={goBack}>Voltar</button>
      </div>
    );
  }