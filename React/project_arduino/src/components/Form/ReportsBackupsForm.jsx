import React, { useEffect, useState } from "react";
import { TitleComponent } from "../Title/TitleComponent";
import { apiUrl, port } from "../../utils/config";
import { NavAdmin } from "../Layouts/NavBar/NavBarAdmin/NavBar";

export default function BackupReports() {
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`${apiUrl}${port}/backup`)
      .then((response) => response.json())
      .then((dataget) => {
        console.log(dataget);
        alert("Ya se genero el backup completo")
      });
  };

  return (
    <>
      <NavAdmin></NavAdmin>
      <div className="centrar auth-wrapper" style={{ width: "500px" }}>
        <div className="auth-inner">
          <div className="container">
            <form onSubmit={handleSubmit}>
              <TitleComponent title="Backup y informes" size="h1" />
              <button type="submit" className="btn btn-primary">
                Generar backup
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
