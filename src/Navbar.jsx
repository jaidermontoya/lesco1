import { Nav, Navbar } from "react-bootstrap";

import React, { Component } from "react";
import "./estilos1.scss";

export default class main extends Component {
  render() {
    return (
      <>
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <Navbar bg="light" expand="lg">
                <Nav className="Titulo" href="/">
                  LS
                </Nav>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ml-auto">
                    <Nav.Link href="/Home">Home</Nav.Link>
                    <Nav.Link href="/Login">Login</Nav.Link>
                    <Nav.Link href="/Register">Register</Nav.Link>
                    <Nav.Link href="/Menu">Señas</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </div>
          </div>
        </div>

        <div className="block-31" style={{ position: "relative" }}>
          <div className="owl-carousel loop-block-31 ">
            <div
              className="block-30 item"
              style={{ backgroundImage: 'url("images/sordos.png")' }}
              data-stellar-background-ratio="0.5"
            >
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-md-7">
                    <h2 className="heading">
                      Ayuda a las personas que lo necesitan.
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="site-section">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="media block-6">
                  <div className="icon">
                    <span className="flaticon-first-aid-kit" />
                  </div>
                  <div className="media-body">
                    <h3 className="heading">
                      Como Puedes ayudar a las personas
                    </h3>
                    <p>Ayudandole a pasar las calles, guiarlos.</p>
                    <p>
                      <a href="/"> </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
