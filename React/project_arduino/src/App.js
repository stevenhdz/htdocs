import React from "react";

import { TitleContext } from "./provider/titleContext";
import { I18nextProvider } from "react-i18next";
import i18n from "./provider/langContext"; 

import "./App.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Nav } from "./components/Layouts/NavBar/NavBarGeneral/NavBar";
import { Footer } from "./components/Layouts/Footer/Footer";

import { MainAgent } from "./pages/MainAgent";
import { Main } from "./pages/Main";

import Login from "./components/Auth/Login/Login";
import Register from "./components/Auth/Register/Register";
import Reset from "./components/Auth/Reset/Reset";

import { RolForm } from "./components/Form/RolForm";
import { TypeDocForm } from "./components/Form/TypeDocForm";
import { StatusForm } from "./components/Form/StatusForm";
import { CredrentialsForm } from "./components/Form/CredentialForm";
import { UserForm } from "./components/Form/UserForm";
import { DepartmentsForm } from "./components/Form/DepartmentForm";
import { MunicipalityForm } from "./components/Form/MunicipalityForm";
import { HardwareForm } from "./components/Form/HardwareForm";
import { PlaceForm } from "./components/Form/PlaceForm";
import { ReportForm } from "./components/Form/ReportForm";
import { HardwarePlaceForm } from "./components/Form/HardwarePlaceForm";
import BackupReports from "./components/Form/ReportsBackupsForm";

function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  const rol = window.localStorage.getItem("rol");
  return (
    <div className="App">
       <I18nextProvider i18n={i18n}>
      <TitleContext.Provider value={"Esto es una prueba de contexto"}>
        <Router>
          <Nav />
          <div id="main-container">
            <Routes>
              <Route
                exact
                path="/"
                element={
                  isLoggedIn == "true" && rol == 2 ? <MainAgent /> : <Login />
                }
              />
              <Route
                exact
                path="/"
                element={
                  isLoggedIn == "true" && rol == 1 ? <Main /> : <Login />
                }
              />
              <Route exact path="/" element={<Login></Login>} />
              <Route exact path="/reset" element={<Reset></Reset>} />
              <Route exact path="/login" element={<Login></Login>} />
              <Route exact path="/register" element={<Register></Register>} />
              <Route exact path="/Main" element={<Main></Main>} />
              <Route
                exact
                path="/MainAgent"
                element={<MainAgent></MainAgent>}
              />
              <Route exact path="/create/rols" element={<RolForm></RolForm>} />
              <Route
                exact
                path="/create/types"
                element={<TypeDocForm></TypeDocForm>}
              />
              <Route
                exact
                path="/create/status"
                element={<StatusForm></StatusForm>}
              />
              <Route
                exact
                path="/create/credentials"
                element={<CredrentialsForm></CredrentialsForm>}
              />
              <Route
                exact
                path="/create/users"
                element={<UserForm></UserForm>}
              />
              <Route
                exact
                path="/create/departments"
                element={<DepartmentsForm></DepartmentsForm>}
              />
              <Route
                exact
                path="/create/municipality"
                element={<MunicipalityForm></MunicipalityForm>}
              />
              <Route
                exact
                path="/create/hardware"
                element={<HardwareForm></HardwareForm>}
              />
              <Route
                exact
                path="/create/places"
                element={<PlaceForm></PlaceForm>}
              />
              <Route
                exact
                path="/create/report"
                element={<ReportForm></ReportForm>}
              />
              <Route
                exact
                path="/create/hardwareplace"
                element={<HardwarePlaceForm></HardwarePlaceForm>}
              />
               <Route
                exact
                path="/backup/reports"
                element={<BackupReports></BackupReports>}
              />
            </Routes>
          </div>
          <Footer />
        </Router>
      </TitleContext.Provider>
      </I18nextProvider>
    </div>
  );
}

export default App;
