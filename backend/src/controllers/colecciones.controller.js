import Coleccion from "../models/Coleccion.js";

export default {
  async crear(req, res) {
    try {
      const coleccion = await Coleccion.create(req.body);
      return res.status(201).json(coleccion);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async listar(req, res) {
    try {
      const colecciones = await Coleccion.findAll();
      return res.json(colecciones);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
};
