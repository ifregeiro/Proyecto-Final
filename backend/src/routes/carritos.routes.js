import { Router } from "express";
import * as controller from "../controllers/carritos.controller.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = Router();

// Todas las acciones del carrito requieren autenticación
router.post("/", authMiddleware, controller.crearCarrito);
router.get("/:id", authMiddleware, controller.obtenerCarrito);

// Items del carrito
router.post("/:id/items", authMiddleware, controller.agregarItem);
router.delete("/:id/items/:itemId", authMiddleware, controller.eliminarItem);
router.put("/:id/items/:itemId", authMiddleware, controller.actualizarCantidad);

export default router;
