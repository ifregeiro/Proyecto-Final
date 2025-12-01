import Usuario from "../models/Usuario.js";

export default {
  async registrar(req, res) {
    try {
      const nuevo = await Usuario.create(req.body);
      res.status(201).json(nuevo);
    } catch (error) {
      res.status(500).json({ error: "Error al registrar usuario" });
    }
  },

  async listar(req, res) {
    try {
      const usuarios = await Usuario.findAll();
      res.json(usuarios);
    } catch (error) {
      res.status(500).json({ error: "Error al listar usuarios" });
    }
  },

  async obtener(req, res) {
    try {
      const usuario = await Usuario.findByPk(req.params.id);

      if (!usuario)
        return res.status(404).json({ error: "Usuario no encontrado" });

      res.json(usuario);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener usuario" });
    }
  }
};
