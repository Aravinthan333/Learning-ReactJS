import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import RegisterPage from "./Components/LoginWithAuth/pages/RegisterPage";
// import Home from "./Components/LoginPage/LogIn";
// import Calculator from "./Components/BMI-Calculator/Calculator";
// import AdviceApp from "./Components/AdviceApp/AdviceApp";
// import RegFrm from "./Components/RegForm/RegFrm";
// import UserDetails from "./UseState/UseState";
// import QRgenerator from "./Components/QR-Code/QRgenerator.jsx";
// import WeatherApp from "./Components/WeatherApp/weatherApp.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Components/LoginWithAuth/pages/LoginPage";
import DashboardPage from "./Components/LoginWithAuth/pages/Dashboard";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Text/> */}
    {/* <QRgenerator /> */}
    {/* <UserDetails /> */}
    {/* <RegFrm /> */}
    {/* <AdviceApp /> */}
    {/* <WeatherApp /> */}
    {/* <Calculator /> */}
    {/* <Home /> */}

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
    {/* <RegisterPage /> */}
  </React.StrictMode>
);
