import express from "express";
import dotenv from "dotenv";
import { testConnection, sequelize } from "./database/database.js";

// Importar rutas
import pelucheRoutes from "./routes/peluche.routes.js";
import patronRoutes from "./routes/patron.routes.js";
import authRoutes from "./routes/auth.routes.js";
import statsRoutes from "./routes/stats.routes.js";

// Middlewares personalizados
import { errorHandler } from "./middlewares/errorHandler.js";
import { notFound } from "./middlewares/notFound.js";

dotenv.config();

const app = express();

// -----------------------------
// 🧩 Middlewares globales
// -----------------------------
app.use(express.json()); // Para leer JSON
app.use(express.urlencoded({ extended: true })); // Formularios

// Habilitar CORS básico (lo mejoramos cuando integremos JWT y frontend)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // luego lo cambiamos al dominio del frontend real
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  next();
});

// -----------------------------
// 📌 Rutas principales
// -----------------------------
app.use("/api/peluches", pelucheRoutes);
app.use("/api/patrones", patronRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/stats", statsRoutes);

// -----------------------------
// 🚫 Ruta no encontrada
// -----------------------------
app.use(notFound);

// -----------------------------
// ❗ Manejo global de errores
// -----------------------------
app.use(errorHandler);

// -----------------------------
// 🚀 Iniciar servidor
// -----------------------------
const PORT = process.env.PORT || 3000;

const startServer = async () => {
  console.log("🔄 Probando conexión y sincronizando modelos...");

  // Testear conexión
  await testConnection();

  // Sincronizar modelos con MySQL
  try {
    await sequelize.sync(); // ⬅ sin { force: true } para NO borrar nada
    console.log("🟢 Modelos sincronizados con MySQL.");
  } catch (error) {
    console.error("🔴 Error al sincronizar modelos:", error);
  }

  // Levantar Express
  app.listen(PORT, () =>
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`)
  );
};

startServer();
