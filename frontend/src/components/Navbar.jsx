import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import React from "react";

import imgLogo from "../img/logo.png";

const Navbar = () => {
  return (
    <header className="nav-bar">
      <nav className="nav-contenedor">
        <ul className="nav-izquierda">
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/peluches">PELUCHES</Link></li>
          <li><Link to="/patrones">PATRONES</Link></li>
        </ul>

        <div className="logo">
          <h1>Illumia</h1>
          <img src={imgLogo} alt="logo" />
        </div>

        <ul className="nav-derecha">
          <li><Link to="/nosotros">NOSOTROS</Link></li>
          <li><Link to="/carrito">MIS COMPRAS</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
