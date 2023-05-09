import React, { useState, useEffect } from "react";
import { MyPaginationComponent } from "../Paginate/MyPaginationComponent";
import { MyTableComponent } from "../Table/MyTableComponent";
import { MyInputComponent } from "../Field/MyInputComponent";
import { TitleComponent } from "../Title/TitleComponent";
import UpdateIcon from "@mui/icons-material/Update";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import {
  numberIntRegex,
  passwordRegex,
  textRegex,
  trimRegex,
} from "../../utils/regex";
import { apiUrl, port } from "../../utils/config";
import { NavAdmin } from "../Layouts/NavBar/NavBarAdmin/NavBar";
import { MySelectComponent } from "../Field/MySelectComponent";

export const UserForm = () => {
  const [forms, setForm] = useState([]);
  const [news, setNew] = useState({
    number_doc: "",
    idStatusF: "",
    idTypedocF: "",
    name: "",
    name2: "",
    lastname: "",
    lastname2: "",
    email: "",
    telephone: "",
  });
  const [selected, setSelected] = useState(null);
  const [deleted, setDeleted] = useState(false);
  const [deleted2, setDeleted2] = useState(false);
  const [options, setOptions] = useState([]);
  const [options2, setOptions2] = useState([]);

  const [currentPage, setCurrentPage] = useState(0); // Estado para el número de página actual
  const PerPage = 6; // Número de roles por página
  const form = "register";

  const handleGet = async () => {
    try {
      const response = await fetch(`${apiUrl}${port}/${form}`);
      const data = await response.json();
      setForm(data);
    } catch (error) {
      console.error("Error al obtener usuarios:", error);
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

  const handleInputChangeNumber = (e) => {
    const { name, value } = e.target;
    if (value.match(numberIntRegex) && !value.match(trimRegex)) {
      setNew((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleGetTwo = async () => {
    try {
      const response = await fetch(`${apiUrl}${port}/status`);
      const data = await response.json();
      const newOptions = data.map((element) => ({
        value: element.id_status,
        label: element.description_status,
      }));
      setOptions(newOptions);
    } catch (error) {
      console.error("Error al obtener usuarios:", error);
    }
    try {
      const response = await fetch(`${apiUrl}${port}/typedocs`);
      const data = await response.json();
      const newOptions2 = data.map((element) => ({
        value: element.id_typedocs,
        label: element.description_type_doc,
      }));
      setOptions2(newOptions2);
    } catch (error) {
      console.error("Error al obtener usuarios:", error);
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

    if (!news.name) {
      //funciona en el caso del que el campo no sea required
      alert("Por favor, ingrese un usuario válido.");
      return;
    }

    if (selected) {
      if (window.confirm("¿Estás seguro de que quieres actualizar este usuario?")) {
        try {
          // Enviar solicitud para actualizar un rol existente
          const response = await fetch(
            `${apiUrl}${port}/${form}/${selected.id_user}`,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(news),
            }
          );
          const data = await response.json();
          setForm((prev) =>
            prev.map((rol) => (rol.id_user == data.id_user ? data : rol))
          );
          setSelected(null);
          setNew({
            number_doc: "",
            idStatusF: "",
            idTypedocF: "",
            name: "",
            name2: "",
            lastname: "",
            lastname2: "",
            email: "",
            telephone: "",
          });
        } catch (error) {
          console.error("Error al actualizar:", error);
        }
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
        setNew({
          number_doc: "",
          idStatusF: "",
          idTypedocF: "",
          name: "",
          name2: "",
          lastname: "",
          lastname2: "",
          email: "",
          telephone: "",
        });
      } catch (error) {
        console.error("Error al crear usuario:", error);
      }
    }
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
    }
  };

  const handleDelete = async (id) => {
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
            id_user: "",
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
  };

  const handleEdit = (info) => {
    // Cargar los datos del rol seleccionado en los campos de edición
    setSelected(info);
    setNew({
      id_user: info.id_user,
      number_doc: info.number_doc,
      idStatusF: info.idStatusF,
      idTypedocF: info.idTypedocF,
      name: info.name,
      name2: info.name2,
      lastname: info.lastname,
      lastname2: info.lastname2,
      email: info.email,
      telephone: info.telephone,
    });
  };

  const handleCancel = () => {
    setSelected(null);
    setNew({
      number_doc: "",
      idStatusF: "",
      idTypedocF: "",
      name: "",
      name2: "",
      lastname: "",
      lastname2: "",
      email: "",
      telephone: "",
    });
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
            <TitleComponent title="Administrador de usuarios" size="h1" />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <form onSubmit={handleSubmit} className="mb-4">
              <div className="form-row">
                <MySelectComponent
                  required
                  label="Tipo de documento *"
                  name="idTypedocF"
                  value={news.idTypedocF}
                  options={options2}
                  onChange={handleSelectChange}
                />

                <MyInputComponent
                  type="text"
                  required
                  label="Numero documento *"
                  name="number_doc"
                  value={news.number_doc}
                  onChange={handleInputChange}
                />

                <MyInputComponent
                  type="text"
                  required={false}
                  label="Primer nombre *"
                  name="name"
                  value={news.name}
                  onChange={handleInputChangeTrim}
                />

                <MyInputComponent
                  type="text"
                  required
                  label="Segundo nombre *"
                  name="name2"
                  value={news.name2}
                  onChange={handleInputChangeTrim}
                />

                <MyInputComponent
                  type="text"
                  required={false}
                  label="Primer apellido *"
                  name="lastname"
                  value={news.lastname}
                  onChange={handleInputChangeTrim}
                />

                <MyInputComponent
                  type="text"
                  required
                  label="Segundo apellido *"
                  name="lastname2"
                  value={news.lastname2}
                  onChange={handleInputChangeTrim}
                />

                <MyInputComponent
                  type="text"
                  required
                  label="Correo *"
                  name="email"
                  value={news.email}
                  onChange={handleInputChangeTrim}
                />

                <MyInputComponent
                  type="text"
                  required
                  label="Telefono *"
                  name="telephone"
                  value={news.telephone}
                  onChange={handleInputChangeTrim}
                />

                <MySelectComponent
                  required
                  label="Estado *"
                  name="idStatusF"
                  value={news.idStatusF}
                  options={options}
                  onChange={handleSelectChange}
                />

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
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
            {/*   password remove */}
            <MyTableComponent
              data={current}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              handleMultipleDelete={handleMultipleDelete}
              idField={"id_user"}
              Fields={[
                "number_doc",
                "idStatusF",
                "idTypedocF",
                "name",
                "name2",
                "lastname",
                "lastname2",
                "email",
                "telephone",
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
