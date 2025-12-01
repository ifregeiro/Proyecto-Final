import Patron from "../models/Patron.js";

export default async function seedPatrones() {
  await Patron.bulkCreate([
    {
      nombre: "Patrón Loro Pistacho",
      descripcion: "Instrucciones completas para tejer al compañero Pistacho.",
      precio: 5000,
      dificultad: "intermedio",
      id_coleccion: 1,
    },
    {
      nombre: "Patrón Oruga Mongo",
      descripcion: "Patrón paso a paso del colorido y articulable Mongo.",
      precio: 3000,
      dificultad: "facil",
      id_coleccion: 3,
    },
    {
      nombre: "Patrón Oruga Mongo",
      descripcion: "Patrón paso a paso del colorido y articulable Mongo.",
      precio: 3000,
      dificultad: "facil",
      id_coleccion: 3,
    }
  ]);
}
