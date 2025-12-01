import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

const Coleccion = sequelize.define(
  "colecciones",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nombre: { type: DataTypes.STRING(255), allowNull: false }
  },
  { timestamps: false }
);

export default Coleccion;
