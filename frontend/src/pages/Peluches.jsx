import { Link } from "react-router-dom";
import "../styles/Peluches.css";
import React from "react";

{/* REFERENCIA DE PELUCHES QUE ESTARIAN EN LA BD */}
const peluches = [ 
  {
    id: 1,
    nombre: "Tortuga Daisy",
    precio: "$8.500",
    imagen: "img_index/tortuga_daisy_cat.jpg",
    ruta: "/producto-tortuga-daisy"
  },
  {
    id: 2,
    nombre: "Vaca Josefina",
    precio: "$9.200",
    imagen: "img_index/vaca_josefina_cat.jpg",
    ruta: "/producto-vaca-josefina"
  },
  {
    id: 3,
    nombre: "Serpiente Confeti",
    precio: "$7.800",
    imagen: "img_index/serpiente_confeti_cat.jpg",
    ruta: "/producto-serpiente-confeti"
  }
];

export default function Peluches() {
  return (
    <main className="galeria">
      {peluches.map((peluche) => (
        <article key={peluche.id} className="peluche-card">
          <img src={peluche.imagen} alt={peluche.nombre} />
          <h3>{peluche.nombre}</h3>
          <p className="precio">{peluche.precio}</p>

          <Link to={peluche.ruta} className="ver-detalle">
            Ver más
          </Link>
        </article>
      ))}
    </main>
  );
}
