import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

const ImgPatron = sequelize.define(
  "img_patrones",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    id_patron: { type: DataTypes.INTEGER, allowNull: false },
    url: { type: DataTypes.STRING(255), allowNull: false },
    orden: { type: DataTypes.INTEGER, defaultValue: 1 },
  },
  { timestamps: false }
);

export default ImgPatron;
