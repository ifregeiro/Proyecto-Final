import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

const Usuario = sequelize.define(
  "usuarios",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nombre: { type: DataTypes.STRING(255) },
    apellido: { type: DataTypes.STRING(255) },
    email: { type: DataTypes.STRING(255), unique: true, allowNull: false },
    contrasenia: { type: DataTypes.STRING(255), allowNull: false },
    rol: { type: DataTypes.ENUM("cliente","admin"), defaultValue: "cliente" },
    direccion: { type: DataTypes.STRING(255) },
    ciudad: { type: DataTypes.STRING(255) },
    provincia: { type: DataTypes.STRING(255) },
    codigo_postal: { type: DataTypes.STRING(20) },
    celular: { type: DataTypes.STRING(50) },
    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
  },
  { timestamps: false }
);

export default Usuario;
