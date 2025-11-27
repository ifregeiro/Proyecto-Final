import { Link } from "react-router-dom";
import "../styles/Patrones.css";
import React from "react";

{/* REFERENCIA DE PELUCHES QUE ESTARIAN EN LA BD */}
const patrones = [
  {
    id: 1,
    nombre: "Totoro",
    precio: "$7.500",
    imagen: "img_index/totoro.jpg",
    ruta: "/patron-totoro"
  },
  {
    id: 2,
    nombre: "Ranita Chenille",
    precio: "$2.500",
    imagen: "img_index/ranita.jpg",
    ruta: "/patron-ranita"
  }
];

export default function Patrones() {
  return (
    <main className="galeria">
      {patrones.map((patron) => (
        <article key={patron.id} className="patron-card">
          <img src={patron.imagen} alt={patron.nombre} />
          <h3>{patron.nombre}</h3>
          <p className="precio">{patron.precio}</p>

          <Link to={patron.ruta} className="ver-detalle">
            Ver más
          </Link>
        </article>
      ))}
    </main>
  );
}
