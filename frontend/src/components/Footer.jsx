import { Link } from "react-router-dom";
import "../styles/Footer.css";
import React from "react";

const Footer = () => {
  return (
    
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-section about">
          <h3>Illumia</h3>
          <p>
            Cada creación forma parte de nuestro pequeño mundo de fantasía ✨
          </p>
        </div>

        <div className="links">
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/peluches">Peluches</Link></li>
            <li><Link to="/patrones">Patrones</Link></li>
            <li><Link to="/nosotros">Nosotros</Link></li>
          </ul>
        </div>

        <div className="footer-section social">
          <h4>Seguinos para enterarte de todo 🥰</h4>
          <div className="social-icons">
            <a
              href="https://instagram.com/illumia.crochet"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
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
