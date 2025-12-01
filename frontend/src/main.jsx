import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { CarritoProvider } from "./context/carritoContext";

createRoot(document.getElementById('root')).render(
  <CarritoProvider>
    <App />
  </CarritoProvider>
);

// Usuario Invitado
if (!localStorage.getItem("sessionId")) {
  const newSession = "guest_" + Math.random().toString(36).substring(2, 10);
  localStorage.setItem("sessionId", newSession);
}
