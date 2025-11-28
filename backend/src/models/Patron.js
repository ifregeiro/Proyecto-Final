import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

const Patron = sequelize.define(
  "patrones",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nombre: { type: DataTypes.STRING(255), allowNull: false },
    descripcion: DataTypes.TEXT,
    precio: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
    dificultad: {
      type: DataTypes.ENUM("facil", "intermedio", "avanzado"),
    },
    disponibilidad: { type: DataTypes.BOOLEAN, defaultValue: true },
    id_coleccion: { type: DataTypes.INTEGER },
  },
  { timestamps: false }
);

export default Patron;
