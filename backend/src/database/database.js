import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

export const sequelize = new Sequelize(
  process.env.DB_NAME,       // illumiadb
  process.env.DB_USER,       // root
  process.env.DB_PASSWORD,   // tu contraseña
  {
    host: process.env.DB_HOST,   // localhost
    dialect: "mysql",
    logging: false,
    define: {
      freezeTableName: true,    // respeta el nombre exacto de las tablas
      timestamps: false         // usamos created_at manual
    }
  }
);

// test connection
export const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("🟢 Conexión a MySQL exitosa.");
  } catch (error) {
    console.error("🔴 Error al conectar MySQL:", error);
  }
};
