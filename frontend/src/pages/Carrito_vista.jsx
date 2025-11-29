import { Link } from "react-router-dom";
import "../styles/Carrito_vista.css";
import { useState } from "react";
import React from "react";

export default function Carrito_vista() {

  // MAS ADELANTE BD
  const [carrito, setCarrito] = useState([
    {
      id: 1,
      nombre: "Tortuga Daisy",
      precio: 14000,
      imagen: "img_index/tortuga_daisy_cat.jpg"
    },
    {
      id: 2,
      nombre: "Vaca Josefina",
      precio: 23000,
      imagen: "img_index/vaca_josefina_cat.jpg"
    }
  ]);

  // eliminar productos
  function eliminarProducto(id) {
    const nuevoCarrito = carrito.filter(item => item.id !== id);
    setCarrito(nuevoCarrito);
  }

  // total automático
  const total = carrito.reduce((acc, item) => acc + item.precio, 0);

  return (
    <main className="compras-contenido">
      <h2>Mis compras</h2>
      <p>Revisá los productos que elegiste antes de confirmar tu pedido</p>
      <p>Los pagos se procesan mediante mercado pago para la seguridad de tus datos</p>

      <section className="carrito">

        <div className="carrito-items">

          {carrito.length === 0 && (
            <p>Tu carrito está vacío</p>
          )}

          {carrito.map(item => (
            <div key={item.id} className="item">

              <img src={item.imagen} alt={item.nombre} />

              <div className="info">
                <h3>{item.nombre}</h3>
                <p>${item.precio}</p>

                <button
                  className="button-eliminar"
                  onClick={() => eliminarProducto(item.id)}
                >
                  Quitar ❌
                </button>
              </div>

            </div>
          ))}

        </div>

        <div className="carrito-total">
          <p>
            <strong>Total:</strong> ${total}
          </p>

          {carrito.length > 0 && (
            <Link to="/carrito/carrito_formulario" aria-label="Finalizar compra">
              <button type="button">Finalizar compra</button>
            </Link>
          )}

        </div>

      </section>
    </main>
  );
}
