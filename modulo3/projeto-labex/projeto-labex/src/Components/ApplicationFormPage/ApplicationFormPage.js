import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header"; 


export default function ApliccationFormPage() {

    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }

    return (
      <div >
        <Header/>
        <p>Apliccation form page</p>


        <button onClick={goBack}>Voltar</button>
      </div>
    );
  }
  
  