import Carrito from "../models/Carrito.js";
import CarritoItem from "../models/CarritoItem.js";
import Amigurumi from "../models/Amigurumi.js";
import Patron from "../models/Patron.js";

export default {
  async obtenerCarrito(req, res) {
    try {
      const carrito = await Carrito.findOne({
        where: { id_usuario: req.params.id },
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

      if (!carrito) {
        return res.status(404).json({ error: "Carrito no encontrado" });
      }

      // ❗ Validación de dueño
      if (carrito.id_usuario !== req.user.id) {
        return res.status(403).json({ error: "Acceso denegado" });
      }

      return res.json(carrito);

    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async agregarItem(req, res) {
    try {
      const { id_carrito, id_amigurumi, id_patron, cantidad } = req.body;

      const carrito = await Carrito.findByPk(id_carrito);

      if (!carrito) {
        return res.status(404).json({ error: "Carrito no encontrado" });
      }

      // ❗ Validación de dueño
      if (carrito.id_usuario !== req.user.id) {
        return res.status(403).json({ error: "Acceso denegado" });
      }

      const item = await CarritoItem.create({
        id_carrito,
        id_amigurumi,
        id_patron,
        cantidad
      });

      return res.status(201).json(item);

    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
};
