import HomePage from "../HomePage/HomePage";
import ListTripPage from "../ListTripPage/ListTripPage";
import ApplicationFormPage from "../ApplicationFormPage/ApplicationFormPage";
import AdminHomePage from "../AdminHomePage/AdminHomePage";
import TripDetailsPage from "../TripDetailsPage/TripDetailsPage";
import { BrowserRouter, Routes, Route} from "react-router-dom";

export  const Router = () => {

    return(

        <BrowserRouter>
        <Routes>
            <Route index element={<HomePage/>}/>
            <Route path="trips/list" element={<ListTripPage/>}/>
            <Route path="trips/application" element={<ApplicationFormPage/>}/>
            <Route path="admin/trips/homepage" element={<AdminHomePage/>}/>
            <Route path="admin/trips/:id" element={<TripDetailsPage/>}/>

        </Routes>
        </BrowserRouter>

    )


}