import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";

import Peluches from "./pages/Peluches";
import Patrones from "./pages/Patrones";

import PelucheDetalle from "./pages/PelucheDetalle";
import PatronDetalle from "./pages/PatronDetalle";

import Nosotros from "./pages/Nosotros";

import CarritoVista from "./pages/Carrito_vista";
import CarritoFormulario from "./pages/Carrito_formulario";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/peluches" element={<Peluches />} />
        <Route path="/patrones" element={<Patrones />} />

        <Route path="/peluches/:id" element={<PelucheDetalle />} />
        <Route path="/patrones/:id" element={<PatronDetalle />} />

        <Route path="/nosotros" element={<Nosotros />} />

        <Route path="/carrito" element={<CarritoVista />} />
        <Route path="/carrito/carrito_formulario" element={<CarritoFormulario />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
