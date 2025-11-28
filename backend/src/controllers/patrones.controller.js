import Patron from "../models/Patron.js";
import ImgPatron from "../models/ImgPatron.js";
import Coleccion from "../models/Coleccion.js";

export default {
  async crear(req, res) {
    try {
      const nuevo = await Patron.create(req.body);
      return res.status(201).json(nuevo);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async listar(req, res) {
    try {
      const items = await Patron.findAll({
        include: [
          { model: Coleccion, as: "coleccion" },
          { model: ImgPatron, as: "imagenes" }
        ]
      });
      return res.json(items);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async obtener(req, res) {
    try {
      const item = await Patron.findByPk(req.params.id, {
        include: ["imagenes", "coleccion"]
      });
      if (!item) return res.status(404).json({ error: "No encontrado" });
      return res.json(item);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
};
