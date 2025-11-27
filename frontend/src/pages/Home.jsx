import { Link } from "react-router-dom";
import "../styles/Home.css";
import React from "react";

const Home = () => {
  return (

    <section className="info">
      <div className="container">
          <p> Un pequeño equipo, que con mucho amor diseña compañías y experiencias únicas </p>

          <Link to="#" className="button">
              Para guías de como encargar productos o acceder a los patrones hacé click acá
          </Link>

          <p><strong> Atencion al cliente vía mail: illumia0329@gmail.com </strong> ---- </p>
      </div>
    </section>


  );
};

export default Home;
