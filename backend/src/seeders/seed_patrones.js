import Patron from "../models/Patron.js";

export default async function seedPatrones() {
  await Patron.bulkCreate([
    {
      nombre: "Patrón Gatito Illumia",
      descripcion: "Instrucciones completas para tejer el gatito insignia.",
      precio: 2500,
      dificultad: "intermedio",
      id_coleccion: 1,
    },
    {
      nombre: "Patrón Conejito Dulzura",
      descripcion: "Patrón paso a paso del adorable conejo rosado.",
      precio: 2200,
      dificultad: "facil",
      id_coleccion: 1,
    }
  ]);
}
