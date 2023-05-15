import React, { useState } from "react";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { NavDropdown } from "react-bootstrap";

export function NavAdmin() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  const rol = window.localStorage.getItem("rol");

  const handleSubmit = (e) => {
    localStorage.clear();
    window.location = "/login";
  };

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      {isLoggedIn == "true" ? (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <button
              className="navbar-toggler"
              type="button"
              onClick={handleNavToggle}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}
              id="navbar-nav"
            >
              <ul className="navbar-nav mr-auto">
                {isLoggedIn == "true" && rol == 1 ? (
                  <li>
                    <NavDropdown
                      id="navbarDropdownMenuLink"
                      title="Configuraciones"
                    >
                      {isLoggedIn == "true" && rol == 1 && (
                        <>
                          <Link to="/create/rols" className="dropdown-item">
                            Roles
                          </Link>
                          <Link to="/create/types" className="dropdown-item">
                            Tipo documentos
                          </Link>
                        </>
                      )}
                      {isLoggedIn == "true" && rol == 1 && (
                        <NavDropdown.Divider />
                      )}
                      {isLoggedIn == "true" && rol == 1 && (
                        <>
                          <Link to="/create/status" className="dropdown-item">
                            Estados
                          </Link>
                          <Link
                            to="/create/credentials"
                            className="dropdown-item"
                          >
                            Credenciales
                          </Link>
                          <Link to="/create/users" className="dropdown-item">
                            Usuarios
                          </Link>
                        </>
                      )}
                    </NavDropdown>
                  </li>
                ) : null}
                {isLoggedIn == "true" && rol == 1 ? (
                  <li className="nav-item dropdown">
                    <NavDropdown
                      title="Gestionar Ubicaciones"
                      id="navbarDropdownMenuLink"
                    >
                      <Link to="/create/departments" className="dropdown-item">
                        Departamentos
                      </Link>
                      <Link to="/create/municipality" className="dropdown-item">
                        Municipios
                      </Link>
                    </NavDropdown>
                  </li>
                ) : null}
                {isLoggedIn == "true" && rol == 1 ? (
                  <li className="nav-item dropdown">
                    <NavDropdown
                      title="Administrar Hardware y Ubicaciones"
                      id="navbarDropdownMenuLink"
                    >
                      <NavDropdown.Item as={Link} to="/create/hardware">
                        Hardware
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/create/places">
                        Lugares
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/create/hardwareplace">
                        Hardware lugares
                      </NavDropdown.Item>
                    </NavDropdown>
                  </li>
                ) : null}
                {isLoggedIn == "true" && rol == 1 ? (
                  <li className="nav-item">
                    <Link to="/create/report" className="nav-link">
                      Reportes de cargas
                    </Link>
                  </li>
                ) : null}
                {isLoggedIn == "true" && rol == 1 ? (
                  <li className="nav-item">
                    <Link to="/backup/reports" className="nav-link">
                      Backup e informes
                    </Link>
                  </li>
                ) : null}
              </ul>
            </div>
          </div>
        </nav>
      ) : null}
    </>
  );
}
