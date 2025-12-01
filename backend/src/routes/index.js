import { Router } from "express";

import amigurumisRoutes from "./amigurumis.routes.js";
import patronesRoutes from "./patrones.routes.js";
import carritosRoutes from "./carritos.routes.js";
import pedidosRoutes from "./pedidos.routes.js";
import coleccionesRoutes from "./colecciones.routes.js";
import usuariosRoutes from "./usuarios.routes.js";

const router = Router();
// /api/amigurumis
router.use("/amigurumis", amigurumisRoutes);
// /api/patrones
router.use("/patrones", patronesRoutes);
// /api/carritos
router.use("/carritos", carritosRoutes);
// /api/pedidos
router.use("/pedidos", pedidosRoutes);
// /api/colecciones
router.use("/colecciones", coleccionesRoutes);
// /api/usuarios
router.use("/usuarios", usuariosRoutes);

export default router;
