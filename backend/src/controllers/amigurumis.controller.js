import Amigurumi from "../models/Amigurumi.js";
import ImgAmigurumi from "../models/ImgAmigurumi.js";
import Coleccion from "../models/Coleccion.js";

export default {
  // Crear
  async crear(req, res) {
    try {
      const nuevo = await Amigurumi.create(req.body);
      res.status(201).json(nuevo);
    } catch (error) {
      res.status(500).json({ error: "Error al crear amigurumi", detalle: error.message });
    }
  },

  // Listar
  async listar(req, res) {
    try {
      const { ids } = req.query;
      let where = {};

      // ⭐ Si vienen IDs, filtramos
      if (ids) {
        const idArray = ids.split(",").map(Number);
        where.id = idArray;
      }

      const amigurumis = await Amigurumi.findAll({
        where,
        include: [
          { model: ImgAmigurumi, as: "imagenes" },
          { model: Coleccion, as: "coleccion" }
        ],
      });

      res.json(amigurumis);
    } catch (error) {
      res.status(500).json({ error: "Error al listar amigurumis" });
    }
  },

  // Obtener por ID
  async obtener(req, res) {
    try {
      const { id } = req.params;

      const amigurumi = await Amigurumi.findByPk(id, {
        include: [
          { model: ImgAmigurumi, as: "imagenes" },
          { model: Coleccion, as: "coleccion" }
        ],
      });

      if (!amigurumi)
        return res.status(404).json({ error: "Amigurumi no encontrado" });

      res.json(amigurumi);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener amigurumi" });
    }
  }
};
