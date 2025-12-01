import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

const Carrito = sequelize.define(
  "carritos",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },

    // 📌 carrito de usuario o invitado
    id_usuario: { type: DataTypes.INTEGER, allowNull: true },

    // 📌 carrito de invitado (guest_xxxx)
    sessionId: { type: DataTypes.STRING, allowNull: true },

    creado_en: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
  },
  { timestamps: false }
);

export default Carrito;