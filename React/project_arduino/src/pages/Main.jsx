import React from "react";
import { NavAdmin } from "../components/Layouts/NavBar/NavBarAdmin/NavBar";
import "./Main.css"


export const Main = (props) => {

  const isLoggedIn = window.localStorage.getItem("loggedIn");
  const rol = window.localStorage.getItem("rol");
  
  return (
    <>
      { isLoggedIn == "true" ? rol == 1 ? <>
      <div class="jumbotron">
      <h1 class="display-4">¡<span class="animated-text">Bienvenidos</span> a FreeEnergy!</h1>
      <NavAdmin></NavAdmin> </div>
      </> :  <h1>No tienes acceso</h1> :    window.location = "/login"}
    </>
  );
};
