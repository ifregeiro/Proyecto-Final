
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Peluches.css";
import { getPeluches } from "../services/amigurumisService";

export default function Peluches() {
  const [peluches, setPeluches] = useState([]);

  useEffect(() => {
    async function cargarPeluches() {
      const data = await getPeluches();
      setPeluches(data);
    }
    cargarPeluches();
  }, []);

  return (
    <main className="galeria">
      {peluches.map((peluche) => (
        <article key={peluche.id} className="peluche-card">
          <img
            src={peluche.imagenes?.[0]?.url}
            alt={peluche.nombre}
          />

          <h3>{peluche.nombre}</h3>
          <p className="precio">${peluche.precio}</p>

          <Link to={`/peluches/${peluche.id}`} className="ver-detalle">
            Ver más
          </Link>
        </article>
      ))}
    </main>
  );
}
