import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

const CarritoItem = sequelize.define(
  "carrito_items",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    id_carrito: { type: DataTypes.INTEGER, allowNull: false },
    id_amigurumi: { type: DataTypes.INTEGER },
    id_patron: { type: DataTypes.INTEGER },
    cantidad: { type: DataTypes.INTEGER, defaultValue: 1 },
  },
  { timestamps: false }
);

export default CarritoItem;
