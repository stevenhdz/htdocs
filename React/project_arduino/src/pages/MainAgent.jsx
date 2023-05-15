import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { apiUrl, port } from "../utils/config";
import "./MainAgent.css";

export const MainAgent = (props) => {
  const { t } = useTranslation();

  const [batteryLevel, setLevel] = useState(0);

  const [user, setUser] = useState([]);
  const [hardware, setHardware] = useState([]);
  const [hardwareplace, setHardwarePlace] = useState([]);

  const [places, setPlace] = useState([]);
  const [municipality, setMunicipality] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [timer, setTimer] = useState(3);

  const barWidth = `${batteryLevel}%`;
  const batteryColor =
    batteryLevel <= 20
      ? "#f5222d" // red for low battery levels
      : batteryLevel <= 50
        ? "#faad14" // yellow for medium battery levels
        : "#52c41a"; // green for high battery levels

  const isLoggedIn = window.localStorage.getItem("loggedIn");
  const rol = window.localStorage.getItem("rol");
  const nameLogin = window.localStorage.getItem("nameLogin");

  useEffect(() => {
    handleGet();
  }, []);

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
      .then((data) => console.log(data));
  };


  const handleGet = async () => {
    const id = nameLogin.replaceAll("@sl.com", "");
    const response2 = await fetch(`${apiUrl}${port}/register/doc/${id}`);
    const data2 = await response2.json();
    setUser(data2);

    const response = await fetch(
      `${apiUrl}${port}/reports/${data2.id_user}/1`
    );
    const data1 = await response.json();

    const response3 = await fetch(
      `${apiUrl}${port}/hardwareplaces/${data1[0].idHardwareF}`
    );
    const data3 = await response3.json();
    setHardwarePlace(data3);

    const response7 = await fetch(
      `${apiUrl}${port}/places/${data3.idPlaceF}`
    );
    const data7 = await response7.json();
    setPlace(data7);

    const response8 = await fetch(
      `${apiUrl}${port}/municipality/${data7.idMunicipalityF}`
    );
    const data8 = await response8.json();
    setMunicipality(data8);

    const response4 = await fetch(
      `${apiUrl}${port}/hardware/${data3.idHardwareF}`
    );
    const data4 = await response4.json();
    setHardware(data4);

    const response9 = await fetch(
      `${apiUrl}${port}/departments/${data8.idDepartmentF}`
    );
    const data9 = await response9.json();
    setDepartments(data9);

    setInterval(async () => {

      try {
        const response = await fetch(
          `${apiUrl}${port}/reports/${data2.id_user}/${data3.idHardwareF}`
        );
        const data = await response.json();
        setLevel(data[0].nivel_carga);
      } catch (error) {
        console.error("Error al obtener reportes:", error);
      }
    }, 3000);

    setInterval(async () => {
      if (data1[0].nivel_carga > 10 && data1[0].nivel_carga < 21) {
        sendEmail(
          null,
          user.email,
          "Notificacion bateria baja",
          `Nivel de bateria: <b> ${data1[0].nivel_carga} </b> `,
          true
        )
      }
    }, timer * 1000);
  
};

return (
  <div className="main-agent-container">
    <br />
    <br />
    {isLoggedIn === "true" ? (
      rol >= 2 || rol == 1 ? (
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <h5>
                BIENVENIDO/A:{" "}
                <span style={{ color: "green" }}>
                  {user.name} {user.name2} {user.lastname} {user.lastname2}
                </span>
              </h5>
              <h5>{t("Informacion del hardware")}</h5>
              <h6>
                <b>IP:</b>{" "}
                <span style={{ color: "green" }}>{hardware.ip}</span>
              </h6>
              <h6>
                <b>MAC ADDRESS:</b>{" "}
                <span style={{ color: "green" }}>{hardware.mac}</span>
              </h6>
              <h6>
                <b>VERSION FIRMWARE:</b>{" "}
                <span style={{ color: "green" }}>
                  {hardware.version_firmware}
                </span>
              </h6>
              <h5>{t("Caracteristicas del lugar")}</h5>
              <h6>
                <b>DETALLES:</b>{" "}
                <span style={{ color: "green" }}>{places.detail}</span>
              </h6>
              <h6>
                <b>GEOREFERENCIAS:</b>{" "}
                <span style={{ color: "green" }}>{places.georeference}</span>
              </h6>
              <h6>
                <b>MUNICIPIO:</b>{" "}
                <span style={{ color: "green" }}>
                  {municipality.desc_municipality}
                </span>
              </h6>
              <h6>
                <b>DEPARTAMENTO:</b>{" "}
                <span style={{ color: "green" }}>
                  {departments.desc_department}
                </span>
              </h6>
            </div>
            <div className="col-sm-4">
              <div className="text-center">
                <img
                  className="arduino"
                  style={{ width: "200px", height: "150px" }}
                  src="https://docs.allthingstalk.com/images/boards/arduino_uno_board.png"
                  alt="Arduino Uno"
                />
              </div>
              <h5>{t("Carga en tiempo real")}</h5>
              <div className="battery-meter">
                <div className="battery-icon custom">
                  <div
                    className="battery-level"
                    style={{ width: barWidth, backgroundColor: batteryColor }}
                  ></div>
                </div>
                <div className="battery-percentage">{batteryLevel}%</div>
              </div>
            </div>
            <div className="col-sm-4">
              <h2>{t("Ubicacion")}</h2>

              <div
                dangerouslySetInnerHTML={{
                  __html:
                    '<iframe width="100%" height="500" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=' +
                    municipality.desc_municipality +
                    '+(Mi%20nombre%20de%20egocios)&amp;t=&amp;z=9&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/car-satnav-gps/">Car GPS</a></iframe>',
                }}
              />
            </div>
          </div>
        </div>
      ) : (
        <h5 className="no-access" style={{ color: "black" }}>
          {t("No tienes acceso")}
        </h5>
      )
    ) : (
      (window.location = "/login")
    )}
  </div>
);
};
