import React from "react";
import { useTranslation } from 'react-i18next';

export const MainAgent = (props) => {
  const { t } = useTranslation();
  const batteryLevel = 10;
  const barWidth = `${batteryLevel}%`;
  const batteryColor =
    batteryLevel <= 20
      ? "#f5222d" // rojo para niveles de batería bajos
      : batteryLevel <= 50
      ? "#faad14" // amarillo para niveles de batería medios
      : "#52c41a"; // verde para niveles de batería altos


  const isLoggedIn = window.localStorage.getItem("loggedIn");
  const rol = window.localStorage.getItem("rol");

  return (
    <> 
   
    { isLoggedIn == "true" ? rol >= 2 || rol == 1  ? 
    <div>
      <div>
        <img
          className="arduino"
          style={{ width: "350px", height: "250px" }}
          src="https://docs.allthingstalk.com/images/boards/arduino_uno_board.png"
          alt=""
          srcset=""
        />
        {/* <img className="wifi" style={{ width: "250px", height: "250px"}} src="https://florianmai.de/wp-content/uploads/2016/05/ESP8266-ESP01.png" alt="" srcset="" />
        <img className="proto" style={{ width: "250px", height: "200px"}} src="https://fabacademy.org/2020/labs/egypt/students/ahmed-ibrahim/Media/normal%20breadboard.png" alt="" srcset="" />*/}
      </div>
      <h1>Example</h1>
      <div className="battery-meter2">
        <div className="battery-icon2">
          <div
            className="battery-level"
            style={{ width: "100%", backgroundColor: "#52c41a" }}
          />
        </div>
        <div className="battery-percentage">{100}%</div>
      </div>

      <div className="battery-meter2">
        <div className="battery-icon2">
          <div
            className="battery-level"
            style={{ width: "50%", backgroundColor: "#faad14" }}
          />
        </div>
        <div className="battery-percentage">{50}%</div>
      </div>

      <div className="battery-meter2">
        <div className="battery-icon2">
          <div
            className="battery-level"
            style={{ width: "20%", backgroundColor: "#f5222d" }}
          />
        </div>
        <div className="battery-percentage">{20}%</div>
      </div>

      <h1> Online </h1>
      <div className="battery-meter">
        <div className="battery-icon">
          <div
            className="battery-level"
            style={{ width: barWidth, backgroundColor: batteryColor }}
          />
        </div>
        <div className="battery-percentage">{batteryLevel}%</div>
      </div> 
    </div>
       :  <h1>{t("No tienes acceso")}</h1> : window.location = "/login"}
    </>
  );
};
