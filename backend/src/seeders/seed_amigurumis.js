import Amigurumi from "../models/Amigurumi.js";

export default async function seedAmigurumis() {
  await Amigurumi.bulkCreate([
    {
      nombre: "Tortuga Funji",
      descripcion: "Una tortuga marina con mucho amor para dar.",
      precio: 13000,
      tamanio: "20cm",
      color: "Rojo, Marrón y Blanco",
      id_coleccion: 2,
    },
    {
      nombre: "Loro Pistacho",
      descripcion: "Un loro colorido y vibrante, compañero de aventuras.",
      precio: 14000,
      tamanio: "22cm",
      color: "Verde Pistacho",
      id_coleccion: 1,
    },
    {
      nombre: "Oruga Mongo",
      descripcion: "Oruga mágica, colorida y articulable, perfecta para regalar(se).",
      precio: 8000,
      tamanio: "10cm",
      color: "Azul, Amarrilo, Rosa y Celeste",
      id_coleccion: 3,
    },
    {
      nombre: "Tortuga Daisy",
      descripcion: "Tortuga que encanta al abrazar y acompañar en el día a día.",
      precio: 16000,
      tamanio: "20cm",
      color: "Lila, Amarillo y Blanco",
      id_coleccion: 2,
    },
    {
      nombre: "Vaca Josefina",
      descripcion: "Josefina es una vaca tierna y suave, ideal para abrazar.",
      precio: 23000,
      tamanio: "22cm",
      color: "Celeste y Blanco",
      id_coleccion: 1,
    },
    {
      nombre: "Serpiente Confeti",
      descripcion: "Serpiente larga y flexible, con colores vibrantes y alegres.",
      precio: 7800,
      tamanio: "40cm",
      color: "Crema c/ Brillo Celeste, Rosa y Amarillo",
      id_coleccion: 3,
    },
        {
      nombre: "Seraphine",
      descripcion: "El flamenco más elegante y sofisticado para decorar tu vida.",
      precio: 10800,
      tamanio: "30cm",
      color: "Rosa y Negro",
      id_coleccion: 1,
    }
  ]);
}
