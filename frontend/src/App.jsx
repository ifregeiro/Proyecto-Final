import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Peluches from "./pages/Peluches";
import Patrones from "./pages/Patrones";
import Peluches from "./pages/Peluches";
import Nosotros from "./pages/Nosotros";
import Carrito_vista from "./pages/Carrito_vista";
import Carrito_formulario from "./pages/Carrito_formulario";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";


function App() {
  return (
    <Router>
      <Navbar />

      <Home />


      <Footer />
    </Router>
  );
}

export default App;
