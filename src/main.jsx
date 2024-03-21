import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
// import Home from "./Components/LoginPage/LogIn";
// import Calculator from "./Components/BMI-Calculator/Calculator";
// import AdviceApp from "./Components/AdviceApp/AdviceApp";
// import RegFrm from "./Components/RegForm/RegFrm";
// import UserDetails from "./UseState/UseState";
// import QRgenerator from "./Components/QR-Code/QRgenerator.jsx";
// import WeatherApp from "./Components/WeatherApp/weatherApp.jsx";

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import RegisterPage from "./Components/LoginWithAuth/pages/RegisterPage";
// import LoginPage from "./Components/LoginWithAuth/pages/LoginPage";
// import DashboardPage from "./Components/LoginWithAuth/pages/Dashboard";
// import Router1 from "./ReactRouter/router1";

// import Reducer from "./UseReducer/Reducer";

// import DropDownProfile from "./Components/Dropdown/DropDownProfile";
// import Avatar from "./Components/Dropdown/DropDownProfile";

// import PrintingPrescription from "./Components/PrintingPrescription/PrintingPrescription";
// import Symptoms from "./Components/symptoms/symptoms";

// import Redux1 from "./LearnRedux/practice1/redux1";
import { store } from "./LearnRedux/practice1/store";
import { Provider } from "react-redux";
import Redux from "./LearnRedux/Redux";

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

    {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter> */}
    {/* <RegisterPage /> */}

    {/* <BrowserRouter>
      <Router1 />
    </BrowserRouter> */}

    {/* <Reducer /> */}
    {/* <Avatar /> */}

    {/* <PrintingPrescription /> */}

    {/* <Symptoms />*/}

    <Provider store={store}>
      {/* <Redux1 /> */}
      <Redux />
    </Provider>
  </React.StrictMode>
);
