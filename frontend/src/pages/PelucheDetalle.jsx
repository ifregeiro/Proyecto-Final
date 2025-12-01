import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAmigurumiById } from "../services/amigurumisService";
import "../styles/Detalle.css";
import { useCarrito } from "../context/carritoContext";

export default function PelucheDetalle() {
  const { id } = useParams();
  const [peluche, setPeluche] = useState(null);
  const [imagenPrincipal, setImagenPrincipal] = useState("");
  const { agregar } = useCarrito(); // usar carrito global

  useEffect(() => {
    async function cargar() {
      const data = await getAmigurumiById(id);
      setPeluche(data);

      if (data?.imagenes?.length > 0) {
        setImagenPrincipal(data.imagenes[0].url);
      }
    }
    cargar();
  }, [id]);

  if (!peluche) return <p style={{ textAlign: "center" }}>Cargando...</p>;

  return (
    <>
      <main className="producto-container">
        
        {/* Galería */}
        <section className="galeria-producto">
          <div className="miniaturas">
            {peluche.imagenes?.map((img) => (
              <img
                key={img.id}
                src={img.url}
                alt={peluche.nombre}
                onClick={() => setImagenPrincipal(img.url)}
              />
            ))}
          </div>

          <div className="imagen-principal">
            <img src={imagenPrincipal} alt={peluche.nombre} />
          </div>
        </section>

        {/* Info */}
        <section className="info-producto">
          <div className="titulo-producto">
            <h2>{peluche.nombre}</h2>
            <p className="subtitulo">{peluche.tamanio}</p>
          </div>

          <div className="precio">
            <p className="precio-final">${peluche.precio}</p>
            <p className="cuotas">3 cuotas sin interés</p>
          </div>

          <div className="colores">
            <p><strong>Color:</strong></p>
            <p>{peluche.color}</p>
          </div>

          <div className="descripcion">
            <p>{peluche.descripcion}</p>
          </div>

          <div className="stock">
            <p>
              <strong>Disponibles:</strong>{" "}
              {peluche.disponibilidad ? "En stock" : "Sin stock"}
            </p>
          </div>

          <button
            className="boton-comprar"
            onClick={() => agregar({ id_amigurumi: peluche.id })}
            >
            Agregar al carrito
          </button>


        </section>
      </main>

      {/* Detalles */}
      <section className="detalles">
        <h2>Detalles del Producto</h2>
        <ul>
          <li>Material: Hilo 100% algodón</li>
          <li>Relleno: Fibra siliconada hipoalergénica</li>
          <li>Hecho 100% a mano</li>
        </ul>
      </section>
    </>
  );
}
