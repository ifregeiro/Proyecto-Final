import Amigurumi from "../models/Amigurumi.js";

export default async function seedAmigurumis() {
  await Amigurumi.bulkCreate([
    {
      nombre: "Gatito Illumia",
      descripcion: "El clásico gatito blanco y negro, icono de Illumia.",
      precio: 8500,
      tamanio: "20cm",
      color: "Blanco y Negro",
      id_coleccion: 1,
    },
    {
      nombre: "Conejito Dulzura",
      descripcion: "Un conejito rosa super tierno.",
      precio: 7800,
      tamanio: "18cm",
      color: "Rosa pastel",
      id_coleccion: 1,
    },
    {
      nombre: "Dragón Guardián",
      descripcion: "Una edición especial de un dragón azul tejido a mano.",
      precio: 12000,
      tamanio: "25cm",
      color: "Azul",
      id_coleccion: 3,
    }
  ]);
}
