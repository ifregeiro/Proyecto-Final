import { Link } from "react-router-dom";
import "../styles/Carrito_vista.css";
import React from "react";

export default function Carrito_vista() {
  return (
    <main className="compras-contenido">
      <h2>Mis compras</h2>
      <p>Revisá los productos que elegiste antes de confirmar tu pedido</p>
      <p>Los pagos se procesan mediante mercado pago para la seguridad de tus datos</p>

      <section className="carrito"> {/* VISTA PREELIMINAR A MODIFICAR */}
        <div className="carrito-items">
          <div className="item">
            <img src="img_index/tortuga_daisy_cat.jpg" alt="Tortuga Daisy" />
            <div className="info">
              <h3>Tortuga Daisy</h3>
              <p>$14000</p>
              <span className="estado">Listo para envío 📦</span>
            </div>
          </div>

          <div className="item">
            <img src="img_index/vaca_josefina_cat.jpg" alt="Vaca Josefina" />
            <div className="info">
              <h3>Vaca Josefina</h3>
              <p>$23000</p>
              <span className="estado">Listo para envío 📦</span>
            </div>
          </div>
        </div>

        <div className="carrito-total">
          <p>
            <strong>Total:</strong> $37000
          </p>

          <Link to="/Carrito_formulario.jsx" aria-label="Finalizar compra">
            <button type="button">Finalizar compra</button>
          </Link>
        </div>
      </section>
    </main>
  );
}

