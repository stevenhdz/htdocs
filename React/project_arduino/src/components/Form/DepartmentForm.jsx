import React, { useState, useEffect, useRef } from "react";
import { MyPaginationComponent } from "../Paginate/MyPaginationComponent";
import { MyTableComponent } from "../Table/MyTableComponent";
import { MyInputComponent } from "../Field/MyInputComponent";
import { TitleComponent } from "../Title/TitleComponent";
import UpdateIcon from "@mui/icons-material/Update";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import { apiUrl, port } from '../../utils/config';
import { NavAdmin } from "../Layouts/NavBar/NavBarAdmin/NavBar";
import {
  handleInputChange,
} from "../../utils/validate";



export const DepartmentsForm = () => {
  const [forms, setForm] = useState([]);
  const [news, setNew] = useState({ desc_department: "" });
  const [selected, setSelected] = useState(null);
  const [deleted, setDeleted] = useState(false);
  const [deleted2, setDeleted2] = useState(false);

  const [currentPage, setCurrentPage] = useState(0); // Estado para el número de página actual
  const PerPage = 6; // Número de roles por página
  const form = 'departments';
  const title = useRef("Administrador de departamentos") //no actualiza la pagina en cambio el state si 

  const handleGet = async () => {
    
    try {
      const response = await fetch(`${apiUrl}${port}/${form}`);
      const data = await response.json();
      setForm(data);
    } catch (error) {
      console.error("Error al obtener departamentos:", error);
    }
  };
  
  useEffect(() => {
    // Actualizar la tabla cuando se actualiza el estado 'forms'
    handleGet();
    /* setSelected(null) */
  }, [selected]);

  useEffect(() => {
    // Actualizar la tabla cuando se actualiza el estado 'forms'
    handleGet();
    setDeleted(false)
  }, [deleted]);
  
  useEffect(() => {
    // Actualizar la tabla cuando se actualiza el estado 'forms'
    handleGet();
    setDeleted2(false)
  }, [deleted2]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!news.desc_department) {
      //funciona en el caso del que el campo no sea required
      alert("Por favor, ingrese una descripción válida.");
      return;
    }
  
    if (selected) {
      if (window.confirm("¿Estás seguro de que quieres actualizar este departamento?")) {
        try {
          // Enviar solicitud para actualizar un rol existente
          const response = await fetch(`${apiUrl}${port}/${form}/${selected.id_department}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(news),
          });
          const data = await response.json();
          setForm((prev) =>
            prev.map((rol) => (rol.id_department == data.id_department ? data : rol))
          );
          setSelected(null);
          setNew({ desc_department: "" });
        } catch (error) {
          console.error("Error al actualizar rol:", error);
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

        data.error == "Ocurrió un error en el servidor" ?  alert("ya existe") : setForm((prev) => [...prev, data]); setNew({ desc_department: "" });

      } catch (error) {
        console.error("Error al crear rol:", error);
      }
    }
  };

  const handleMultipleDelete = async (ids) => {
    if (window.confirm("¿Estás seguro de que quieres eliminar los departamentos seleccionados?")) {
      try {
        const response = await fetch(`${apiUrl}${port}/${form}/m`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(ids),
        });
        setDeleted2(true)
      const data = await response.json();

      data.error == "Ocurrió un error en el servidor" ?  alert("no se puede eliminar depende de un registro") : alert(data.message)
        
      } catch (error) {
        alert(error)
      }
  }
  }

  const handleDelete = async (id) => {
    if (window.confirm("¿Estás seguro de que quieres eliminar este departamento?")) {
      try {
        // Enviar solicitud para eliminar un rol existente
        const response = await fetch(`${apiUrl}${port}/${form}/${id}`, {
          method: "DELETE",
        });
        const data = await response.json();
        data.error == "Ocurrió un error en el servidor" ?  alert("no se puede eliminar depende de un registro") : alert(data.message)
        
        // Actualizar el estado después de la eliminación
        setForm((prev) => prev.filter((info) => info.id != id));
        setDeleted(true)
        if (selected && selected.id == id) {
          setSelected(null);
          setNew({ id_department: "", desc_department: "" });
        }
      } catch (error) {
        console.error("Error al eliminar rol:", error);
      }
    }
  };  

  const handleEdit = (info) => {
    // Cargar los datos del rol seleccionado en los campos de edición
    setSelected(info);
    setNew({ id_department: info.id_department, desc_department: info.desc_department });
  };

  const handleCancel = () => {
    setSelected(null);
    setNew({ desc_department: "" });
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
          <TitleComponent title={title.current} size="h1" />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
          <form onSubmit={handleSubmit} className="mb-4">
            <div className="form-row">
              <MyInputComponent
                type="text"
                required
                label="Descripción de departamento *"
                name="desc_department"
                value={news.desc_department}
                onChange={(e) => handleInputChange(e, setNew)}
              />
              <div className="form-group col-md-2 d-flex align-items-end">
                <button type="submit" className="btn btn-primary btn-block">
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
          <MyTableComponent
            data={current}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            handleMultipleDelete={handleMultipleDelete}
            idField={"id_department"}
            Fields={["desc_department", "createdAt", "updatedAt"]}
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
