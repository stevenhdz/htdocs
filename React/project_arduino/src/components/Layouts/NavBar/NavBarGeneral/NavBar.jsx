import React, { useState } from "react";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Button, Modal } from "react-bootstrap";

export function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  const rol = window.localStorage.getItem("rol");
  const nameLogin = window.localStorage.getItem("nameLogin");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    localStorage.clear();
    window.location = "/login";
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      {isLoggedIn == "true" ? (
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
            <div
              className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}
              id="navbar-nav"
            >
              <ul className="navbar-nav mr-auto">
                {isLoggedIn == "true" && rol == 1 ? (
                  <li className="nav-item">
                    <Link to="/main" className="nav-link">
                      Administrador
                    </Link>
                  </li>
                ) : null}
                {isLoggedIn == "true" && (rol == 2 || rol == 1) ? (
                  <li className="nav-item">
                    <Link to="/mainAgent" className="nav-link">
                      Agente
                    </Link>
                  </li>
                ) : null}
              </ul>
            </div>

            {isLoggedIn == "true" ? (
              <ul className="navbar-nav">
                <li className="nav-item">
                  <div className="d-flex justify-content-between">
                    <Button
                      onClick={handleOpenModal}
                      className="nav-link btn btn-link"
                      variant="link"
                    >
                      {nameLogin !== "" ? (
                        <>
                          <AccountCircleIcon /> {nameLogin}
                        </>
                      ) : null}
                    </Button>
                    <Button
                      onClick={handleSubmit}
                      className="nav-link btn btn-link"
                      variant="link"
                    >
                      Cerrar sesión
                    </Button>
                  </div>

                  <Modal show={showModal} onHide={handleCloseModal}>
                    <Modal.Header closeButton>
                      <Modal.Title>Información del usuario</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      {/* Renderizar aquí la información del usuario */}
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleCloseModal}>
                        Cerrar
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </li>
              </ul>
            ) : (
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/login" className="nav-link">
                    Iniciar sesión
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </nav>
      ) : null}
    </>
  );
}
