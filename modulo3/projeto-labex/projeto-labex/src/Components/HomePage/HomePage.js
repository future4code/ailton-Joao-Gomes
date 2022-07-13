import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header"; 


export default function HomePage() {

  const navigate = useNavigate()

  const goToListPage = () => {
    navigate("/listtrippage")
  }

    return (
      <div >
        <Header/>
        <p>homepage</p>


        <button onClick={goToListPage}>List Page</button>
      </div>
    );
  }
  
  
  