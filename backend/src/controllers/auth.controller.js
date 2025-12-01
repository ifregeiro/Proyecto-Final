import { Usuario } from "../models/index.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export default {
  async login(req, res) {
    try {
      const { email, contrasenia } = req.body;

      // 1. Buscar usuario
      const usuario = await Usuario.findOne({ where: { email } });
      if (!usuario)
        return res.status(404).json({ error: "Usuario no encontrado" });

      // 2. Comparar contraseña
      const esValida = await bcrypt.compare(contrasenia, usuario.contrasenia);
      if (!esValida)
        return res.status(401).json({ error: "Credenciales incorrectas" });

      // 3. Generar token con rol
      const token = jwt.sign(
        {
          id: usuario.id,
          email: usuario.email,
          rol: usuario.rol
        },
        process.env.JWT_SECRET,
        { expiresIn: "24h" }
      );

      return res.json({
        mensaje: "Login exitoso",
        token,
        usuario: {
          id: usuario.id,
          nombre: usuario.nombre,
          apellido: usuario.apellido,
          email: usuario.email,
          rol: usuario.rol
        }
      });

    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
};
