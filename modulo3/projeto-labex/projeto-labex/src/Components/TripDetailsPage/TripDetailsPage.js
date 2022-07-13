import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header"; 


export default function TripDetailsPage() {

    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }

    return (
      <div >
        <Header/>
        <p>Admin Trip details page</p>


        <button onClick={goBack}>Voltar</button>
      </div>
    );
  }
  