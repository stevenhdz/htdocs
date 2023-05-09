import React, { useState } from "react";
import { Link } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export function NavAdmin() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  const rol = window.localStorage.getItem("rol");

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
                <Link to="/create/rols" className="nav-link">
                  Roles
                </Link>
              </li>
              : null }
            { isLoggedIn == "true" && rol == 1 ? 
              <li className="nav-item">
                <Link to="/create/types" className="nav-link">
                  Tipo documetos
                </Link>
              </li>
              : null }
               { isLoggedIn == "true" && rol == 1 ? 
              <li className="nav-item">
                <Link to="/create/status" className="nav-link">
                  Estados
                </Link>
              </li>
              : null }
               { isLoggedIn == "true" && rol == 1 ? 
              <li className="nav-item">
                <Link to="/create/credentials" className="nav-link">
                  Credenciales
                </Link>
              </li>
              : null }
               { isLoggedIn == "true" && rol == 1 ? 
              <li className="nav-item">
                <Link to="/create/users" className="nav-link">
                  Usuarios
                </Link>
              </li>
              : null }
              { isLoggedIn == "true" && rol == 1 ? 
              <li className="nav-item">
                <Link to="/create/departments" className="nav-link">
                  Departamentos
                </Link>
              </li>
              : null }
              { isLoggedIn == "true" && rol == 1 ? 
              <li className="nav-item">
                <Link to="/create/municipality" className="nav-link">
                  Municipios
                </Link>
              </li>
              : null }
              { isLoggedIn == "true" && rol == 1 ? 
              <li className="nav-item">
                <Link to="/create/hardware" className="nav-link">
                  Hardware
                </Link>
              </li>
              : null }
              { isLoggedIn == "true" && rol == 1 ? 
              <li className="nav-item">
                <Link to="/create/places" className="nav-link">
                  Lugares
                </Link>
              </li>
              : null }
              { isLoggedIn == "true" && rol == 1 ? 
              <li className="nav-item">
                <Link to="/create/report" className="nav-link">
                  Reportes
                </Link>
              </li>
              : null }
               { isLoggedIn == "true" && rol == 1 ? 
              <li className="nav-item">
                <Link to="/create/hardwareplace" className="nav-link">
                  Hardware lugares
                </Link>
              </li>
              : null }
              
          </ul>
        </div>
      </div>
    </nav>
    : null }
    </>
  );
}
