import Patron from "../models/Patron.js";
import ImgPatron from "../models/ImgPatron.js";
import Coleccion from "../models/Coleccion.js";

export default {
  async crear(req, res) {
    try {
      const nuevo = await Patron.create(req.body);
      res.status(201).json(nuevo);
    } catch (error) {
      res.status(500).json({ error: "Error al crear patrón" });
    }
  },

  async listar(req, res) {
    try {
      const { ids } = req.query;
      let where = {};

      // ⭐ Soporte para /patrones?ids=1,2
      if (ids) {
        const idArray = ids.split(",").map(Number);
        where.id = idArray;
      }

      const patrones = await Patron.findAll({
        where,
        include: [
          { model: ImgPatron, as: "imagenes" },
          { model: Coleccion, as: "coleccion" }
        ],
      });

      res.json(patrones);
    } catch (error) {
      res.status(500).json({ error: "Error al listar patrones" });
    }
  },

  async obtener(req, res) {
    try {
      const { id } = req.params;

      const patron = await Patron.findByPk(id, {
        include: [
          { model: ImgPatron, as: "imagenes" },
          { model: Coleccion, as: "coleccion" }
        ],
      });

      if (!patron)
        return res.status(404).json({ error: "Patrón no encontrado" });

      res.json(patron);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener patrón" });
    }
  }
};
