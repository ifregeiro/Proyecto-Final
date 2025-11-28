import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

const Pedido = sequelize.define(
  "pedidos",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    id_usuario: { type: DataTypes.INTEGER, allowNull: false },
    total: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
    estado: {
      type: DataTypes.ENUM("pendiente", "pagado", "enviado", "entregado", "cancelado"),
      defaultValue: "pendiente",
    },
    codigo_postal: DataTypes.STRING(20),
    direccion_envio: DataTypes.STRING(255),
    creado_en: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  { timestamps: false }
);

export default Pedido;
