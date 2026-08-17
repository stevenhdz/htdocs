import React, { useEffect, useState } from "react";
import { TitleComponent } from "../Title/TitleComponent";
import { apiUrl, port } from "../../utils/config";
import { NavAdmin } from "../Layouts/NavBar/NavBarAdmin/NavBar";

export default function BackupReports() {

  const [email, setEmail] = useState("");

  useEffect(() => {
    const nameLogin = window.localStorage.getItem("nameLogin");
    const id = nameLogin.replaceAll("@sl.com", "");
  
    fetch(`${apiUrl}${port}/register/doc/${id}`)
      .then((response) => response.json())
      .then((dataget) => setEmail(dataget.email))
  }, []);



  const sendEmail = (from, to, subject, text, html, path) => {
    fetch(`${apiUrl}${port}/mail/send`, {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        from: from,
        to: to,
        subject: subject,
        text: text,
        html: html,
        attachmentPath: path,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();

    const fechaActual = new Date().toLocaleDateString().split("/").join("-");

    fetch(`${apiUrl}${port}/backup`)
      .then((response) => response.json())
      .then((dataget) => {
        sendEmail( null,
          email,
          `Respaldo hasta la fecha ${fechaActual}`,
          `Saludos, cualquier novedad avisar al admin.`,
          true,
          "respaldo.sql")
        alert("Ya se genero el backup completo")
      });
  };

  const handleUsers = (e) => {
    e.preventDefault();

    fetch(`${apiUrl}${port}/backup/u`)
      .then((response) => response.json())
      .then((dataget) => {
        sendEmail( null,
          email,
          "Informe de usuarios",
          `Saludos, cualquier novedad avisar al admin.`,
          true,
          "usuarios.csv")
        alert("Ya se genero el informe completo, se envio al correo registrado en tu cuenta.")
      });

  }


  const handleHardware = (e) => {
    e.preventDefault();

    fetch(`${apiUrl}${port}/backup/h`)
      .then((response) => response.json())
      .then((dataget) => {
        sendEmail( null,
          email,
          "Informe de los componentes",
          `Saludos, cualquier novedad avisar al admin.`,
          true,
          "componentes.csv")
        alert("Ya se genero el informe completo, se envio al correo registrado en tu cuenta.")
      });

  }


  return (
    <>
      <NavAdmin></NavAdmin>
      <div className="centrar auth-wrapper" style={{ width: "500px" }}>
        <div className="auth-inner">
          <div className="container">
            <form onSubmit={handleSubmit}>
              <TitleComponent title="Backup e informes" size="h1" />
              <button type="submit" className="btn btn-primary">
                Generar backup
              </button>
              <br />
              <br />
              <button type="button" className="btn btn-primary" onClick={(e) => handleUsers(e)}>
                Generar informe de usuarios
              </button>
              <br />
              <br />
              <button type="button" className="btn btn-primary" onClick={(e) => handleHardware(e)}>
                Generar informe de componentes
              </button>

            </form>
          </div>
        </div>
      </div>
    </>
  );
}
