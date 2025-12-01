import React from "react";
import { Link } from "react-router-dom";
import "../styles/Carrito_vista.css";
import { useCarrito } from "../context/carritoContext";

export default function Carrito_vista() {
  const { carrito, quitar, total } = useCarrito();

  return (
    <main className="compras-contenido">
      <h2>Mis compras</h2>

      <section className="carrito">
        <div className="carrito-items">
          {carrito.length === 0 && <p>Tu carrito está vacío</p>}

          {carrito.map(item => (
            <div className="item" key={item.id}>
              <img src={item.imagen} alt={item.nombre} />

              <div className="info">
                <h3>{item.nombre}</h3>
                <p>${item.precio}</p>

                <button onClick={() => quitar(item.id)} className="button-eliminar">
                  Quitar ❌
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="carrito-total">
          <p><strong>Total:</strong> ${total}</p>

          {carrito.length > 0 && (
            <Link to="/carrito/carrito_formulario">
              <button type="button">Finalizar compra</button>
            </Link>
          )}
        </div>
      </section>
    </main>
  );
}
