import React, { useState } from "react";
import "./Login.css";
import { TitleComponent } from "../../Title/TitleComponent";
import { MyInputComponent } from "../../Field/MyInputComponent";
import { emailRegex, passwordRegex } from "../../../utils/regex";
import { apiUrl, port } from "../../../utils/config";

export default function Login() {
  const [news, setNew] = useState({ usuario: "", password: "" });
  const [count, setCount] = useState(0);
  const form = "register";

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setNew((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  function handleSubmit(e) {
    e.preventDefault();

    if (!news.usuario.match(emailRegex)) {
      alert("Por favor, ingrese un correo electrónico válido.");
      return;
    }

    if (!news.password.match(passwordRegex)) {
      alert(
        "Por favor, ingrese una contraseña válida. La contraseña debe contener al menos 8 caracteres, incluyendo al menos una mayúscula, una minúscula, un número y un carácter especial (@$!%*?&)."
      );
      return;
    }

    const id = news.usuario.replaceAll("@sl.com", "");

    fetch(`${apiUrl}${port}/${form}/doc/${id}`)
      .then((response) => response.json())
      .then((dataget) => {
        setCount(count + 1)
        if (dataget.idStatusF == 1) {
          fetch(`${apiUrl}${port}/login/auth`, {
            method: "POST",
            crossDomain: true,
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
              usuario: news.usuario,
              password: news.password,
            }),
          })
            .then((res) => res.json())
            .then((data) => {
              if (typeof data.usuario != "undefined") {
                window.localStorage.setItem("loggedIn", true);
                window.localStorage.setItem("nameLogin", news.usuario);
                window.localStorage.setItem("idUser", dataget.id_user);

                if (data.idRolF == 1) {
                  window.localStorage.setItem("rol", 1);
                  window.location.href = "./Main";
                } else if (data.idRolF >= 2) {
                  window.localStorage.setItem("rol", data.idRolF);
                  window.location.href = "./MainAgent";
                }
              } else {
                if(count < 3){
                  alert("Usuario o contraseña incorrectos.");
                }else{
                  alert(`Haz llegado al limite de intentos permitidos ${count}, procederemos a redireccionarte al generar de cambio de clave.`);
                  setCount(0)
                  window.location.href = "./reset";
                }
              }
            });
        } else {
          alert("cuenta no habilitada, contacte al adminitrador::");
        }
      })
      .catch((error) => console.error(error));
  }

  return (
    <div className="centrar auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={handleSubmit}>
          <TitleComponent title="Iniciar sesión" size="h1" />

          <MyInputComponent
            type="text"
            required
            label="Correo *"
            name="usuario"
            value={news.usuario}
            onChange={handleInputChange}
          />

          <MyInputComponent
            type="password"
            required
            label="Contraseña *"
            name="password"
            value={news.password}
            onChange={handleInputChange}
          />

          <p className="forgot-password text-right">
            <a href="/reset">Se te olvidó la contraseña ?</a>
          </p>

          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="customCheck1"
            />
            <label className="form-check-label" htmlFor="customCheck1">
              Recuérdame
            </label>
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Iniciar
            </button>
          </div>
          <p className="forgot-password text-right" style={{"padding-top": "10px"}}>
            <a href="/register">¿Aún no tienes una cuenta? Regístrate aquí</a>
          </p>
        </form>
      </div>
    </div>
  );
}
