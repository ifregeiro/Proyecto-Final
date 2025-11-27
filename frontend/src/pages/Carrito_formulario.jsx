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
            <label>Nombre completo</label>
            <input type="text" placeholder="Ej: Luna Tejedora" required />
          </div>

          <div className="campo">
            <label>Email</label>
            <input type="email" placeholder="ejemplo@gmail.com" required />
          </div>

          <div className="campo">
            <label>Teléfono de contacto</label>
            <input type="tel" placeholder="Ej: 11 1234 5678" />
          </div>

          <div className="campo">
            <label>Dirección</label>
            <input type="text" placeholder="Calle y número" required />
          </div>

          <div className="campo">
            <label>Ciudad</label>
            <input type="text" placeholder="Ej: Buenos Aires" required />
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
            <label>Notas mágicas para Illumia ✨</label>
            <textarea placeholder="Ej: es un regalo, sin boleta, en bolsa linda 🩷"></textarea>
          </div>

          <div className="botonera">
            <button type="submit">Ir a pagar 💳</button>
          </div>

        </form>
      </section>

    </main>
  );
}
