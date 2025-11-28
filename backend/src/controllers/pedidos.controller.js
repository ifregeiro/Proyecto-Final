import Pedido from "../models/Pedido.js";
import PedidoItem from "../models/PedidoItem.js";
import Amigurumi from "../models/Amigurumi.js";
import Patron from "../models/Patron.js";

export default {
  async crear(req, res) {
    try {
      const { id_usuario, total, direccion_envio, codigo_postal, items } = req.body;

      // ❗ Validación: no dejar crear pedidos a nombre de otro usuario
      if (id_usuario !== req.user.id) {
        return res.status(403).json({ error: "No puedes crear pedidos para otro usuario" });
      }

      const pedido = await Pedido.create({
        id_usuario,
        total,
        direccion_envio,
        codigo_postal
      });

      for (const it of items) {
        await PedidoItem.create({
          id_pedido: pedido.id,
          id_amigurumi: it.id_amigurumi,
          id_patron: it.id_patron,
          cantidad: it.cantidad,
          precio_unitario: it.precio_unitario
        });
      }

      return res.status(201).json(pedido);

    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async listar(req, res) {
    try {
      const where = {};

      // ❗ Si no es admin, solo ve sus propios pedidos
      if (req.user.rol !== "admin") {
        where.id_usuario = req.user.id;
      }

      const pedidos = await Pedido.findAll({
        where,
        include: [
          {
            model: PedidoItem,
            as: "items",
            include: [
              { model: Amigurumi, as: "amigurumi" },
              { model: Patron, as: "patron" }
            ]
          }
        ]
      });

      return res.json(pedidos);

    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
};
