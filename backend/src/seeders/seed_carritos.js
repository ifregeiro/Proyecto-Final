import Carrito from "../models/Carrito.js";

export default async function seedCarritos() {
  await Carrito.bulkCreate([
    { id_usuario: 1 },
    { id_usuario: 2 },
    { id_usuario: 3 },
    { id_usuario: 4 },
  ]);
}
