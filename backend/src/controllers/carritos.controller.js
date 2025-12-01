import Carrito from "../models/Carrito.js";
import CarritoItem from "../models/CarritoItem.js";
import Amigurumi from "../models/Amigurumi.js";
import Patron from "../models/Patron.js";

export const obtenerCarrito = async (req, res) => {
  try {
    const sessionId = req.headers["x-session-id"];
    if (!sessionId) return res.status(400).json({ error: "Falta sessionId" });

    let carrito = await Carrito.findOne({
      where: { sessionId },
      include: [
        {
          model: CarritoItem,
          as: "items",
          include: [
            { model: Amigurumi, as: "amigurumi" },
            { model: Patron, as: "patron" }
          ]
        }
      ]
    });

    // Si no existe, lo creo
    if (!carrito) {
      carrito = await Carrito.create({ sessionId });
    }

    return res.json(carrito);

  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const agregarItem = async (req, res) => {
  try {
    const sessionId = req.headers["x-session-id"];
    if (!sessionId) return res.status(400).json({ error: "Falta sessionId" });

    let carrito = await Carrito.findOne({ where: { sessionId } });

    if (!carrito) {
      carrito = await Carrito.create({ sessionId });
    }

    const { id_amigurumi, id_patron } = req.body;

    const item = await CarritoItem.create({
      id_carrito: carrito.id,
      id_amigurumi,
      id_patron,
      cantidad: 1
    });

    return res.status(201).json(item);

  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const quitarItem = async (req, res) => {
  try {
    const { itemId } = req.params;

    await CarritoItem.destroy({ where: { id: itemId } });

    return res.json({ message: "Item eliminado" });

  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
