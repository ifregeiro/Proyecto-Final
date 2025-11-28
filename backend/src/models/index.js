import Usuario from "./Usuario.js";
import Coleccion from "./Coleccion.js";
import Amigurumi from "./Amigurumi.js";
import Patron from "./Patron.js";
import ImgAmigurumi from "./ImgAmigurumi.js";
import ImgPatron from "./ImgPatron.js";
import Carrito from "./Carrito.js";
import CarritoItem from "./CarritoItem.js";
import Pedido from "./Pedido.js";
import PedidoItem from "./PedidoItem.js";

/* ---------------------- RELACIONES ---------------------- */

// Usuario → Carrito
Usuario.hasOne(Carrito, { foreignKey: "id_usuario", onDelete: "CASCADE" });
Carrito.belongsTo(Usuario, { foreignKey: "id_usuario" });

// Colección → Amigurumis
Coleccion.hasMany(Amigurumi, { foreignKey: "id_coleccion" });
Amigurumi.belongsTo(Coleccion, { foreignKey: "id_coleccion" });

// Colección → Patrones
Coleccion.hasMany(Patron, { foreignKey: "id_coleccion" });
Patron.belongsTo(Coleccion, { foreignKey: "id_coleccion" });

// Amigurumi → Imagenes
Amigurumi.hasMany(ImgAmigurumi, {
  foreignKey: "id_amigurumi",
  onDelete: "CASCADE",
});
ImgAmigurumi.belongsTo(Amigurumi, { foreignKey: "id_amigurumi" });

// Patron → Imagenes
Patron.hasMany(ImgPatron, {
  foreignKey: "id_patron",
  onDelete: "CASCADE",
});
ImgPatron.belongsTo(Patron, { foreignKey: "id_patron" });

// Carrito → Items
Carrito.hasMany(CarritoItem, {
  foreignKey: "id_carrito",
  onDelete: "CASCADE",
});
CarritoItem.belongsTo(Carrito, { foreignKey: "id_carrito" });

// Carrito Items → Productos
Amigurumi.hasMany(CarritoItem, { foreignKey: "id_amigurumi" });
Patron.hasMany(CarritoItem, { foreignKey: "id_patron" });

// Pedido → Usuario
Usuario.hasMany(Pedido, { foreignKey: "id_usuario", onDelete: "CASCADE" });
Pedido.belongsTo(Usuario, { foreignKey: "id_usuario" });

// Pedido → Items
Pedido.hasMany(PedidoItem, { foreignKey: "id_pedido", onDelete: "CASCADE" });
PedidoItem.belongsTo(Pedido, { foreignKey: "id_pedido" });

// Items → Productos
Amigurumi.hasMany(PedidoItem, { foreignKey: "id_amigurumi" });
Patron.hasMany(PedidoItem, { foreignKey: "id_patron" });

export default {
  Usuario,
  Coleccion,
  Amigurumi,
  Patron,
  ImgAmigurumi,
  ImgPatron,
  Carrito,
  CarritoItem,
  Pedido,
  PedidoItem,
};
