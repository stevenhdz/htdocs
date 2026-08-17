import React, { useState, useEffect } from "react";
import { MyPaginationComponent } from "../Paginate/MyPaginationComponent";
import { MyTableComponent } from "../Table/MyTableComponent";
import { MyInputComponent } from "../Field/MyInputComponent";
import { TitleComponent } from "../Title/TitleComponent";
import UpdateIcon from "@mui/icons-material/Update";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import { passwordRegex, trimRegex } from "../../utils/regex";
import { apiUrl, port } from "../../utils/config";
import { NavAdmin } from "../Layouts/NavBar/NavBarAdmin/NavBar";
import { MySelectComponent } from "../Field/MySelectComponent";

export const CredrentialsForm = () => {
  const [forms, setForm] = useState([]);
  const [news, setNew] = useState({
    usuario: "",
    password: "",
    number_doc: "",
    idRolF: "",
  });
  const [selected, setSelected] = useState(null);
  const [deleted, setDeleted] = useState(false);
  const [deleted2, setDeleted2] = useState(false);
  const [options, setOptions] = useState([]);

  const [currentPage, setCurrentPage] = useState(0); // Estado para el número de página actual
  const PerPage = 6; // Número de roles por página
  const form = "login";

  const handleGet = async () => {
    try {
      const response = await fetch(`${apiUrl}${port}/${form}`);
      const data = await response.json();
      setForm(data);
    } catch (error) {
      console.error("Error al obtener roles:", error);
    }
  };

  useEffect(() => {
    // Actualizar la tabla cuando se actualiza el estado 'forms'
    handleGet();
    handleGetTwo();
    //setSelected(null)
  }, [selected]);

  useEffect(() => {
    // Actualizar la tabla cuando se actualiza el estado 'forms'
    handleGet();
    handleGetTwo();
    setDeleted(false);
  }, [deleted]);

  useEffect(() => {
    // Actualizar la tabla cuando se actualiza el estado 'forms'
    handleGet();
    handleGetTwo();
    setDeleted2(false);
  }, [deleted2]);

  const handleInputChangeTrim = (e) => {
    const { name, value } = e.target;
    if (!value.match(trimRegex)) {
      setNew((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (!value.match(trimRegex)) {
      setNew((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleGetTwo = async () => {
    try {
      const response = await fetch(`${apiUrl}${port}/rols`);
      const data = await response.json();
      const newOptions = data.map((element) => ({
        value: element.id_rol,
        label: element.description_rol,
      }));
      setOptions(newOptions);
    } catch (error) {
      console.error("Error al obtener roles:", error);
    }
  };

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    /* if (!value.match(emailRegex)) { */
    setNew((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!news.usuario) {
      //funciona en el caso del que el campo no sea required
      alert("Por favor, ingrese un usuario válido.");
      return;
    }

    if (selected) {
      if (selected.id_credentials > 1) {
        if (window.confirm("¿Estás seguro de que quieres actualizar este?")) {
          try {
            if (!news.password.match(passwordRegex)) {
              alert(
                "Por favor, ingrese una contraseña válida. La contraseña debe contener al menos 8 caracteres, incluyendo al menos una mayúscula, una minúscula, un número y un carácter especial (@$!%*?&)."
              );
              return;
            }

            const password = "Sltech2023*";
            // Enviar solicitud para actualizar un rol existente
            const response = await fetch(
              `${apiUrl}${port}/${form}/${selected.id_credentials}`,
              {
                method: "PUT",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  id_credentials: news.id_credentials,
                  usuario: news.usuario,
                  password: password,
                  number_doc: news.number_doc,
                  idRolF: news.idRolF,
                }),
              }
            );

            const data = await response.json();
            setForm((prev) =>
              prev.map((rol) =>
                rol.id_credentials == data.id_credentials ? data : rol
              )
            );
            setSelected(null);
            setNew({ usuario: "", password: "", number_doc: "", idRolF: "" });
          } catch (error) {
            console.error("Error al actualizar:", error);
          }
        }
      } else {
        alert("No esta permitido para los usuarios por defecto.");
      }
    } else {
      try {
        // Enviar solicitud para crear un nuevo rol
        const response = await fetch(`${apiUrl}${port}/${form}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(news),
        });
        const data = await response.json();
        setForm((prev) => [...prev, data]);
        setNew({ usuario: "", password: "", number_doc: "", idRolF: "" });
      } catch (error) {
        console.error("Error al crear rol:", error);
      }
    }
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

  const handleMultipleDelete = async (ids) => {
    if (
      window.confirm(
        "¿Estás seguro de que quieres eliminar las credenciales seleccionadas?"
      )
    ) {
      const response = await fetch(`${apiUrl}${port}/${form}/m`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(ids),
      });
      setDeleted2(true);
      const data = await response.json();
      console.log(data);
      sendEmail(
        null,
        news.number_doc + "@sl.com",
        "Notificacion de tu nueva contraseña",
        `Tu nueva contraseña es: <b> Sltech2023* </b> `,
        true
      );
    }
  };

  const handleDelete = async (id) => {
    if (id > 1) {
      if (window.confirm("¿Estás seguro de que quieres eliminar este?")) {
        try {
          // Enviar solicitud para eliminar un rol existente
          await fetch(`${apiUrl}${port}/${form}/${id}`, {
            method: "DELETE",
          });

          // Actualizar el estado después de la eliminación
          setForm((prev) => prev.filter((info) => info.id != id));
          setDeleted(true);
          if (selected && selected.id == id) {
            setSelected(null);
            setNew({
              id_credentials: "",
              usuario: "",
              password: "",
              number_doc: "",
              idRolF: "",
            });
          }
        } catch (error) {
          console.error("Error al eliminar rol:", error);
        }
      }
    } else {
      alert("No esta permitido para las credenciales por defecto.");
    }
  };

  const handleEdit = (info) => {
    // Cargar los datos del rol seleccionado en los campos de edición
    setSelected(info);
    setNew({
      id_credentials: info.id_credentials,
      usuario: info.usuario,
      password: info.password,
      number_doc: info.number_doc,
      idRolF: info.idRolF,
    });
  };

  const handleCancel = () => {
    setSelected(null);
    setNew({ usuario: "", password: "", number_doc: "", idRolF: "" });
  };

  // Función para manejar el cambio de página
  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage);
  };

  const indexOfLast = (currentPage + 1) * PerPage;
  const indexOfFirst = indexOfLast - PerPage;
  const current = forms.slice(indexOfFirst, indexOfLast);

  return (
    <>
      <NavAdmin></NavAdmin>
      <div className="container mt-4">
        <div className="row">
          <div className="col">
            <TitleComponent
              title="Administrador de credenciales y asignaciones de rol"
              size="h1"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
            <form onSubmit={handleSubmit} className="mb-4">
              <div className="form-row">
                <MyInputComponent
                  type="text"
                  required
                  disabled
                  label="Usuario *"
                  name="usuario"
                  value={news.usuario}
                  onChange={handleInputChange}
                />

                <MySelectComponent
                  required
                  label="Tipo de documento *"
                  name="idRolF"
                  value={news.idRolF}
                  options={options}
                  onChange={handleSelectChange}
                />

                <MyInputComponent
                  type="password"
                  required
                  disabled
                  label="Contraseña *"
                  name="password"
                  value="Sltech2023*"
                  onChange={handleInputChangeTrim}
                />

                <p
                  style={{
                    "font-size": "12px",
                    color: "black",
                    backgroundColor: "#f47f7f",
                  }}
                >
                  Tener encuenta que al restablecer el rol, se cambiara la clave
                  para obligar al usuario iniciar sesion con la nueva y evitar
                  problemas al navegar. La clave por defecto: <b>Sltech2023*</b>
                </p>

                <div className="form-group col-md-2 d-flex align-items-end">
                  <button
                    type="submit"
                    disabled={selected ? false : true}
                    className="btn btn-primary btn-block"
                  >
                    {selected ? <UpdateIcon /> : <AddIcon />}
                  </button>
                  &nbsp;
                  {selected && (
                    <button
                      type="button"
                      className="btn btn-danger btn-block mt-2"
                      onClick={handleCancel}
                    >
                      <CloseIcon />
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8">
            {/*   password remove */}
            <MyTableComponent
              data={current}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              handleMultipleDelete={handleMultipleDelete}
              idField={"id_credentials"}
              Fields={[
                "usuario",
                "number_doc",
                "idRolF",
                "createdAt",
                "updatedAt",
              ]}
            />
            <MyPaginationComponent
              data={forms}
              PerPage={PerPage}
              handlePageChange={handlePageChange}
            />
            <br />
            <br />
          </div>
        </div>
      </div>
    </>
  );
};
