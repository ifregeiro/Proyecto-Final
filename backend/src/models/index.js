import Amigurumi from "./Amigurumi.js";
import Patron from "./Patron.js";
import Coleccion from "./Coleccion.js";
import ImgAmigurumi from "./ImgAmigurumi.js";
import ImgPatron from "./ImgPatron.js";
import Usuario from "./Usuario.js";
import Carrito from "./Carrito.js";
import CarritoItem from "./CarritoItem.js";
import Pedido from "./Pedido.js";
import PedidoItem from "./PedidoItem.js";

// COLECCIONES
Coleccion.hasMany(Amigurumi, { foreignKey: "id_coleccion" });
Amigurumi.belongsTo(Coleccion, { foreignKey: "id_coleccion", as: "coleccion" });

Coleccion.hasMany(Patron, { foreignKey: "id_coleccion" });
Patron.belongsTo(Coleccion, { foreignKey: "id_coleccion", as: "coleccion" });

// IMÁGENES
Amigurumi.hasMany(ImgAmigurumi, { foreignKey: "id_amigurumi", as: "imagenes" });
ImgAmigurumi.belongsTo(Amigurumi, { foreignKey: "id_amigurumi" });

Patron.hasMany(ImgPatron, { foreignKey: "id_patron", as: "imagenes" });
ImgPatron.belongsTo(Patron, { foreignKey: "id_patron" });

// USUARIO → CARRITO
Usuario.hasOne(Carrito, { foreignKey: "id_usuario" });
Carrito.belongsTo(Usuario, { foreignKey: "id_usuario" });

// CARRITO → ITEMS
Carrito.hasMany(CarritoItem, { foreignKey: "id_carrito" });
CarritoItem.belongsTo(Carrito, { foreignKey: "id_carrito" });

// ITEMS → productos
Amigurumi.hasMany(CarritoItem, { foreignKey: "id_amigurumi" });
CarritoItem.belongsTo(Amigurumi, { foreignKey: "id_amigurumi" });

Patron.hasMany(CarritoItem, { foreignKey: "id_patron" });
CarritoItem.belongsTo(Patron, { foreignKey: "id_patron" });

// PEDIDOS
Usuario.hasMany(Pedido, { foreignKey: "id_usuario" });
Pedido.belongsTo(Usuario, { foreignKey: "id_usuario" });

Pedido.hasMany(PedidoItem, { foreignKey: "id_pedido" });
PedidoItem.belongsTo(Pedido, { foreignKey: "id_pedido" });

// Pedido item → productos
Amigurumi.hasMany(PedidoItem, { foreignKey: "id_amigurumi" });
PedidoItem.belongsTo(Amigurumi, { foreignKey: "id_amigurumi" });

Patron.hasMany(PedidoItem, { foreignKey: "id_patron" });
PedidoItem.belongsTo(Patron, { foreignKey: "id_patron" });

export {
  Amigurumi,
  Patron,
  Coleccion,
  ImgAmigurumi,
  ImgPatron,
  Usuario,
  Carrito,
  CarritoItem,
  Pedido,
  PedidoItem
};
