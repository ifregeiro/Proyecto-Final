import ImgAmigurumi from "../models/ImgAmigurumi.js";
import ImgPatron from "../models/ImgPatron.js";

export default async function seedImagenes() {
  // Amigurumis
  await ImgAmigurumi.bulkCreate([
    { id_amigurumi: 1, url: "/img/amigurumis/Tortuga_Funji_2.png", orden: 1 },
    { id_amigurumi: 1, url: "/img/amigurumis/Tortuga_Funji_1.png", orden: 2 },
    { id_amigurumi: 1, url: "/img/amigurumis/Tortuga_Funji_3.png", orden: 3 },

    { id_amigurumi: 2, url: "/img/amigurumis/Pistacho_3.png", orden: 1 },
    { id_amigurumi: 2, url: "/img/amigurumis/Pistacho_2.png", orden: 2 },
    { id_amigurumi: 2, url: "/img/amigurumis/Pistacho_1.png", orden: 3 },

    { id_amigurumi: 3, url: "/img/amigurumis/Mongo_2.png", orden: 1 },
    { id_amigurumi: 3, url: "/img/amigurumis/Mongo_1.png", orden: 2 },

    { id_amigurumi: 4, url: "/img/amigurumis/Tortuga_Daisy_1.png", orden: 1 },
    { id_amigurumi: 4, url: "/img/amigurumis/Tortuga_Daisy_2.png", orden: 2 },

    { id_amigurumi: 5, url: "/img/amigurumis/Vaca_Josefina_1.png", orden: 1 },
    { id_amigurumi: 5, url: "/img/amigurumis/Vaca_Josefina_2.png", orden: 2 },
    { id_amigurumi: 5, url: "/img/amigurumis/Vaca_Josefina_3.png", orden:3 },

    { id_amigurumi: 6, url: "/img/amigurumis/Serpiente_Confeti_1.png", orden: 1 },
    { id_amigurumi: 6, url: "/img/amigurumis/Serpiente_Confeti_2.png", orden: 2 },

    { id_amigurumi: 7, url: "/img/amigurumis/Seraphine_1.png", orden: 1 },
    { id_amigurumi: 7, url: "/img/amigurumis/Seraphine_2.png", orden: 2 },
    
  ]);

  // Patrones
  await ImgPatron.bulkCreate([
    { id_patron: 1, url: "/img/patrones/Pistacho_3.png", orden: 1 },
    { id_patron: 2, url: "/img/patrones/Mongo_2.png", orden: 1 },
    { id_patron: 3, url: "/img/patrones/Mongo_1.png", orden: 1 },
  ]);
}
