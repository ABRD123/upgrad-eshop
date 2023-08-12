import { Route, Routes } from "react-router-dom";
import Products from "../Products/Products";
import SignUp from "../SignUp/SignUp";
import Navbar from "../Navbar/Navbar";
import Login from "../Login/Login";


const AppRoutes = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Products />}> </Route>
                <Route path='/login' element={ <Login /> }></Route>
                <Route path='/signup' element={ <SignUp /> }></Route>
            </Routes>
        </>
    );
};

export default AppRoutes;
