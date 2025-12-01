import express from "express";
import dotenv from "dotenv";
import { testConnection, sequelize } from "./src/database/database.js";

// Importar rutas
import amigurumisRoutes from "./src/routes/amigurumis.routes.js";
import patronesRoutes from "./src/routes/patrones.routes.js";
import authRoutes from "./src/routes/auth.routes.js";
import statsRoutes from "./src/routes/stats.routes.js";
import carritosRoutes from "./src/routes/carritos.routes.js";
import pedidosRoutes from "./src/routes/pedidos.routes.js";
import coleccionesRoutes from "./src/routes/colecciones.routes.js";
import usuariosRoutes from "./src/routes/usuarios.routes.js";

// Middlewares personalizados
import { errorHandler } from "./src/middlewares/errorHandler.js";
import { notFound } from "./src/middlewares/notFound.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ⭐⭐⭐ FIX CORS COMPLETO
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, x-session-id"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");

  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  next();
});

// Rutas
app.use("/api/amigurumis", amigurumisRoutes);
app.use("/api/patrones", patronesRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/stats", statsRoutes);
app.use("/api/carritos", carritosRoutes);
app.use("/api/pedidos", pedidosRoutes);
app.use("/api/colecciones", coleccionesRoutes);
app.use("/api/usuarios", usuariosRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  console.log("🔄 Probando conexión y sincronizando modelos...");
  await testConnection();

  try {
    await sequelize.sync();
    console.log("🟢 Modelos sincronizados con MySQL.");
  } catch (error) {
    console.error("🔴 Error al sincronizar modelos:", error);
  }

  app.listen(PORT, () =>
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`)
  );
};

startServer();
