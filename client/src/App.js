import React from 'react';
import {Route, Routes,Navigate} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Profile from "./Pages/Profile/Profile";
import Register from "./Pages/Register/Register";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";

const App = () => {
    return (
        <>
        <ToastContainer/>
        <Routes>
            <Route path={"/"} element={<Home/>}/>
            <Route path={"/login"} element={<Login/>}/>
            <Route path={"/register"} element={<Register/>}/>
            <Route path={"/profile/:username"} element={<Profile/>}/>

            {/*<Route path="/register" element =*/}
            {/*    {user ? <Navigate replace to= "/" /> : <Register />}/>*/}
        </Routes>

    </>
    );
};

export default App;