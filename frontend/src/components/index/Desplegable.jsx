import { Link } from "react-router-dom";
import "../../styles/Desplegable.css";
import React from "react";

import imgDaisy from "../../img/portadas/portada_tortuga_daisy.jpg";
import imgJosefina from "../../img/portadas/portada_vaca_josefina.jpg";
import imgConfeti from "../../img/portadas/portada_serpiente_confeti.jpg";
import imgSeraphine from "../../img/portadas/portada_flamenco_seraphine.jpg";

const Desplegable = () => {
  return (
    <section className="categorias">
      <details>
        <summary className="cat peluches_destacados">✨Peluches destacados✨</summary>
        <div className="contenido-productos">

          <article className="card">
            <img src={imgDaisy} alt="Tortuga Daisy" />
            <h3>Tortuga Daisy</h3>
            <p className="precio">$16.000</p>

            <Link to="/peluches" className="ver-detalle">
              Ver más
            </Link>
          </article>

          <article className="card">
            <img src={imgJosefina} alt="Vaca Josefina" />
            <h3>Vaca Josefina</h3>
            <p className="precio">$23.000</p>

            <Link to="/peluches" className="ver-detalle">
              Ver más
            </Link>
          </article>

          <article className="card">
            <img src={imgConfeti} alt="Serpiente Confeti" />
            <h3>Serpiente Confeti</h3>
            <p className="precio">$7.800</p>

            <Link to="/peluches" className="ver-detalle">
              Ver más
            </Link>
          </article>

          <article className="card">
            <img src={imgSeraphine} alt="Flamenco Seraphine" />
            <h3>Seraphine</h3>
            <p className="precio">$10.800</p>

            <Link to="/peluches" className="ver-detalle">
              Ver más
            </Link>
          </article>
        </div>
      </details>

      <details>
        <summary className="cat patrones_destacados">✨Patrones destacados✨</summary>
        <div className="contenido-productos">
          {/* vacío por ahora */}
        </div>
      </details>
    </section>
  );
};

export default Desplegable;
