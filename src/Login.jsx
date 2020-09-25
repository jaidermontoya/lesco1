import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./login.scss";

export default function login() {
  return (
    <div className="login">
      <div className="form-login">
        <h1> Login</h1>
        <form onSubmit={this.handlesubmit} noValidate>
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
          <div className="buttonlogin">
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}
