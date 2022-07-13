import HomePage from "../HomePage/HomePage";
import ListTripPage from "../ListTripPage/ListTripPage";
import { BrowserRouter, Routes, Route} from "react-router-dom";

export  const Router = () => {

    return(

        <BrowserRouter>
        <Routes>
            <Route index element={<HomePage/>}/>
            <Route path="listtrippage" element={<ListTripPage/>}/>


        </Routes>
        </BrowserRouter>

    )


}