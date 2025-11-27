import { Link } from "react-router-dom";
import "../styles/Nosotros.css";
import React from "react";

export default function Nosotros() {
  return (
    <main className="contenido">
      <section className="categorias">

        <details>
          <summary className="cat nosotros"> Producción </summary>
          <div className="contenido">
            <article className="produccion-card">
              <h2> Como empezamos </h2>

              
            </article>
          </div>
        </details>

        <details>
          <summary className="cat nosotros"> Gestión </summary>
          <div className="contenido">
            <article className="gestion-card">
              <h2> Como llegan a ustedes nuestras creaciones </h2>
              

            </article>
          </div>
        </details>

        <details>
          <summary className="cat nosotros"> Desarrollo </summary>
          <div className="contenido">
            <article className="desarrollo-card">
              <h2> Nuestro equipazo </h2>
              

            </article>
          </div>
        </details>

      </section>
    </main>
  );
}
