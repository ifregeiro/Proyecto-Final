import ImgAmigurumi from "../models/ImgAmigurumi.js";
import ImgPatron from "../models/ImgPatron.js";

export default async function seedImagenes() {
  // Amigurumis
  await ImgAmigurumi.bulkCreate([
    { id_amigurumi: 1, url: "/img/amigurumis/gatito1.png", orden: 1 },
    { id_amigurumi: 1, url: "/img/amigurumis/gatito2.png", orden: 2 },

    { id_amigurumi: 2, url: "/img/amigurumis/conejito1.png", orden: 1 },

    { id_amigurumi: 3, url: "/img/amigurumis/dragon1.png", orden: 1 },
    { id_amigurumi: 3, url: "/img/amigurumis/dragon2.png", orden: 2 },
  ]);

  // Patrones
  await ImgPatron.bulkCreate([
    { id_patron: 1, url: "/img/patrones/gatito_patron.png", orden: 1 },
    { id_patron: 2, url: "/img/patrones/conejito_patron.png", orden: 1 },
  ]);
}
