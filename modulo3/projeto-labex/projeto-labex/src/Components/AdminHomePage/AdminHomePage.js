import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header"; 


export default function AdminHomePage() {

    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }

    return (
      <div >
        <Header/>
        <p>Admin Home Page</p>


        <button onClick={goBack}>Voltar</button>
      </div>
    );
  }
  
  