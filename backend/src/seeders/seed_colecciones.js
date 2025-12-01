import Coleccion from "../models/Coleccion.js";

export default async function seedColecciones() {
  await Coleccion.bulkCreate([
    { nombre: "Animales" },
    { nombre: "Fantasía" },
    { nombre: "Edición Especial" }
  ]);
}
