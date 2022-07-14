import HomePage from "../HomePage/HomePage";
import ListTripPage from "../ListTripPage/ListTripPage";
import ApplicationFormPage from "../ApplicationFormPage/ApplicationFormPage";
import AdminHomePage from "../AdminHomePage/AdminHomePage";
import TripDetailsPage from "../TripDetailsPage/TripDetailsPage";
import { useState } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";

export  const Router = () => {

    const [notLoged, setNotLoged] = useState(true)

    const setNotLogedToReverse = () => {
        setNotLoged(!notLoged)
    }

    return(

        <BrowserRouter>
        <Routes>
            <Route index element={<HomePage notLoged={notLoged} setNotLogedToReverse={setNotLogedToReverse}/>}/>
            <Route path="trips/list" element={<ListTripPage notLoged={notLoged} setNotLogedToReverse={setNotLogedToReverse}/>}/>
            <Route path="trips/application" element={<ApplicationFormPage/>}/>
            <Route path="admin/trips/homepage" element={<AdminHomePage/>}/>
            <Route path="admin/trips/:id" element={<TripDetailsPage/>}/>

        </Routes>
        </BrowserRouter>

    )


}