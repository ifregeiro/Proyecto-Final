import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

import Home from "./pages/Home";
import Peluches from "./pages/Peluches";
import Patrones from "./pages/Patrones";
import Nosotros from "./pages/Nosotros";
import CarritoVista from "./pages/Carrito_vista";
import CarritoFormulario from "./pages/Carrito_formulario";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/peluches" element={<Peluches />} />
        <Route path="/patrones" element={<Patrones />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/carrito" element={<CarritoVista />} />
        <Route path="/checkout" element={<CarritoFormulario />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
