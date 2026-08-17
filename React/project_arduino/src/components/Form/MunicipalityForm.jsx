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
import { MySelectComponent } from "../Field/MySelectComponent";



export const MunicipalityForm = () => {
  const [forms, setForm] = useState([]);
  const [news, setNew] = useState({ desc_municipality: "", idDepartmentF: "" });
  const [selected, setSelected] = useState(null);
  const [deleted, setDeleted] = useState(false);
  const [deleted2, setDeleted2] = useState(false);
  const [options2, setOptions2] = useState([])

  const [currentPage, setCurrentPage] = useState(0); // Estado para el número de página actual
  const PerPage = 6; // Número de roles por página
  const form = 'municipality';
  const title = useRef("Administrador de municipios") //no actualiza la pagina en cambio el state si 

  const handleGet = async () => {
    
    try {
      const response = await fetch(`${apiUrl}${port}/${form}`);
      const data = await response.json();
      setForm(data);
    } catch (error) {
      console.error("Error al obtener municipios:", error);
    }

    try {
      const response = await fetch(`${apiUrl}${port}/departments`);
      const data = await response.json();
      const newOptions = data.map((element) => ({
        value: element.id_department,
        label: element.desc_department,
      }));
      setOptions2(newOptions);
    } catch (error) {
      console.error("Error al obtener lugares:", error);
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
    
    if (!news.desc_municipality) {
      //funciona en el caso del que el campo no sea required
      alert("Por favor, ingrese una descripción válida.");
      return;
    }
  
    if (selected) {
      if (window.confirm("¿Estás seguro de que quieres actualizar este municipio?")) {
        try {
          // Enviar solicitud para actualizar un rol existente
          const response = await fetch(`${apiUrl}${port}/${form}/${selected.id_municipality}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(news),
          });
          const data = await response.json();
          setForm((prev) =>
            prev.map((rol) => (rol.id_municipality == data.id_municipality ? data : rol))
          );
          setSelected(null);
          setNew({ desc_municipality: "", idDepartmentF: "" });
        } catch (error) {
          console.error("Error al actualizar municipio:", error);
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

        data.error == "Ocurrió un error en el servidor" ?  alert("ya existe") : setForm((prev) => [...prev, data]); setNew({ desc_municipality: "", idDepartmentF: "" });

      } catch (error) {
        console.error("Error al crear rol:", error);
      }
    }
  };

  const handleMultipleDelete = async (ids) => {
    if (window.confirm("¿Estás seguro de que quieres eliminar los municipios seleccionados?")) {
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
    if (window.confirm("¿Estás seguro de que quieres eliminar este municipio?")) {
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
          setNew({ id_municipality: "", desc_municipality: "", idDepartmentF: "" });
        }
      } catch (error) {
        console.error("Error al eliminar municipio:", error);
      }
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
  

  const handleEdit = (info) => {
    // Cargar los datos del rol seleccionado en los campos de edición
    setSelected(info);
    setNew({ id_municipality: info.id_municipality, desc_municipality: info.desc_municipality });
  };

  const handleCancel = () => {
    setSelected(null);
    setNew({ desc_municipality: "", idDepartmentF: "" });
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
                label="Descripción de municipio *"
                name="desc_municipality"
                value={news.desc_municipality}
                onChange={(e) => handleInputChange(e, setNew)}
              />
                <MySelectComponent
                    required
                    label="Departamento *"
                    name="idDepartmentF"
                    value={news.idDepartmentF}
                    options={options2}
                    onChange={handleSelectChange}
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
            idField={"id_municipality"}
            Fields={["desc_municipality", "idDepartmentF", "createdAt", "updatedAt"]}
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
