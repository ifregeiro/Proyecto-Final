import { Usuario } from "../models/index.js";
import bcrypt from "bcryptjs";

export default {
  async registrar(req, res) {
    try {
      const { nombre, apellido, email, contrasenia } = req.body;

      const hash = await bcrypt.hash(contrasenia, 10);

      const nuevoUsuario = await Usuario.create({
        nombre,
        apellido,
        email,
        contrasenia: hash,
        rol: "usuario" // DEFAULT
      });

      return res.status(201).json(nuevoUsuario);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async listar(req, res) {
    try {
      const usuarios = await Usuario.findAll();
      return res.json(usuarios);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async obtener(req, res) {
    try {
      const usuario = await Usuario.findByPk(req.params.id);
      if (!usuario) return res.status(404).json({ error: "Usuario no encontrado" });
      return res.json(usuario);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async actualizar(req, res) {
    try {
      const usuario = await Usuario.findByPk(req.params.id);
      if (!usuario) return res.status(404).json({ error: "Usuario no encontrado" });

      await usuario.update(req.body);
      return res.json(usuario);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async eliminar(req, res) {
    try {
      const usuario = await Usuario.findByPk(req.params.id);
      if (!usuario) return res.status(404).json({ error: "Usuario no encontrado" });

      await usuario.destroy();
      return res.json({ mensaje: "Usuario eliminado" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
};
