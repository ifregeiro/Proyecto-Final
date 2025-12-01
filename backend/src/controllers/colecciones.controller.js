import Coleccion from "../models/Coleccion.js";

export default {
  async crear(req, res) {
    try {
      const nueva = await Coleccion.create(req.body);
      res.status(201).json(nueva);
    } catch (error) {
      res.status(500).json({ error: "Error al crear colección" });
    }
  },

  async listar(req, res) {
    try {
      const lista = await Coleccion.findAll();
      res.json(lista);
    } catch (error) {
      res.status(500).json({ error: "Error al listar colecciones" });
    }
  }
};
