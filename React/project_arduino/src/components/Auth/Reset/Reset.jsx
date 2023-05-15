import React, { useEffect, useState } from "react";
import { TitleComponent } from "../../Title/TitleComponent";
import { apiUrl, port } from "../../../utils/config";
import { MyInputComponent } from "../../Field/MyInputComponent";
import { handleInputChangeNumber } from "../../../utils/validate";

export default function Reset() {
  const [news, setNew] = useState({
    number_doc: "",
  });

  const form = "register";

  const resetForm = () => {
    setNew({
      number_doc: "",
    });
  };

  const sendEmail = (from, to, subject, text, html) => {
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
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (window.confirm("Se envio al correo registrado la nueva clave")) {
          window.location = "/login";
        }
      });
  };

  const generatePassEncrypt = (longitud) => {
    const caracteresPermitidos =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let clave = "";

    while (clave.length < longitud) {
      const indice = Math.floor(Math.random() * caracteresPermitidos.length);
      clave += caracteresPermitidos.charAt(indice);
    }

    return clave;
  };

  const modifiedUser = async (
    idRolF,
    id_credentials,
    number_doc,
    usuario,
    password
  ) => {
    const response = await fetch(`${apiUrl}${port}/login/${id_credentials}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id_credentials: id_credentials,
        usuario: usuario,
        password: password,
        number_doc: number_doc,
        idRolF: idRolF,
      }),
    });

    const data = await response.json();
    console.log(data);
    resetForm();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const longitudContrasena = 10;
    const contrasenaSegura = generatePassEncrypt(longitudContrasena);

    //enviar cambio de contraseña a la bd
    fetch(`${apiUrl}${port}/login/user`, {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        usuario: news.number_doc + "@sl.com",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        modifiedUser(
          data.idRolF,
          data.id_credentials,
          data.number_doc,
          data.usuario,
          contrasenaSegura
        );
      });

    fetch(`${apiUrl}${port}/${form}/doc/${news.number_doc}`)
      .then((response) => response.json())
      .then((dataget) => {
        console.log(dataget);
        sendEmail(
          null,
          dataget.email,
          "Notificacion de tu nueva contraseña",
          `Tu nueva contraseña es: <b> ${contrasenaSegura} </b> `,
          true
        );
      });

    //enviar correo con la nueva contraseña
  };

  return (
    <>
      <div className="centrar auth-wrapper" style={{ width: "500px" }}>
        <div className="auth-inner">
          <div className="container">
            <form onSubmit={handleSubmit}>
              <TitleComponent title="Restablecer credenciales" size="h1" />

              <MyInputComponent
                type="text"
                required
                label="Numero de identificacion *"
                name="number_doc"
                value={news.number_doc}
                onChange={(e) => handleInputChangeNumber(e, setNew)}
              />

              <button type="submit" className="btn btn-primary">
                Generar contraseña y enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
