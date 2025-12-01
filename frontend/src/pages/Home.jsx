import { Link } from "react-router-dom";
import "../styles/Home.css";
import React from "react";
import Banner from "../img/banner_ranita.mp4"

import Desplegable from "../components/index/Desplegable";

export default function Home() {
  return (
    <>

      <video className="video-banner" autoPlay loop muted playsInline>
        <source src={Banner} type="video/mp4" />
      </video>


      <Desplegable />

      <section className="info">
        <div className="container">
          <p>Un pequeño equipo, que con mucho amor diseña compañías y experiencias únicas</p>

          <Link to="#" className="button">
            Para guías de cómo encargar productos o acceder a los patrones hacé click acá
          </Link>

          <p>
            <strong>Atención al cliente vía mail:</strong> illumia0329@gmail.com
          </p>
        </div>
      </section>
    </>
  );
}
