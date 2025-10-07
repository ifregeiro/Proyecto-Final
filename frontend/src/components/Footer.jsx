import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-section about">
          <h3>Illumia</h3>
          <p>
            Amigurumis tejidos a mano con dedicación y cariño.  
            Cada creación forma parte de nuestro pequeño mundo de fantasía 🧶✨
          </p>
        </div>

        <div className="footer-section links">
          <h4>Explorá</h4>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/colecciones">Colecciones</a></li>
            <li><a href="/productos">Productos</a></li>
            <li><a href="/contacto">Contacto</a></li>
          </ul>
        </div>

        <div className="footer-section social">
          <h4>Seguinos</h4>
          <div className="social-icons">
            <a href="https://instagram.com/illumia.crochet" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Illumia. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
