import "../styles/Carrito_formulario.css"; //
import React from "react";

export default function CarritoFormulario() {
  return (
    <main className="compras-contenido">

      <p> 📍 Completá tus datos para que tu amigurumi llegue a tu rincón 📦 </p>

      <p>
        Dentro de Bahía entregamos nosotros y para envíos dentro del país los
        procesamos mediante Andreani para que controles el seguimiento de tu
        peluchito
      </p>

      <section className="carrito">

        <form className="formulario-envio">

          <div className="campo">
            <label>Nombre y apellido </label>
            <input type="text" required />
          </div>

          <div className="campo">
            <label>Email</label>
            <input type="email" required />
          </div>

          <div className="campo">
            <label>Teléfono de contacto</label>
            <input type="tel" required />
          </div>

          <div className="campo">
            <label>Dirección</label>
            <input type="text" placeholder="Calle, número (piso y num depto de ser necesario)" required />
          </div>

          <div className="campo">
            <label>Ciudad</label>
            <input type="text" required />
          </div>

          <div className="campo">
            <label>Provincia</label>
            <input type="text" required />
          </div>

          <div className="campo">
            <label>Código postal</label>
            <input type="text" />
          </div>

          <div className="campo">
            <label>Notas para el envio ✨</label>
            <textarea placeholder="Ej: es un regalo 🩷"></textarea>
          </div>

          <div className="botonera">
            <button type="submit">Ir a pagar</button>
          </div>

        </form>
      </section>

    </main>
  );
}
