import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

const PedidoItem = sequelize.define(
  "pedido_items",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    id_pedido: { type: DataTypes.INTEGER, allowNull: false },
    id_amigurumi: { type: DataTypes.INTEGER, allowNull: true },
    id_patron: { type: DataTypes.INTEGER, allowNull: true },
    cantidad: { type: DataTypes.INTEGER, defaultValue: 1 },
    precio_unitario: { type: DataTypes.DECIMAL(10,2), allowNull: false }
  },
  { timestamps: false }
);

export default PedidoItem;
