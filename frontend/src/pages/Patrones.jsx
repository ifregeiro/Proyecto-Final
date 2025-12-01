
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Patrones.css";
import { getPatrones } from "../services/patronesService";

export default function Patrones() {
  const [patrones, setPatrones] = useState([]);

  useEffect(() => {
    async function cargarPatrones() {
      const data = await getPatrones();
      setPatrones(data);
    }
    cargarPatrones();
  }, []);

  return (
    <main className="galeria">
      {patrones.map((patron) => (
        <article key={patron.id} className="patron-card">
          <img
            src={patron.imagenes?.[0]?.url}
            alt={patron.nombre}
          />

          <h3>{patron.nombre}</h3>
          <p className="precio">${patron.precio}</p>

          <Link to={`/patrones/${patron.id}`} className="ver-detalle">
            Ver más
          </Link>
        </article>
      ))}
    </main>
  );
}
