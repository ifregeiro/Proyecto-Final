import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

const Amigurumi = sequelize.define(
  "amigurumis",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nombre: { type: DataTypes.STRING(255), allowNull: false },
    descripcion: DataTypes.TEXT,
    precio: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
    tamanio: DataTypes.STRING(50),
    color: DataTypes.STRING(50),
    disponibilidad: { type: DataTypes.BOOLEAN, defaultValue: true },
    id_coleccion: { type: DataTypes.INTEGER },
  },
  { timestamps: false }
);

export default Amigurumi;
