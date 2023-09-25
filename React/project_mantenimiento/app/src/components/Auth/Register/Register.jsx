import React, { useEffect, useState } from "react";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { TitleComponent } from "../../Title/TitleComponent";
import { MyInputComponent } from "../../Field/MyInputComponent";
import { emailRegex, passwordRegex } from "../../../utils/regex";
import { MySelectComponent } from "../../Field/MySelectComponent";
import { apiUrl, port } from "../../../utils/config";
import {
  handleInputChangeNumber,
  handleInputChangeText,
  handleInputChange,
  handleSelectedChange,
} from "../../../utils/validate";

export default function Register() {
  const [options, setOptions] = useState([]);
  const [hidden, setHidden] = useState(true);
  const [news, setNew] = useState({
    name: "",
    name2: "",
    lastname: "",
    lastname2: "",
    idTypedocF: 0,
    number_doc: "",
    email: "",
    telephone: "",
    idStatusF: 1,
    password: "",
    pass: "",
    idRolF: 2,
  });

  useEffect(() => {
    handleGet();
  }, []);

  const handleGet = async () => {
    try {
      const response = await fetch(`${apiUrl}${port}/typedocs`);
      const data = await response.json();
      const newOptions = data.map((element) => ({
        value: element.id_typedoc,
        label: element.description_type_doc,
      }));
      setOptions(newOptions);
    } catch (error) {
      console.error("Error al obtener roles:", error);
    }
  };

  const toggleHidden = () => {
    setHidden(!hidden);
  };

  const resetForm = () => {
    setNew({
      name: "",
      name2: "",
      lastname: "",
      lastname2: "",
      idTypedocF: 0,
      number_doc: "",
      email: "",
      telephone: "",
      idStatusF: 1,
      password: "",
      pass: "",
      idRolF: 2,
    });
  };

  const Login = () => {
    fetch(`${apiUrl}${port}/login`, {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        usuario: news.number_doc + "@sl.com",
        password: news.password,
        number_doc: news.number_doc,
        idRolF: news.idRolF,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data != "") {
          alert("Registration Successful");
          resetForm();
          window.location.href = "/login";
        } else {
          alert(data.message);
        }
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!news.name) {
      alert("Por favor, ingrese informacion.");
      return;
    }

    if (news.password == news.pass) {
      if (!news.password.match(passwordRegex)) {
        alert(
          "Por favor, ingrese una contraseña válida. La contraseña debe contener al menos 8 caracteres, incluyendo al menos una mayúscula, una minúscula, un número y un carácter especial (@$!%*?&)."
        );
        return;
      }

      if (!news.lastname2) {
        alert("Por favor, ingrese segundo apellido");
        return;
      }

      if (!news.email.match(emailRegex)) {
        alert("Por favor, ingrese una correo valido.");
        return;
      }

      fetch(`${apiUrl}${port}/register`, {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          number_doc: news.number_doc,
          name: news.name,
          name2: news.name2,
          lastname: news.lastname,
          lastname2: news.lastname2,
          email: news.email,
          telephone: news.telephone,
          idStatusF: news.idStatusF,
          idTypedocF: news.idTypedocF,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          Login();
        });
    } else {
      alert("las contraseñas no coinciden");
      resetForm();
    }
  };

  return (
    <div className="centrar auth-wrapper" style={{width: "800px"}}>
      <div className="auth-inner">
        <div className="container">
          <form onSubmit={handleSubmit}>
            <TitleComponent title="Registro de usuario" size="h1" />

            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                <MySelectComponent
                  required
                  label="Tipo de documento *"
                  name="idTypedocF"
                  value={news.idTypedocF}
                  options={options}
                  onChange={(e) => handleSelectedChange(e, setNew)}
                />

                <MyInputComponent
                  type="text"
                  required
                  label="Numero de identificacion *"
                  name="number_doc"
                  value={news.number_doc}
                  onChange={(e) => handleInputChangeNumber(e, setNew)}
                />

                <MyInputComponent
                  type="text"
                  required
                  label="Primer nombre *"
                  name="name"
                  value={news.name}
                  onChange={(e) => handleInputChangeText(e, setNew)}
                />

                <MyInputComponent
                  type="text"
                  required={false}
                  label="Segundo nombre"
                  name="name2"
                  value={news.name2}
                  onChange={(e) => handleInputChangeText(e, setNew)}
                />

                <MyInputComponent
                  type="text"
                  required
                  label="Primer apellido *"
                  name="lastname"
                  value={news.lastname}
                  onChange={(e) => handleInputChangeText(e, setNew)}
                />
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                <MyInputComponent
                  type="text"
                  required={false}
                  label="Segundo apellido *"
                  name="lastname2"
                  value={news.lastname2}
                  onChange={(e) => handleInputChangeText(e, setNew)}
                />

                <MyInputComponent
                  type="text"
                  required
                  label="Correo *"
                  name="email"
                  value={news.email}
                  onChange={(e) => handleInputChange(e, setNew)}
                />

                <MyInputComponent
                  type="tel"
                  required
                  label="Telefono *"
                  name="telephone"
                  value={news.telephone}
                  onChange={(e) => handleInputChangeNumber(e, setNew)}
                />

                <MyInputComponent
                  type={hidden == true ? "password" : "text"}
                  required
                  label="Contraseña *"
                  name="password"
                  value={news.password}
                  onChange={(e) => handleInputChange(e, setNew)}
                />

                <MyInputComponent
                  type={hidden == true ? "password" : "text"}
                  required
                  label="Confirmar contraseña *"
                  name="pass"
                  value={news.pass}
                  onChange={(e) => handleInputChange(e, setNew)}
                />
              </div>
            </div>
            <div className="mb-9">
              { news.password != '' || news.pass != '' ?
              
              <p
                style={{
                  "font-size": "12px",
                  color: "black",
                  backgroundColor: "#f47f7f",
                }}
              >
                Por favor, tener en cuenta que la contraseña ingresada debe
                contener al menos 8 caracteres, incluyendo al menos una
                mayúscula, una minúscula, un número y un carácter especial
                (@$!%*?&).
              </p> : <></>
            }

              <button
                type="button"
                className="btn btn-warning btn-block mt-1"
                onClick={toggleHidden}
              >
                {hidden ? <><VisibilityOffIcon /></> : <><VisibilityIcon /></>}
              </button>

              <br />
              <br />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Registrar
              </button>
            </div>
            <p className="forgot-password text-right">
              Ya está registrado <a href="/login">Iniciar sesión?</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
