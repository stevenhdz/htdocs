import React, { useState } from "react";
import { Link } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  const rol = window.localStorage.getItem("rol");
  const nameLogin = window.localStorage.getItem("nameLogin");

  const handleSubmit = (e) => {
    localStorage.clear();
    window.location = "/login";
  }

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  }

  return (
    <>
    { isLoggedIn == "true" ?
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link to="/" className="navbar-brand">
           FreeEnergy
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleNavToggle}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbar-nav">
          <ul className="navbar-nav mr-auto">
            { isLoggedIn == "true" && rol == 1 ? 
              <li className="nav-item">
                <Link to="/main" className="nav-link">
                  Administrador
                </Link>
              </li>
              : null }
            { isLoggedIn == "true" && (rol == 2 || rol == 1) ? 
              <li className="nav-item">
                <Link to="/mainAgent" className="nav-link">
                  Agente
                </Link>
              </li>
              : null }
          </ul>
        </div>
        
        { isLoggedIn == "true" ? <ul className="navbar-nav">
            <li className="nav-item">
              <button onClick={handleSubmit} className="nav-link btn btn-link">
              {nameLogin != "" ? <><AccountCircleIcon /> {nameLogin}</> : {}} | Cerrar sesión
              </button>
            </li>
          </ul> :
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/login" className="nav-link">
              Iniciar sesión
            </Link>
          </li>
        </ul> }
      </div>
    </nav>
    : null }
    </>
  );
}
