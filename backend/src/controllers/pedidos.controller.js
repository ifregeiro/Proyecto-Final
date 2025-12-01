import Pedido from "../models/Pedido.js";
import PedidoItem from "../models/PedidoItem.js";
import Amigurumi from "../models/Amigurumi.js";
import Patron from "../models/Patron.js";

export default {
  // ----------------------------------------------------------
  // 🟢 Crear pedido
  // ----------------------------------------------------------
  async crear(req, res) {
    try {
      const { id_usuario, total, direccion_envio, codigo_postal, items } = req.body;

      // Validación: no dejar que se creen pedidos de otro usuario
      if (id_usuario !== req.user.id) {
        return res.status(403).json({
          error: "No puedes crear pedidos para otro usuario"
        });
      }

      // Crear pedido
      const pedido = await Pedido.create({
        id_usuario,
        total,
        direccion_envio,
        codigo_postal
      });

      // Insertar items
      for (const item of items) {
        await PedidoItem.create({
          id_pedido: pedido.id,
          id_amigurumi: item.id_amigurumi || null,
          id_patron: item.id_patron || null,
          cantidad: item.cantidad,
          precio_unitario: item.precio_unitario
        });
      }

      return res.status(201).json(pedido);

    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // ----------------------------------------------------------
  // 🟢 Listar pedidos (Admin ve todos, usuario ve los suyos)
  // ----------------------------------------------------------
  async listar(req, res) {
    try {
      const where = {};

      if (req.user.rol !== "admin") {
        where.id_usuario = req.user.id; // usuario común solo ve los suyos
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
  },

  // ----------------------------------------------------------
  // 🟢 Obtener pedido por ID (validar dueño si no es admin)
  // ----------------------------------------------------------
  async obtener(req, res) {
    try {
      const pedido = await Pedido.findByPk(req.params.id, {
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

      if (!pedido) {
        return res.status(404).json({ error: "Pedido no encontrado" });
      }

      // Si NO es admin, validar dueño
      if (req.user.rol !== "admin" && pedido.id_usuario !== req.user.id) {
        return res.status(403).json({
          error: "No tienes permiso para ver este pedido"
        });
      }

      return res.json(pedido);

    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // ----------------------------------------------------------
  // 🟢 Actualizar estado (solo admin)
  // ----------------------------------------------------------
  async actualizarEstado(req, res) {
    try {
      const pedido = await Pedido.findByPk(req.params.id);

      if (!pedido) {
        return res.status(404).json({ error: "Pedido no encontrado" });
      }

      const { estado } = req.body;

      await pedido.update({ estado });

      return res.json({
        mensaje: "Estado actualizado correctamente",
        pedido
      });

    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // ----------------------------------------------------------
  // 🟢 Eliminar pedido (solo admin)
  // ----------------------------------------------------------
  async eliminar(req, res) {
    try {
      const pedido = await Pedido.findByPk(req.params.id);

      if (!pedido) {
        return res.status(404).json({ error: "Pedido no encontrado" });
      }

      await pedido.destroy();

      return res.json({
        mensaje: "Pedido eliminado correctamente"
      });

    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
};
