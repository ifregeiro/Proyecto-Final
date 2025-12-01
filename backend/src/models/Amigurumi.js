import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

const Amigurumi = sequelize.define(
  "amigurumis",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    nombre: { type: DataTypes.STRING(255), allowNull: false },
    descripcion: { type: DataTypes.TEXT },
    precio: { type: DataTypes.DECIMAL(10,2), allowNull: false },
    tamanio: { type: DataTypes.STRING(255) },
    color: { type: DataTypes.STRING(255) },
    disponibilidad: { type: DataTypes.BOOLEAN, defaultValue: true },
    id_coleccion: { type: DataTypes.INTEGER, allowNull: true },
    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  { timestamps: false }
);

export default Amigurumi;
