import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

const ImgAmigurumi = sequelize.define(
  "img_amigurumis",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    id_amigurumi: { type: DataTypes.INTEGER, allowNull: false },
    url: { type: DataTypes.STRING(255), allowNull: false },
    orden: { type: DataTypes.INTEGER, defaultValue: 1 },
  },
  { timestamps: false }
);

export default ImgAmigurumi;
