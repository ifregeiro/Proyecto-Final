import { Link } from "react-router-dom";
import "../../styles/Desplegable.css";
import React, { useEffect, useState } from "react";

import { getAmigurumisByIds } from "../../services/amigurumisService";
import { getPatronesByIds } from "../../services/patronesService";

export default function Desplegable() {
  // ⭐ IDs que aparecen en la home
  const IDS_PELUCHES = [1, 2, 3];
  const IDS_PATRONES = [1, 2];

  const [peluchesDestacados, setPeluchesDestacados] = useState([]);
  const [patronesDestacados, setPatronesDestacados] = useState([]);

  useEffect(() => {
    async function cargar() {
      const peluches = await getAmigurumisByIds(IDS_PELUCHES);
      const patrones = await getPatronesByIds(IDS_PATRONES);

      setPeluchesDestacados(peluches);
      setPatronesDestacados(patrones);
    }
    cargar();
  }, []);

  // ⭐ Función para asegurar imagen ordenada siempre
  const primeraImagen = (imagenes) => {
    if (!imagenes || imagenes.length === 0) return "/img/no-image.png";

    const ordenadas = [...imagenes].sort((a, b) => a.orden - b.orden);
    return ordenadas[0].url;
  };

  return (
    <section className="categorias">

      {/* ⭐ PELUCHES DESTACADOS -------------------------------- */}
      <details>
        <summary className="cat peluches_destacados">✨ Peluches destacados ✨</summary>

        <div className="contenido-productos">
          {peluchesDestacados.map((p) => (
            <article className="card" key={p.id}>
              <img src={primeraImagen(p.imagenes)} alt={p.nombre} />

              <h3>{p.nombre}</h3>
              <p className="precio">${p.precio}</p>

              <Link to={`/peluches/${p.id}`} className="ver-detalle">
                Ver más
              </Link>
            </article>
          ))}
        </div>
      </details>

      {/* ⭐ PATRONES DESTACADOS -------------------------------- */}
      <details>
        <summary className="cat patrones_destacados">✨ Patrones destacados ✨</summary>

        <div className="contenido-productos">
          {patronesDestacados.map((p) => (
            <article className="card" key={p.id}>
              <img src={primeraImagen(p.imagenes)} alt={p.nombre} />

              <h3>{p.nombre}</h3>
              <p className="precio">${p.precio}</p>

              <Link to={`/patrones/${p.id}`} className="ver-detalle">
                Ver más
              </Link>
            </article>
          ))}
        </div>
      </details>

    </section>
  );
}
