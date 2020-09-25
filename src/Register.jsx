import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./register.scss";

export default function register() {
  return (
    <div className="register">
      <div className="form-register">
        <h1>Register</h1>
        <form onSubmit={this.handlesubmit} noValidate>
          <div className="Nombres">
            <input
              type="text"
              className=""
              placeholder="Nombre Completo "
              name="Nombres"
              noValidate
              onChange={this.handlechange}
            />
          </div>
          <div className="Docuemnto">
            <input
              type="text"
              className=""
              placeholder="Documento identidad"
              name="Docuemnto"
              noValidate
              onChange={this.handlechange}
            />
          </div>
          <div className="Email">
            <input
              type="text"
              className=""
              placeholder="Correo Electronico"
              name="Email"
              noValidate
              onChange={this.handlechange}
            />
          </div>
          <div className="Contaseña">
            <input
              type="password"
              className=""
              placeholder="Contraseña"
              name="Contraseña"
              noValidate
              onChange={this.handlechange}
            />
          </div>
          <div className="buttonr">
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
}
