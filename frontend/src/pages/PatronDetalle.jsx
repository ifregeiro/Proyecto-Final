import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPatronById } from "../services/patronesService";
import "../styles/Detalle.css";
import { useCarrito } from "../context/carritoContext";

export default function PatronDetalle() {
  const { id } = useParams();
  const [patron, setPatron] = useState(null);
  const [imagenPrincipal, setImagenPrincipal] = useState("");

  const { agregar } = useCarrito(); // ⭐ usar carrito global igual que peluches

  useEffect(() => {
    async function cargar() {
      const data = await getPatronById(id);
      setPatron(data);

      if (data?.imagenes?.length > 0) {
        setImagenPrincipal(data.imagenes[0].url);
      }
    }
    cargar();
  }, [id]);

  if (!patron) return <p style={{ textAlign: "center" }}>Cargando...</p>;

  return (
    <>
      <main className="producto-container">
        {/* Galería */}
        <section className="galeria-producto">
          <div className="miniaturas">
            {patron.imagenes?.map((img) => (
              <img
                key={img.id}
                src={img.url}
                alt={patron.nombre}
                onClick={() => setImagenPrincipal(img.url)}
              />
            ))}
          </div>

          <div className="imagen-principal">
            <img src={imagenPrincipal} alt={patron.nombre} />
          </div>
        </section>

        {/* Info */}
        <section className="info-producto">
          <div className="titulo-producto">
            <h2>{patron.nombre}</h2>
            <p className="subtitulo">Dificultad: {patron.dificultad}</p>
          </div>

          <div className="precio">
            <p className="precio-final">${patron.precio}</p>
            <p className="cuotas">Descargable en PDF</p>
          </div>

          <div className="descripcion">
            <p>{patron.descripcion}</p>
          </div>

          <div className="stock">
            <p><strong>Colección:</strong> {patron.coleccion?.nombre}</p>
          </div>

            <button className="boton-comprar" onClick={() => agregar({ id_patron: patron.id })}>
            Agregar al carrito
            </button>

        </section>
      </main>
    </>
  );
}
