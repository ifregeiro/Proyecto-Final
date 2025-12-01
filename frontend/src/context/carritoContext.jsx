import React, { createContext, useContext, useEffect, useState } from "react";
import { getCarrito, addItem, removeItem } from "../services/carritoService";

const CarritoContext = createContext();

export function CarritoProvider({ children }) {
  const [carrito, setCarrito] = useState([]);
  const [idCarrito, setIdCarrito] = useState(null);

  useEffect(() => {
    async function cargar() {
      const data = await getCarrito();

      setIdCarrito(data.id); // ⭐ Guardamos el ID del carrito

      setCarrito(Array.isArray(data.items) ? data.items : []);
    }
    cargar();
  }, []);

  async function agregar(item) {
    if (!idCarrito) return;

    const nuevo = await addItem({
      id_carrito: idCarrito,
      cantidad: 1,
      ...item
    });

    setCarrito(Array.isArray(nuevo.items) ? nuevo.items : []);
  }

  async function quitar(id_item) {
    if (!idCarrito) return;

    const nuevo = await removeItem(id_item);
    setCarrito(Array.isArray(nuevo.items) ? nuevo.items : []);
  }

  const total = carrito.reduce((acc, it) => acc + it.precio, 0);

  return (
    <CarritoContext.Provider value={{ carrito, total, agregar, quitar }}>
      {children}
    </CarritoContext.Provider>
  );
}

export function useCarrito() {
  return useContext(CarritoContext);
}
