import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* Sección principal */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Bienvenidos a Illumia</h1>
          <p className="hero-subtitle">
            Amigurumis hechos con amor, uno más tierno que el otro 💕
          </p>
          <a href="/productos" className="hero-button">
            Ver colección
          </a>
        </div>
      </section>

      {/* Sección de destacados */}
      <section className="featured">
        <h2>Nuevos amigurumis</h2>
        <div className="featured-grid">
          <div className="card">
            <img src="./public/img/Makuin.jpg" alt="Conejito pastel" />
            <h3>Chancho peludito</h3>
            <p>Mini edición mystery box 🐷✨</p>
          </div>

          <div className="card">
            <img src="./public/img/Makuin.jpg" alt="Conejito pastel" />
            <h3>Gatito Illumia</h3>
            <p>El clásico que inspiró todo 🖤🤍</p>
          </div>

          <div className="card">
            <img src="./public/img/Makuin.jpg" alt="Conejito pastel" /> 
            <h3>Conejito pastel</h3>
            <p>Pequeño y adorable 🩷</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
