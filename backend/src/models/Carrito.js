import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

const Carrito = sequelize.define(
  "carritos",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    id_usuario: { type: DataTypes.INTEGER, allowNull: false },
    creado_en: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  { timestamps: false }
);

export default Carrito;
