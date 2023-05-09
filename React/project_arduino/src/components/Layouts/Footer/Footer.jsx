import React from "react";
import "./Footer.css";

export function Footer() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  return (
    <>
      {isLoggedIn == "true" && (
        <footer className="footer text-white fixed-bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h6 className="text-center">© 2023 FreeEnergy from SLTECHNOLOGY</h6>
              </div>
            </div>
          </div>
        </footer>
      )}
    </>
  );
}
