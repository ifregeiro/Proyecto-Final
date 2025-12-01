import jwt from "jsonwebtoken";

export default function authMiddleware(req, res, next) {
  try {
    const header = req.headers.authorization;

    if (!header)
      return res.status(401).json({ error: "Token no proporcionado" });

    // Formato: "Bearer xxxx"
    const token = header.split(" ")[1];

    if (!token)
      return res.status(401).json({ error: "Token inválido" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Guardamos los datos del usuario para las siguientes funciones
    req.user = decoded;

    next();

  } catch (error) {
    return res.status(401).json({ error: "Token inválido o expirado" });
  }
}
