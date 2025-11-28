import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

const Usuario = sequelize.define(
  "usuarios",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nombre: { type: DataTypes.STRING(150), allowNull: false },
    apellido: { type: DataTypes.STRING(150), allowNull: false },
    email: { type: DataTypes.STRING(255), allowNull: false, unique: true },
    contrasenia: { type: DataTypes.STRING(255), allowNull: false },
    rol: {
      type: DataTypes.ENUM("cliente", "admin"),
      defaultValue: "cliente",
    },
    direccion: DataTypes.STRING(255),
    ciudad: DataTypes.STRING(150),
    provincia: DataTypes.STRING(150),
    codigo_postal: DataTypes.STRING(20),
    celular: DataTypes.STRING(50),
    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  { timestamps: false }
);

export default Usuario;
