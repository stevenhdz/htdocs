import React, { useState, useEffect } from "react";
import { MyPaginationComponent } from "../Paginate/MyPaginationComponent";
import { MyTableComponent } from "../Table/MyTableComponent";
import { MyInputComponent } from "../Field/MyInputComponent";
import { TitleComponent } from "../Title/TitleComponent";
import UpdateIcon from "@mui/icons-material/Update";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import { textRegex, trimRegex } from "../../utils/regex";
import { apiUrl, port } from "../../utils/config";
import { NavAdmin } from "../Layouts/NavBar/NavBarAdmin/NavBar";

export const StatusForm = () => {
  const [forms, setForm] = useState([]);
  const [news, setNew] = useState({ description_status: "" });
  const [selected, setSelected] = useState(null);
  const [deleted, setDeleted] = useState(false);
  const [deleted2, setDeleted2] = useState(false);

  const [currentPage, setCurrentPage] = useState(0); // Estado para el número de página actual
  const PerPage = 6; // Número de roles por página
  const form = "status";

  const handleGet = async () => {
    try {
      const response = await fetch(`${apiUrl}${port}/${form}`);
      const data = await response.json();
      setForm(data);
    } catch (error) {
      console.error("Error al obtener estados:", error);
    }
  };

  useEffect(() => {
    // Actualizar la tabla cuando se actualiza el estado 'forms'
    handleGet();
    //setSelected(null)
  }, [selected]);

  useEffect(() => {
    // Actualizar la tabla cuando se actualiza el estado 'forms'
    handleGet();
    setDeleted(false);
  }, [deleted]);

  useEffect(() => {
    // Actualizar la tabla cuando se actualiza el estado 'forms'
    handleGet();
    setDeleted2(false);
  }, [deleted2]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (value.match(textRegex) && !value.match(trimRegex)) {
      setNew((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!news.description_status) {
      //funciona en el caso del que el campo no sea required
      alert("Por favor, ingrese una descripción válida.");
      return;
    }

    if (selected) {
      if (
        window.confirm("¿Estás seguro de que quieres actualizar este estado?")
      ) {
        try {
          // Enviar solicitud para actualizar un rol existente
          const response = await fetch(
            `${apiUrl}${port}/${form}/${selected.id_status}`,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(news),
            }
          );
          const data = await response.json();
          data.error == "Ocurrió un error en el servidor"
            ? alert("Ya existe otro estado llamado igual.")
            : alert(data.message);
          setForm((prev) =>
            prev.map((rol) => (rol.id_status == data.id_status ? data : rol))
          );
          setSelected(null);
          setNew({ description_status: "" });
        } catch (error) {
          console.error("Error al actualizar estado:", error);
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

        data.error == "Ocurrió un error en el servidor"
          ? alert("Ya existe otro estado llamado igual.")
          : setForm((prev) => [...prev, data]);
        setNew({ description_status: "" });
      } catch (error) {
        console.error("Error al crear rol:", error);
      }
    }
  };

  const handleMultipleDelete = async (ids) => {
    if (
      window.confirm(
        "¿Estás seguro de que quieres eliminar los estados seleccionados?"
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
      data.error == "Ocurrió un error en el servidor"
        ? alert("no se puede eliminar depende de un registro")
        : alert(data.message);
    }
  };

  const handleDelete = async (id) => {
    if (id > 2) {
      if (
        window.confirm("¿Estás seguro de que quieres eliminar este estado?")
      ) {
        try {
          // Enviar solicitud para eliminar un rol existente
          const response = await fetch(`${apiUrl}${port}/${form}/${id}`, {
            method: "DELETE",
          });
          const data = await response.json();
          data.error == "Ocurrió un error en el servidor"
            ? alert("no se puede eliminar depende de un registro")
            : alert(data.message);

          // Actualizar el estado después de la eliminación
          setForm((prev) => prev.filter((info) => info.id != id));
          setDeleted(true);
          if (selected && selected.id == id) {
            setSelected(null);
            setNew({ id_status: "", description_status: "" });
          }
        } catch (error) {
          console.error("Error al eliminar rol:", error);
        }
      }
    } else {
      alert("No esta permitido para los estados por defecto.");
    }
  };

  const handleEdit = (info) => {
    // Cargar los datos del rol seleccionado en los campos de edición
    setSelected(info);
    setNew({
      id_status: info.id_status,
      description_status: info.description_status,
    });
  };

  const handleCancel = () => {
    setSelected(null);
    setNew({ description_status: "" });
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
            <TitleComponent title="Administrador de estados" size="h1" />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
            <form onSubmit={handleSubmit} className="mb-4">
              <div className="form-row">
                <MyInputComponent
                  type="text"
                  required
                  label="Descripción del estado *"
                  name="description_status"
                  value={news.description_status}
                  onChange={handleInputChange}
                />
                <div className="form-group col-md-2 d-flex align-items-end">
                  {selected ? (
                    <button type="submit" className="btn btn-primary btn-block">
                      <UpdateIcon />
                    </button>
                  ) : forms.length < 2 ? (
                    <button type="submit" className="btn btn-primary btn-block">
                      <AddIcon />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled
                      className="btn btn-primary btn-block"
                    >
                      <AddIcon />
                    </button>
                  )}
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
            <MyTableComponent
              data={current}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              handleMultipleDelete={handleMultipleDelete}
              idField={"id_status"}
              Fields={["description_status", "createdAt", "updatedAt"]}
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
