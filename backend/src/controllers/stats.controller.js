import Pedido from "../models/Pedido.js";
import PedidoItem from "../models/PedidoItem.js";
import Usuario from "../models/Usuario.js";
import Amigurumi from "../models/Amigurumi.js";
import Patron from "../models/Patron.js";
import { Sequelize } from "sequelize";

// IMPLEMENTAR PARA FUTURO DASHBOARD ADMINISTRATIVO

export default {
  // Cantidad total de usuarios
  async usuariosTotales(req, res) {
    try {
      const total = await Usuario.count();
      return res.json({ total });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Ventas totales en $ del sistema
  async totalVentas(req, res) {
    try {
      const pedidos = await Pedido.sum("total");
      return res.json({ totalVentas: pedidos || 0 });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Productos más vendidos
  async topProductos(req, res) {
    try {
      const resultados = await PedidoItem.findAll({
        attributes: [
          "id_amigurumi",
          "id_patron",
          [Sequelize.fn("SUM", Sequelize.col("cantidad")), "totalVendidos"]
        ],
        group: ["id_amigurumi", "id_patron"],
        order: [[Sequelize.literal("totalVendidos"), "DESC"]],
        limit: 5,
        include: [
          { model: Amigurumi, as: "amigurumi" },
          { model: Patron, as: "patron" }
        ]
      });

      return res.json(resultados);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
};
